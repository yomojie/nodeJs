/**
 * Created by: MoJie
 * Date: 2018/12/21
 */
'use strict'

const Fs = require('fs')
const express = require('express')
const Pinyin = require('node-pinyin')
const svgCaptcha = require('svg-captcha')
const languages = require('../../language')
const { api } = require('../api')
const { githubWebHooks } = require('./actions')

const router = express.Router()

let language

const reduce = {
  // 获取中文拼音
  getPinYin(req, style = 'normal') {
    const { reqParam } = this.params
    if (typeof reqParam.text === 'string') {
      let data = Pinyin(reqParam.text, { style })
      data = Array.prototype.concat.apply([], data)
      return Promise.resolve({ data })
    } else {
      return Promise.reject('text has to be a string')
    }
  },
  // 获取首字母
  getFirstLetter(req) {
    return this.getPinYin(req, 'firstLetter')
  },
  // 获取公钥
  getPublicKey() {
    const key = Fs.readFileSync('./pem/rsa_public_key.pem').toString()
    return Promise.resolve({ key })
  },
  // 生成图片验证码
  getCaptcha() {
    // create 生成随机验证码
    // createMathExpr 生成数学公式
    if (!this.params.reqParam.uuid) return Promise.reject('uuid cannot be null')
    const captcha = svgCaptcha.createMathExpr({
      noise: 2,
      width: 120,
      height: 40,
      fontSize: 40,
      ignoreChars: '0o1ilI'
    })
    api.params = {
      collection: '_captcha',
      reqParam: {
        uuid: this.params.reqParam.uuid,
        captcha: captcha.text.toLowerCase()
      }
    }
    return api.add().then(() => captcha.data)
  }
}

router.all('/*', (req, res, next) => {
  const reqParam = req._requestParam
  const path = req.url.replace(/(^\/)|(\?[\s\S]*)/g, '').split('/')
  const handle = path.pop()
  const params = {
    reqParam,
    path
  }
  language = languages[req._language] ? languages[req._language] : languages['zh-CN']
  if (reduce.hasOwnProperty(handle)) {
    reduce.params = params
    reduce[handle](req).then(data => {
      if (handle === 'getCaptcha') return res.type('svg').send(data)
      data = Object.assign({
        ok: 1,
        msg: 'success'
      }, data)
      res.send(data)
    }).catch(err => {
      if (typeof err.msg === 'string') {
        err = Object.assign({
          ok: 0,
          msg: language.errorMsg
        }, err)
      } else {
        err = {
          ok: 0,
          msg: language.errorMsg,
          error: err.toString()
        }
        console.log('util Route Error:\n'.red.bold, err, '\n')
      }
      res.send(err)
    })
  } else {
    next()
  }
})

router.post('/webHooks', githubWebHooks)

module.exports = router
