(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f234c2"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"2fd2":function(e,t,a){"use strict";var s=a("8ad0"),i=a.n(s);i.a},"4c64":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"games page"},[a("Header",{scopedSlots:e._u([{key:"right",fn:function(){return[a("button",{staticClass:"games__search header__button",on:{click:function(t){e.showSearch=!0}}},[a("i",{staticClass:"games__icon-search"}),e._v("搜游戏 ")])]},proxy:!0}])}),a("div",{ref:"container",staticClass:"container",on:{scroll:e.scroll}},[a("banner",{attrs:{field:"game_new"}}),a("div",{ref:"tab",staticClass:"games__tab"},[a("ul",{staticClass:"games__tab-list border-bottom",class:{fixed:e.tabFixed},on:{touchmove:function(e){e.preventDefault()}}},e._l(e.tabs,(function(t,s){return a("li",{key:s,staticClass:"games__tab-item",class:{active:e.activeTabIndex===s},on:{click:function(t){return e.toggleTab(s)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),a("ul",{staticClass:"games__list clearfix"},[e._l(e.pageData.data,(function(t,s){return a("li",{key:s,staticClass:"games__item"},[a("a",{staticClass:"games__img-wrapper default-bg-small",attrs:{href:"javascript:void (0);"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.wmsImgPath+t.imgUrl,expression:"wmsImgPath+item.imgUrl"}],staticClass:"games__img",attrs:{alt:t.cnName}}),!e.loginStatus&&t.canTry?a("img",{staticClass:"games__icon-try",attrs:{src:e.$useWebpImg("@/assets/img/common/icon_try.png"),alt:"试玩"}}):e._e(),a("i",{staticClass:"games__heart"}),a("p",{staticClass:"games__tag-wrapper"},[a("span",{staticClass:"games__tag games__tag--provider"},[e._v(e._s(t.provider))]),t.isPromo?a("span",{staticClass:"games__tag games__tag--promo"},[e._v("特惠")]):e._e(),t.line?a("span",{staticClass:"games__tag games__tag--line"},[e._v(e._s(t.line)+"线")]):e._e(),t.isPool?a("span",{staticClass:"games__tag games__tag--jackpot"},[e._v("彩金")]):e._e()]),e.getGameStatus(t.gameCode)?a("div",{staticClass:"maintain-mask"},[a("div",{staticClass:"maintain-mask__inner"},[a("img",{staticClass:"maintain-mask__icon",attrs:{src:e.$useWebpImg("@/assets/img/common/icon_time.png"),alt:""}}),a("p",{staticClass:"maintain-mask__text"},[e._v("维护中")])])]):e._e()]),a("p",{staticClass:"games__name"},[e._v(e._s(t.cnName))])])})),e.pageData.data&&e.pageData.data.length?e._e():a("li",{staticClass:"games__no-data-tips"},[e._v("很抱歉,没有找到与之相关的游戏~")])],2)],1),e.showSearch?a("searchGame",{attrs:{showSearch:e.showSearch},on:{filterGames:e.filterGames,"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t}}}):e._e()],1)},i=[],n=(a("99af"),a("5530")),r=a("0418"),c=a("84af"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search page"},[a("div",{staticClass:"search__header"},[a("div",{staticClass:"search__input-wrapper"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search,expression:"search",modifiers:{trim:!0}}],staticClass:"search__input",attrs:{type:"text",placeholder:"请输入关键字..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),a("a",{staticClass:"search__cancel",attrs:{href:"javascript:void (0);"},on:{click:function(t){return e.$emit("update:showSearch",!1)}}},[e._v("取消")])]),a("div",{staticClass:"search__content"},[a("h6",{staticClass:"search__title"},[e._v("游戏平台")]),a("ul",{staticClass:"search__list clearfix"},e._l(e.providerList,(function(t,s){return a("li",{key:s,staticClass:"search__item",class:{active:t.selected},on:{click:function(a){return e.selectedItem(t,"providerList")}}},[e._v(" "+e._s(t.name)+" ")])})),0),a("h6",{staticClass:"search__title"},[e._v("赔付线")]),a("ul",{staticClass:"search__list clearfix"},e._l(e.lineList,(function(t,s){return a("li",{key:s,staticClass:"search__item",class:{active:t.selected},on:{click:function(a){return e.selectedItem(t,"lineList")}}},[e._v(" "+e._s(t.name)+" ")])})),0),a("ul",{staticClass:"search__record"},e._l(e.recordList,(function(t,s){return a("li",{key:s,staticClass:"search__record-item border-bottom",on:{click:function(a){e.search=t}}},[a("span",[e._v(e._s(t))]),a("i",{staticClass:"search__icon-record",on:{click:function(t){return t.stopPropagation(),e.recordList.splice(s,1)}}})])})),0),a("button",{staticClass:"search__button button",on:{click:e.submit}},[e._v("确定")])])])},l=[],d=(a("4de4"),a("4160"),a("d81d"),a("fb6a"),a("ac1f"),a("841c"),a("159b"),{name:"searchGame",props:{showSearch:Boolean},data:function(){return{search:null,lineList:[{name:"全部",code:null,selected:!1},{name:"1-4线",code:"1-4",selected:!1},{name:"5-9线",code:"5-9",selected:!1},{name:"15-25线",code:"15-25",selected:!1},{name:"30-50线",code:"30-50",selected:!1},{name:"51-243线",code:"51-243",selected:!1}],providerList:[{name:"全部",code:null,selected:!1},{name:"PT",code:"PT",selected:!1},{name:"MG",code:"MG",selected:!1},{name:"AG",code:"AG",selected:!1},{name:"TTG",code:"TTG",selected:!1},{name:"PP",code:"PP",selected:!1},{name:"PNG",code:"PNG",selected:!1}],recordList:[]}},created:function(){var e=localStorage.getItem("gameSearchRecordList")||"[]";this.recordList=JSON.parse(e)},destroyed:function(){},methods:{selectedItem:function(e,t){null===e.code?this[t].forEach((function(e){null!==e.code&&(e.selected=!1)})):this[t][0].selected=!1,e.selected=!e.selected},submit:function(){var e=this.lineList.filter((function(e){return e.selected})).map((function(e){return e.code})),t=this.providerList.filter((function(e){return e.selected})).map((function(e){return e.code}));this.lineList[0].selected&&(e=null),this.providerList[0].selected&&(t=null),this.$emit("update:showSearch",!1),this.$emit("filterGames",{lineList:e,providerList:t,search:this.search}),this.search&&this.search!==this.recordList[0]&&this.recordList.unshift(this.search),localStorage.setItem("gameSearchRecordList",JSON.stringify(this.recordList.slice(0,3)))}}}),m=d,u=(a("5448"),a("2877")),g=Object(u["a"])(m,o,l,!1,null,"d99bab8e",null),h=g.exports,f=a("ca00"),p=(a("c975"),a("4e82"),a("d3b7"),a("4d63"),a("25f0"),a("1276"),a("a18c"),a("4360"),a("b2e4"),{0:"gameId",1:"provider",2:"enName",3:"cnName",4:"gameType",5:"gameStyle",6:"line",7:"playerType",8:"isPool",9:"canTry",10:"popularity",11:"maxMultiple",12:"betTimes",13:"maxPrize",14:"star",15:"grade",16:"imgUrl",17:"poolUrl",18:"isNew",19:"isRecommend",20:"special",21:"specialJackpot",22:"praise",23:"remark",24:"valid",25:"language",26:"isHot",27:"isPromo",28:"imgUrl2",29:"imgUrl3",30:"imgUrl4",31:"serverGameId",32:"isFree"}),_={AGQJ:"A02003",AG:"A02026",EBET:"A02059",MG:"A02035",PT:"A02039",AS:"A02064",PNG:"A02052",PP:"A02067",TTG:"A02027",SHABA:"A02031",SPORTSBT:"A02066",K8:"A02004"};function v(e){var t=document.getElementsByTagName("head")[0],a=document.createElement("script");return new Promise((function(s,i){a.src=e,a.type="text/javascript",a.onload=a.onreadystatechange=function(){if(this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)i(new Error("获取游戏列表失败"));else{var e=window.games;window.games=null,s(b(e))}t.removeChild(a)},t.appendChild(a)}))}function b(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t=t.map((function(t){return e={isFavorite:!1,gameCode:_[t[1]]},t.forEach((function(t,a){e[p[a]]=t})),e})),w(t,"popularity")}function w(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";return e.sort((function(e,s){return e=t?+e[t]:e,s=t?+s[t]:s,"desc"===a?s-e:e-s})),e}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;e=C(e,t);var a=t.page,s=t.pageSize,i=e.length,n=e.slice(0,a*s),r=Math.ceil(e.length/s);return{page:a,pageSize:s,data:n,total:i,maxPage:r}}function C(e,t){var a=function(a){t.hasOwnProperty(a)&&!0===t[a]&&(e=e.filter((function(e){return e[a]})))};for(var s in t)a(s);if(t.search){var i=new RegExp(t.search);e=e.filter((function(e){return i.test(e.cnName)||i.test(e.enName)}))}if(t.providerList&&t.providerList.length&&(e=e.filter((function(e){return~t.providerList.indexOf(e.provider)}))),t.lineList&&t.lineList.length){var n=[];t.lineList.forEach((function(t){t=t.split("-"),e.forEach((function(e){e.line>=t[0]&&e.line<=t[1]&&n.push(e)}))})),e=n}return e}var y=a("2f62"),S={name:"games",components:{Header:r["a"],Banner:c["a"],searchGame:h},data:function(){return{tabs:[{name:"全部"},{name:"热门",params:{isHot:!0}},{name:"彩金池",params:{isPool:!0}},{name:"最新游戏",params:{isNew:!0}},{name:"我的收藏",params:{isFavorite:!0}}],activeTabIndex:0,tabFixed:!1,gameList:[],pageParams:{page:1,pageSize:10},filterParams:{},pageData:{},isLoadAll:!1,showSearch:!1}},computed:Object(n["a"])({},Object(y["e"])(["gameStatus"]),{},Object(y["c"])(["loginStatus"]),{wmsImgPath:function(){var e=window.dynamicConfig.wmsServer,t=window.dynamicConfig.cdnPath,a=window.dynamicConfig.wmsPath;return"".concat(e+t,"/_wms/img/").concat(a,"/electronicgames/")},activeTab:function(){return this.tabs[this.activeTabIndex]}}),activated:function(){var e=this;this.tabFixed=!1,this.gameList.length||this.$loading.open("loadGames"),this.getGames().then((function(){return e.$loading.hide("loadGames")}))},deactivated:function(){this.isLoadAll=!1,this.activeTabIndex=0,this.pageParams={page:1,pageSize:10},this.$loading.hide("loadGames")},methods:{getGames:function(){var e=this,t=window.dynamicConfig.wmsServer,a=window.dynamicConfig.wmsPath,s=window.dynamicConfig.cdnPath,i="".concat(t+s,"/_wms/js/").concat(a,"/electronicgames/games.js");return v(i).then((function(t){e.gameList=t,e.pageData=P(e.gameList,e.pageParams)}))},getPageData:function(){this.pageData=P(this.gameList,Object(n["a"])({},this.pageParams,{},this.filterParams,{},this.activeTab.params))},filterGames:function(e){this.$refs.container.scrollIntoView(),this.pageParams={page:1,pageSize:10},this.filterParams=e,this.getPageData()},getGameStatus:function(e){return this.gameStatus[e]&&0===this.gameStatus[e].flag},toggleTab:function(e){var t=this,a=this.$refs.container.scrollTop;this.activeTabIndex=e,Object(f["a"])(a,0,2,(function(e,a){t.$refs.container.scrollTo(0,e),a&&(t.pageParams.page=1,t.filterParams={},t.getPageData())}))},scroll:function(e){var t=e.target.scrollTop,a=e.target.scrollHeight-(t+e.target.clientHeight);this._scrollTop<t&&a<100&&this.loadNextPage(),this.tabFixed=t>this.$refs.tab.offsetTop,this._scrollTop=t},loadNextPage:function(){var e=this;this.pageParams.page<this.pageData.maxPage?(this.pageParams.page++,this.getPageData()):this.isLoadAll||(this.isLoadAll=!0,this.$toast({type:"error",message:"已经到底了~",callback:function(){e.isLoadAll=!1}}))}}},x=S,L=(a("2fd2"),Object(u["a"])(x,s,i,!1,null,"0397e23c",null));t["default"]=L.exports},"4c6c":function(e,t,a){},"4d63":function(e,t,a){var s=a("83ab"),i=a("da84"),n=a("94ca"),r=a("7156"),c=a("9bf2").f,o=a("241c").f,l=a("44e7"),d=a("ad6d"),m=a("9f7f"),u=a("6eeb"),g=a("d039"),h=a("69f3").set,f=a("2626"),p=a("b622"),_=p("match"),v=i.RegExp,b=v.prototype,w=/a/g,P=/a/g,C=new v(w)!==w,y=m.UNSUPPORTED_Y,S=s&&n("RegExp",!C||y||g((function(){return P[_]=!1,v(w)!=w||v(P)==P||"/a/i"!=v(w,"i")})));if(S){var x=function(e,t){var a,s=this instanceof x,i=l(e),n=void 0===t;if(!s&&i&&e.constructor===x&&n)return e;C?i&&!n&&(e=e.source):e instanceof x&&(n&&(t=d.call(e)),e=e.source),y&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,"")));var c=r(C?new v(e,t):v(e,t),s?this:b,x);return y&&a&&h(c,{sticky:a}),c},L=function(e){e in x||c(x,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},T=o(v),G=0;while(T.length>G)L(T[G++]);b.constructor=x,x.prototype=b,u(i,"RegExp",x)}f("RegExp")},5448:function(e,t,a){"use strict";var s=a("4c6c"),i=a.n(s);i.a},7156:function(e,t,a){var s=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var n,r;return i&&"function"==typeof(n=t.constructor)&&n!==a&&s(r=n.prototype)&&r!==a.prototype&&i(e,r),e}},"841c":function(e,t,a){"use strict";var s=a("d784"),i=a("825a"),n=a("1d80"),r=a("129f"),c=a("14c3");s("search",1,(function(e,t,a){return[function(t){var a=n(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,a):new RegExp(t)[e](String(a))},function(e){var s=a(t,e,this);if(s.done)return s.value;var n=i(e),o=String(this),l=n.lastIndex;r(l,0)||(n.lastIndex=0);var d=c(n,o);return r(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))},"8ad0":function(e,t,a){}}]);