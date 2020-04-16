"use strict";(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-387c67ec"],{"22d5":function(t,e,n){var a=n("31ff");n.n(a).a},"31ff":function(){},"61f7":function(t,e,n){n.d(e,"a",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return u});var a=/^[cC]\w{4,10}/,i=/^1\d{10,11}$/,s=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,o=/^\d{10}/;function r(t){return a.test(t)}function c(t){return i.test(t)}function l(t){return s.test(t)}function u(t){return o.test(t)}},"69c7":function(){},"6f92":function(t,e,n){n.r(e);var a=(n("ac1f"),n("5319"),n("5530")),i=n("5880"),s=n("aa98"),o=n("61f7"),r={name:"sign_in",components:{SeedCode:s.a},beforeRouteEnter:function(t,e,n){n(function(t){t.formPath="/register"===e.path?"/":e.fullPath})},data:function(){return{formPath:"/",loginForm:{loginName:null,verifyStr:null,messageId:null,captcha:null,captchaId:null},image:null,isNeedCaptcha:!1,sendCodeParams:{use:2,mobileNo:null}}},computed:{enableSendBtn:function(){return Object(o.d)(this.loginForm.loginName)},validateForm:function(){return this.enableSendBtn?this.loginForm.messageId&&this.loginForm.verifyStr&&6===this.loginForm.verifyStr.length:Object(o.a)(this.loginForm.loginName)&&Object(o.c)(this.loginForm.verifyStr)}},created:function(){this.getIsNeedCaptcha(),this.toggleSideBar(!1)},methods:Object(a.a)({},Object(i.mapMutations)(["toggleSideBar","setCustomerInfo"]),{},Object(i.mapActions)(["login","getCustomerInfo","getBalanceInfo"]),{getIsNeedCaptcha:function(){var a=this;this.$api.getIsNeedCaptcha({_isNeedLoading:!1}).then(function(t){var e=t.head,n=t.body;"0000"===e.errCode&&(a.isNeedCaptcha=!!n.needCaptcha,a.isNeedCaptcha&&a.getCaptcha())})},getCaptcha:function(){var a=this;this.$api.getCaptcha({_isNeedLoading:!1}).then(function(t){var e=t.head,n=t.body;"0000"===e.errCode&&(a.loginForm.captchaId=n.captchaId,a.image="data:image/jpeg;base64,"+n.image)})},replaceNonNum:function(t){t.target.value=t.target.value.replace(/[^0-9]/gi,"")},sendCodeBefore:function(){this.sendCodeParams.mobileNo=this.$encrypted(this.loginForm.loginName)},sendCallBack:function(t){this.loginForm.messageId=t},submit:function(){var e=this;this.validateForm&&this.login(this.loginForm).then(function(t){"0000"===t.head.errCode?e.$toast.success({message:"登录成功",callback:function(){e.$router.replace(e.formPath)}}):e.getIsNeedCaptcha()})}})},c=(n("aa62"),n("2877")),l=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign sign-in"},[n("div",{staticClass:"sign__header clearfix"},[n("i",{staticClass:"sign__back",on:{click:function(){return e.$router.replace("/")}}}),n("button",{staticClass:"sign__button",on:{click:function(){return e.$router.replace("/register")}}},[e._v("注册")])]),n("h1",{staticClass:"sign__title"},[e._v("登录")]),n("form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form__item"},[n("label",{staticClass:"form__label",attrs:{for:"sign_in_acc"}},[e._v(" 手机号／用户名 ")]),n("div",{staticClass:"form__content"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.loginForm.loginName,expression:"loginForm.loginName",modifiers:{trim:!0}}],staticClass:"form__input sign-in-form__input ",attrs:{id:"sign_in_acc",maxlength:"12",size:"13",type:"text"},domProps:{value:e.loginForm.loginName},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"loginName",t.target.value.trim())},blur:function(){return e.$forceUpdate()}}}),n("SeedCode",{staticClass:"form__button--suffix",attrs:{params:e.sendCodeParams,enable:e.enableSendBtn},on:{sendCodeBefore:e.sendCodeBefore,sendCallBack:e.sendCallBack}})],1)]),n("div",{staticClass:"form__item"},[e._m(0),n("div",{staticClass:"form__content"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.loginForm.verifyStr,expression:"loginForm.verifyStr",modifiers:{trim:!0}}],staticClass:"form__input sign-in-form__input",attrs:{id:"sign_in_pwd",maxlength:"16",type:"password"},domProps:{value:e.loginForm.verifyStr},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"verifyStr",t.target.value.trim())},blur:function(){return e.$forceUpdate()}}})])]),e.isNeedCaptcha?n("div",{staticClass:"form__item"},[n("label",{staticClass:"form__label",attrs:{for:"sign_in_code"}},[e._v("图形验证码")]),n("div",{staticClass:"form__content form__content--between"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.loginForm.captcha,expression:"loginForm.captcha",modifiers:{trim:!0}}],staticClass:"form__input form__input--limit-width sign-in-form__input",attrs:{id:"sign_in_code",maxlength:"4",type:"text"},domProps:{value:e.loginForm.captcha},on:{input:[function(t){t.target.composing||e.$set(e.loginForm,"captcha",t.target.value.trim())},e.replaceNonNum],blur:function(){return e.$forceUpdate()}}}),n("img",{staticClass:"form__captcha",attrs:{src:e.image,alt:""},on:{click:e.getCaptcha}})])]):e._e(),n("button",{staticClass:"form__button form__button--full",class:{"disabled-opacity":!e.validateForm},on:{click:e.submit}},[e._v("登录 ")])]),e._m(1),e._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form__label",attrs:{for:"sign_in_pwd"}},[this._v(" 验证码／密码 "),e("a",{staticClass:"form__link-service",attrs:{href:"javascript:void (0);"}},[this._v("收不到验证码？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"sign__link-forget-password"},[e("a",{staticClass:"link",attrs:{href:"javascript:void (0)"}},[this._v("忘记账号／密码？")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"sign__notes"},[t._v(" 凯发娱乐支持USDT "),n("span",{staticClass:"sign__notes-strong"},[t._v("安全 • 方便")]),t._v(" 匿名买卖、不受银行监管 ")])}],!1,null,"ab8505b0",null);e.default=l.exports},aa62:function(t,e,n){var a=n("69c7");n.n(a).a},aa98:function(t,e,n){var a={name:"SeedCode",props:{enable:{type:Boolean,default:!1},params:{type:Object,default:function(){return{}}}},data:function(){return{duration:60,sending:!1,isFirstSend:!0}},computed:{text:function(){return this.sending?'重新发送(<span class="monospaced-font">'.concat(this.duration,"</span>)"):this.isFirstSend?"发送验证码":"重新发送"}},methods:{sendCode:function(){var a=this;this.enable&&!this.sending&&(this.$emit("sendCodeBefore"),this.$api.sendCode(this.params).then(function(t){var e=t.head,n=t.body;"0000"===e.errCode?(a.timeout(),a.$emit("sendCallBack",n.messageId),a.$toast.success("短信验证码已发送，".concat(n.expire/60,"分钟内输入有效，请勿泄漏"))):a.$emit("sendCallBack",null),a.isFirstSend=!1}).catch(function(){a.$emit("sendCallBack",null)}))},timeout:function(){var t=this;this.sending=!0;var e=setInterval(function(){t.duration--,t.duration<=0&&(t.duration=60,t.sending=!1,clearInterval(e))},1e3)}}},i=(n("22d5"),n("2877")),s=Object(i.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"seed-code border",class:{disabled:!t.enable||t.sending},domProps:{innerHTML:t._s(t.text)},on:{click:t.sendCode}})},[],!1,null,null,null);e.a=s.exports}}]);