(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0e90":function(t,e,n){"use strict";n("fb46")},"1a12":function(t,e,n){},"3c78":function(t,e,n){},"500c":function(t,e,n){},"51ac":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"App",created:function(){document.title="Streaming Vue"}},o=s,c=(n("034f"),n("2877")),l=Object(c["a"])(o,a,i,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Navbar"),n("CoverImage"),n("VideosMenu",{key:t.routePath+"vm"}),n("PageNavigator",{key:t.routePath+"pn-down"}),n("Footer")],1)},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"flex items-center justify-center border bg-red-600\n    \\ border-t-0 border-l-0 border-r-0 border-red-800 sm:flex-col",attrs:{id:"navbar-desktop"}},[n("div",{staticClass:"flex items-center justify-start w-1/4\n      \\ sm:justify-center sm:w-full"},[n("button",{staticClass:"ml-2 focus:outline-none focus:shadow-outline\n        \\ absolute left-0 hidden sm:block",attrs:{type:"button"},on:{click:t.navMobOpener}},[n("fa-icon",{attrs:{icon:"bars"}})],1),n("div",{staticClass:"ml-2 text-3xl brand sm:ml-0"},[t._v(" Stream ")]),t._m(0)]),n("div",{staticClass:"flex items-center justify-center w-2/4 sm:hidden space-y-0"},[n("SearchBox",{staticClass:"w-5/6 md:w-4/6",attrs:{placeholder:"Search for a star or a video"}}),n("Button",{staticClass:"hidden w-8 h-8 mr-1",attrs:{name:""}})],1),n("div",{staticClass:"flex items-center justify-end w-1/4 sm:hidden"},[n("Button",{staticClass:"mr-2",attrs:{name:"SIGN IN"}}),n("Button",{staticClass:"mr-2",attrs:{name:"JOIN US"}})],1)]),n("div",{attrs:{id:"navdesk-spacer"}}),n("transition",{attrs:{name:"nav-anim","enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__fadeOutUp"}},[n("NavbarMobile",{directives:[{name:"show",rawName:"v-show",value:t.navMobVisible,expression:"navMobVisible"}],attrs:{id:"navbar-mobile"}})],1)],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap items-center justify-start mt-3 ml-4 md:mt-0 md:text-xs sm:hidden space-x-4"},[n("div",[n("a",{attrs:{href:""}},[t._v(" Link ")])]),n("div",[n("a",{attrs:{href:""}},[t._v(" Link ")])]),n("div",[n("a",{attrs:{href:""}},[t._v(" Link ")])])])}],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"\n\\ h-8 px-1 py-2 leading-tight text-gray-700 border rounded shadow\n\\ appearance-none focus:outline-none focus:shadow-outline",attrs:{type:"text"}})},b=[],g={name:"SearchBox"},_=g,x=Object(c["a"])(_,v,b,!1,null,null,null),w=x.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"px-1 py-1 font-bold text-white shadow-lg\n  \\ rounded hover:bg-red-800 bg-red-500\n  \\ focus:outline-none focus:shadow-outline",attrs:{type:"button"}},[t._v(" "+t._s(t.name)+" ")])},C=[],I={name:"Button",props:["name"]},k=I,P=Object(c["a"])(k,y,C,!1,null,null,null),j=P.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-start w-full h-56 bg-red-800"},[n("SearchBox",{staticClass:"w-3/4 my-3 ml-2",attrs:{placeholder:"Search for a star or a video"}}),t._m(0),t._m(1),t._m(2),n("Button",{staticClass:"mb-1 ml-2",attrs:{name:"SIGN IN"}}),n("Button",{staticClass:"ml-2",attrs:{name:"JOIN US"}})],1)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1 ml-2 text-white "},[n("a",{attrs:{href:""}},[t._v(" Link ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1 ml-2 text-white"},[n("a",{attrs:{href:""}},[t._v(" Link ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1 ml-2 text-white"},[n("a",{attrs:{href:""}},[t._v(" Link ")])])}],M={name:"Burger",components:{SearchBox:w,Button:j}},E=M,N=Object(c["a"])(E,O,$,!1,null,null,null),L=N.exports,V={data:function(){return{navMobVisible:!1,last_scroll_pos:0,new_scroll_pos:0}},name:"Navbar",components:{SearchBox:w,Button:j,NavbarMobile:L},created:function(){window.addEventListener("resize",this.navMobHandler),window.addEventListener("scroll",this.navMob_onScroll)},removed:function(){window.addEventListener("resize",this.navMobHandler),window.addEventListener("scroll",this.navMob_onScroll)},methods:{navMobOpener:function(){this.navMobVisible=!this.navMobVisible,this.last_scroll_pos=window.scrollY},navMobHandler:function(){window.innerWidth>639&&(this.navMobVisible=!1)},navMob_onScroll:function(){if(!0===this.navMobVisible){this.new_scroll_pos=window.scrollY;var t=this.new_scroll_pos-this.last_scroll_pos;Math.abs(t)>150&&(this.navMobVisible=!1,this.last_scroll_pos=0,this.new_scroll_pos=0)}}}},S=V,B=(n("5dfc"),Object(c["a"])(S,h,p,!1,null,null,null)),D=B.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"object-cover w-full",attrs:{id:"cover-img",src:n("8ac1"),alt:"man-onrope"}})])}],F={name:"CoverImage"},R=F,U=(n("fd8d"),Object(c["a"])(R,T,A,!1,null,null,null)),q=U.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0===t.cards.length?n("div",{staticClass:"flex items-center justify-center mt-4"},[n("LoaderAnim")],1):t._e(),n("div",{staticClass:"flex justify-center w-full h-full my-4",attrs:{id:"main"}},[n("div",{staticClass:"w-full mx-2 grid gap-4\n      \\ grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1\n      "},[n("VideoContainer",{directives:[{name:"show",rawName:"v-show",value:t.currentCard.active,expression:"currentCard.active"}],attrs:{currentCard:t.currentCard,id:"video-container"}}),t._l(t.cards,(function(e,r){return n("div",{key:r,ref:"vid"+e.orderId,refInFor:!0,class:[e.active?"selected-card":""],on:{click:function(n){return t.handlePlayer(e)}}},[n("VideoCard",{attrs:{vidInfo:e.vidInfo}})],1)}))],2)])])},J=[],G=(n("b0c0"),n("96cf"),n("1da1")),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center",attrs:{id:"video-card"}},[n("div",{staticClass:"h-full overflow-hidden rounded shadow-md"},[n("CardThumbnail",{attrs:{id:"thumbnail-img",thumbs:t.vidInfo.thumbs}}),n("CardText",{attrs:{id:"text-container",vidInfo:t.vidInfo.text}})],1)])},W=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"object-scale-down w-full bg-black",attrs:{src:t.imgUrl,alt:"Sunset in the mountains"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}})])},K=[],Q={name:"CardThumbnail",props:{thumbs:Object},data:function(){return{serverUrl:"http://localhost:6969/thumbnails/",hover:!1,imgUrl:""}},methods:{generateMain:function(){this.imgUrl=this.thumbs.thumbMain}},mounted:function(){this.generateMain()}},X=Q,Z=Object(c["a"])(X,Y,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-red-400 grid grid-cols-12"},[n("div",{staticClass:"col-span-9"},[n("div",{staticClass:"ml-1 text-xl font-bold text-black truncate"},[t._v(" "+t._s(t.concatActors())+" ")])]),n("div",{staticClass:"flex flex-row-reverse items-center col-span-3"},[n("div",{staticClass:"inline mr-1 text-sm"},[n("fa-icon",{staticClass:"text-red-600",attrs:{icon:"heart"}})],1),n("div",{staticClass:"inline mr-1 text-xs text-gray-700"},[t._v(" "+t._s(t.vidInfo.duration)+"% ")])]),n("div",{staticClass:"flex col-span-8"},[n("p",{staticClass:"ml-1 text-base text-gray-700 truncate"},[t._v(" "+t._s(t.vidInfo.title)+" ")])]),n("div",{staticClass:"flex flex-row-reverse items-center mr-1 col-span-4"},[n("p",{staticClass:"inline text-xs text-right text-gray-700"},[t._v(" "+t._s(t.formatDate(t.vidInfo.post_date))+" ")])])])},nt=[],rt=(n("4160"),n("fb6a"),n("159b"),{name:"CardText",props:{vidInfo:Object},methods:{formatDate:function(t){var e=new Date(t),n={year:"numeric",month:"short",day:"numeric"};return new Intl.DateTimeFormat("en-US",n).format(e)},concatActors:function(){var t=this.vidInfo.actors;if(t){if(t.length>1){var e="";return t.forEach((function(t){e=e+", "+t})),e.slice(1,e.length)}return t[0]}return"No actors..."}}}),at=rt,it=Object(c["a"])(at,et,nt,!1,null,"c7476a84",null),st=it.exports,ot={name:"VideoCard",props:{vidInfo:Object},components:{CardThumbnail:tt,CardText:st}},ct=ot,lt=(n("d159"),Object(c["a"])(ct,H,W,!1,null,"b8ccdbd2",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n  \\ player-space flex flex-col justify-end items-center\n  \\ col-span-4 lg:col-span-3 md:col-span-2 sm:col-span-1"},[n("div",{staticClass:"flex w-full h-12 bg-red-400 rounded rounded-b-none"},[n("div",{staticClass:"flex items-center w-11/12 h-full pl-1 text-center"},[n("div",{staticClass:"text-xl font-bold text-gray-900 truncate\n        \\ sm:whitespace-no-wrap hover:underline"},[t._v(" "+t._s(this.currentCard.vidInfo.text.title)+" ")])]),n("div",{staticClass:"flex flex-row-reverse items-center\n      \\ w-1/12 h-full pt-1 pr-1 text-gray-900"},[n("button",{attrs:{type:"button"},on:{click:t.closePlayer}},[n("fa-icon",{staticClass:"text-4xl",attrs:{icon:"times"}})],1)])]),t.currentCard.active&&t.vidLinks?t._e():n("div",{staticClass:"video-loading"},[n("LoaderAnim")],1),t.currentCard.active&&t.vidLinks?n("VideoPlayer",{staticClass:"video-player",attrs:{vidLinks:t.vidLinks}}):t._e()],1)},ft=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plyr-style"},[n("video",{staticClass:"player",attrs:{playsinline:"",controls:""}},t._l(t.vidLinks.array,(function(t,e){return n("source",{key:e,attrs:{src:t.url,size:t.quality,type:"video/mp4"}})})),0)])},ht=[],pt={controls:["play-large","play","progress","current-time","mute","volume","settings","airplay","fullscreen"],settings:["quality","speed"],previewThumbnails:{enabled:!0,src:""}},vt=pt,bt={name:"VideoPlayer",props:{vidLinks:Object},data:function(){return{plyrOptions:vt,player:null}},mounted:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.plyrOptions.previewThumbnails.src=t.vidLinks.vtt,t.player=new t.$plyr(".player",t.plyrOptions),e.prev=2,e.next=5,t.player.play();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](2);case 9:case"end":return e.stop()}}),e,null,[[2,7]])})))()}},gt=bt,_t=(n("f944"),Object(c["a"])(gt,mt,ht,!1,null,"a09a5f42",null)),xt=_t.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")])}],Ct={name:"LoaderAnim"},It=Ct,kt=(n("0e90"),Object(c["a"])(It,wt,yt,!1,null,null,null)),Pt=kt.exports,jt=(n("c740"),{ID:null,active:!1,orderId:void 0,breakpoint:null,fullscreen:!1,iframeInfo:{url:"",provider:""},links:{vtt:"",array:[]},vidInfo:{categories:[],thumbs:{thumbMain:"",thumbPreviews:[]},text:{actors:[],title:"",duration:"",post_date:""}}}),Ot=function(t){var e=[];return t.forEach((function(t,n){var r={ID:n,active:!1,breakpoint:null,fullscreen:!1,orderId:n,iframeInfo:{url:t.iframe_url,provider:t.iframe_name},links:{vtt:"",array:[]},vidInfo:{categories:t.categories,thumbs:{thumbMain:t.thumb_main_url,thumbPreviews:t.thumb_previews_urls},text:{actors:t.actors,title:t.title,duration:t.duration,post_date:t.post_date}}};e.push(r)})),e},$t=function(){for(var t=[],e={},r=0;r<30;r++)e={ID:r,orderId:r,active:!1,breakpoint:null,fullscreen:!1,vidInfo:{categories:["cat","dogs","animals"],thumbs:{thumbMain:n("d1ce"),thumbPreviews:[]},text:{actors:["John Doe","Rita Bill","Foo Bar"],title:"Lorem ipsum dolor sit ametes",duration:"16",post_date:"Sep 28, 2020"}}},t.push(e);return t},Mt=function(t,e){return e.findIndex((function(e){return e.ID==t}))},Et=function(t,e,n){var r="";switch(t){case"sd":r="vid"+String(e-e%4);break;case"lg":r="vid"+String(e-e%3);break;case"md":r="vid"+String(e-e%2);break;default:r="vid"+e}var a=document.querySelector("#video-container");n[r][0].before(a)},Nt=function(t){return t<=639?"sm":t<=767?"md":t<=1023?"lg":"sd"},Lt=function(){var t=this;setTimeout((function(){if(!0===t.currentCard.active&&!1===t.currentCard.fullscreen){var e=Nt(window.innerWidth),n=Mt(t.currentCard.ID,t.cards);t.currentCard.breakpoint=e,t.cards[n].breakpoint=e,Et(t.currentCard.breakpoint,t.currentCard.orderId,t.$refs)}}),500)},Vt=function(){var t=Mt(this.$parent.currentCard.ID,this.$parent.cards);this.$parent.cards[t].active=!1,this.$parent.cards[t].breakpoint=null,this.$parent.currentCard=jt,this.oldId=null,this.newId=null},St=function(t){var e=Nt(window.innerWidth);Et(e,t.ID,this.$refs),t.breakpoint=e,t.active=!0;var n=Mt(t.ID,this.cards),r=Mt(this.currentCard.ID,this.cards);!1===this.currentCard.active?(this.cards[n]=t,this.currentCard=t):this.currentCard.ID!==t.ID&&(this.cards[r].active=!1,this.cards[r].breakpoint=null,this.currentCard.active=!1,this.$nextTick((function(){this.currentCard=t})),this.cards[n]=t)},Bt=(n("99af"),n("d3b7"),n("d4ec")),Dt=n("bee2"),Tt=n("bc3a"),At=n.n(Tt),Ft="".concat(location.protocol,"//").concat(location.host,"/api/videos"),Rt="".concat(location.protocol,"//").concat(location.host,"/api/actors"),Ut=function(){function t(){Object(Bt["a"])(this,t)}return Object(Dt["a"])(t,null,[{key:"getVideos",value:function(t){return new Promise((function(e,n){At()({method:"get",url:Ft,params:{pageNum:t}}).then((function(t){return e(t.data)})).catch((function(t){return n(t)}))}))}},{key:"getVideos_byActor",value:function(t,e){return new Promise((function(n,r){At()({method:"get",url:Rt,params:{pageNum:t,name:e}}).then((function(t){return n(t.data)})).catch((function(t){return r(t)}))}))}}]),t}(),qt=function(){function t(){Object(Bt["a"])(this,t)}return Object(Dt["a"])(t,[{key:"getLinks",value:function(){return{vtt:"https://cdn.plyr.io/static/demo/thumbs/240p.vtt",array:[{url:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",quality:"1080"},{url:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",quality:"720"},{url:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",quality:"576"}]}}}]),t}(),zt={name:"VideoContainer",data:function(){return{vidLinks:!1,oldId:null,newId:null}},props:{currentCard:Object},components:{VideoPlayer:xt,LoaderAnim:Pt},methods:{closePlayer:Vt,changePlayer:function(){if(this.oldId=this.newId,this.newId=this.currentCard.ID,this.oldId!==this.newId){this.playerOpened=!0;var t=new qt;this.vidLinks=!1,this.$nextTick(Object(G["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getLinks();case 3:this.vidLinks=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))))}}},updated:function(){this.changePlayer()}},Jt=zt,Gt=(n("c858"),Object(c["a"])(Jt,dt,ft,!1,null,null,null)),Ht=Gt.exports,Wt={name:"VideosMenu",data:function(){return{pageInfo:{name:"",number:"",actorName:""},cards:[],rawCards:[],currentCard:jt,cantGetVids_error:void 0}},components:{VideoCard:ut,VideoContainer:Ht,LoaderAnim:Pt},methods:{initCards:$t,handlePlayer:St,closePlayer:Vt,posPlayerOnResize:Lt,cleanCards:Ot,getRouteInfo:function(){this.pageInfo.name=this.$route.name,"MainPage"===this.pageName?this.pageInfo.number=1:"OtherPage"===this.pageInfo.name?this.pageInfo.number=this.$route.params.number:"ActorPage"===this.pageInfo.name&&(this.pageInfo.number=1,this.pageInfo.actorName=this.$route.params.name,this.$route.params.number&&(this.pageInfo.number=this.$route.params.number))},getPlaceholderCards:function(){this.cards=this.initCards()},getCards:function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"ActorPage"!==this.pageInfo.name){t.next=7;break}return t.next=4,Ut.getVideos_byActor(this.pageInfo.number,this.pageInfo.actorName);case 4:this.jsonCards=t.sent,t.next=10;break;case 7:return t.next=9,Ut.getVideos(this.pageInfo.number);case 9:this.jsonCards=t.sent;case 10:this.cards=this.cleanCards(this.jsonCards),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.cantGetVids_error=t.t0;case 16:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getRouteInfo(),this.getPlaceholderCards()},created:function(){var t=this;window.addEventListener("resize",this.posPlayerOnResize),window.addEventListener("fullscreenchange",(function(){t.currentCard.fullscreen=!t.currentCard.fullscreen}))}},Yt=Wt,Kt=(n("e604"),Object(c["a"])(Yt,z,J,!1,null,"44280de0",null)),Qt=Kt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center h-20 main"},t._l(5,(function(e){return n("div",{key:e},[n("router-link",{attrs:{to:"/page/"+t.fmtPageNum(e)}},[n("Button",{staticClass:"w-12 h-12 m-2",class:[t.fmtPageNum(e)===t.currentPage?"selected-btn":""],attrs:{name:t.fmtPageNum(e)}})],1)],1)})),0)},Zt=[],te=(n("a9e3"),{name:"PageNavigator",data:function(){return{currentPage:this.getPageNum()}},components:{Button:j},mounted:function(){},methods:{getPageNum:function(){return"MainPage"===this.$route.name?1:"OtherPage"===this.$route.name?Number(this.$route.params.number):void 0},fmtPageNum:function(t){return this.currentPage<=2?t-this.currentPage+this.currentPage:t-1+this.currentPage-2}}}),ee=te,ne=(n("58cb"),Object(c["a"])(ee,Xt,Zt,!1,null,"009f2ca2",null)),re=ne.exports,ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ie=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center h-20 text-white\n  \\ bg-red-600 border-red-900 border-t",attrs:{id:"footer"}},[n("p",[t._v(" Made with ♥ by "),n("strong",[t._v("Ben Mefteh")])])])}],se={name:"Footer"},oe=se,ce=Object(c["a"])(oe,ae,ie,!1,null,null,null),le=ce.exports,ue={name:"Home",data:function(){return{routePath:""}},components:{Navbar:D,CoverImage:q,VideosMenu:Qt,PageNavigator:re,Footer:le},beforeRouteEnter:function(t,e,n){"/"===e.path&&("/page/1"===t.path?n():n((function(e){e.routePath=t.path})))},beforeRouteUpdate:function(t,e,n){this.routePath=t.path,n()}},de=ue,fe=Object(c["a"])(de,f,m,!1,null,"1314d90e",null),me=fe.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._m(0),n("Footer",{staticClass:"footer"})],1)},pe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center text-6xl notfound"},[n("h1",{staticClass:"text-black"},[t._v(" 404 Page not found :( ")])])}],ve={name:"PageNotFound",components:{Navbar:D,Footer:le},created:function(){document.title="404 page not found :("}},be=ve,ge=(n("95f7"),Object(c["a"])(be,he,pe,!1,null,"c979a744",null)),_e=ge.exports;r["a"].use(d["a"]);var xe=[{path:"/",name:"MainPage",component:me},{path:"/page/:number",name:"OtherPage",component:me},{path:"/actor/:name",name:"ActorPage",component:me,children:[{path:":number",name:"ActorPage",component:me}]},{path:"*",name:"PageNotFound",component:_e}],we=new d["a"]({routes:xe}),ye=we,Ce=(n("ba8c"),n("ecee")),Ie=n("ad3d"),ke=n("c074");r["a"].component("fa-icon",Ie["a"]),Ce["c"].add(ke["a"]),Ce["c"].add(ke["b"]),Ce["c"].add(ke["c"]);var Pe=n("4fb8"),je=n.n(Pe);Object.defineProperty(r["a"].prototype,"$plyr",{value:je.a}),r["a"].config.productionTip=!1,new r["a"]({router:ye,render:function(t){return t(u)}}).$mount("#app")},"58cb":function(t,e,n){"use strict";n("6c02")},"5dfc":function(t,e,n){"use strict";n("1a12")},"63b0":function(t,e,n){},"6c02":function(t,e,n){},"85ec":function(t,e,n){},"8ac1":function(t,e,n){t.exports=n.p+"img/rooftops.d846f943.png"},"95f7":function(t,e,n){"use strict";n("9d0e")},"9d0e":function(t,e,n){},ba8c:function(t,e,n){},c858:function(t,e,n){"use strict";n("500c")},d159:function(t,e,n){"use strict";n("51ac")},d1ce:function(t,e,n){t.exports=n.p+"img/card-top.5183bb28.jpg"},e318:function(t,e,n){},e604:function(t,e,n){"use strict";n("3c78")},f944:function(t,e,n){"use strict";n("63b0")},fb46:function(t,e,n){},fd8d:function(t,e,n){"use strict";n("e318")}});
//# sourceMappingURL=app.f6381a28.js.map