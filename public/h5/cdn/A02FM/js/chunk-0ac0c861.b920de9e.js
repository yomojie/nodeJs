(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ac0c861"],{"2a65":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"promotions container"},[t.promoList.length?t._l(t.promoList,(function(i,e){return a("div",{key:e,staticClass:"promotions__item"},[a("a",{staticClass:"promotions__img-wrapper default-bg-small",attrs:{href:i.link,target:i.is_blank?"_blank":"_self"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.pic,expression:"item.pic"}],staticClass:"promotions__img",attrs:{alt:i.title}})]),a("p",{staticClass:"promotions__title"},[t._v(t._s(i.title))]),a("p",{staticClass:"promotions__sub-title"},[t._v(t._s(i.label))]),a("p",{staticClass:"promotions__date"},[t._v(t._s(i.date))])])})):t._l(3,(function(i){return a("div",{key:i,staticClass:"promotions__item"},[a("a",{staticClass:"promotions__img-wrapper default-bg-small"}),a("p",{staticClass:"promotions__title"},[t._v("--")]),a("p",{staticClass:"promotions__sub-title"},[t._v("--")]),a("p",{staticClass:"promotions__date"},[t._v("-")])])}))],2)},n=[],s=(a("99af"),a("4de4"),a("d81d"),a("9911"),a("c1df")),o=a.n(s),r={name:"promotions",data:function(){return{promoList:[]}},created:function(){this.getPromoList()},methods:{getPromoList:function(){var t=this,i="/_promo/promo_list_new.txt";this.$api.getWmsStatic(i).then((function(i){var a,e=i.data,n=[],s=Date.now();Array.isArray(e)&&(e=e.filter((function(t){return"1"===t.retain1&&(t.time_begin===t.time_end?0===+t.time_begin:1e3*t.time_end>s)})),e=e.map((function(i){return a={title:i.title,label:i.label,link:i.link?"/h5".concat(i.link):null,is_blank:1===+i.is_blank,pic:"".concat(window.dynamicConfig.wmsServer,"/").concat(i.pic)},0===+i.time_begin?a.date="永久有效":a.date="".concat(t.formatDate(i.time_begin)," - ").concat(t.formatDate(i.time_end)),a})),n=e),t.promoList=n}))},formatDate:function(t){return o()(1e3*t).format("YYYY年MM月DD日")}}},l=r,c=(a("e1eb"),a("2877")),m=Object(c["a"])(l,e,n,!1,null,"301ad7ee",null);i["default"]=m.exports},e1eb:function(t,i,a){"use strict";var e=a("f9ea"),n=a.n(e);n.a},f9ea:function(t,i,a){}}]);
//# sourceMappingURL=chunk-0ac0c861.b920de9e.js.map