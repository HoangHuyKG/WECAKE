(this["webpackJsonpwe-network"]=this["webpackJsonpwe-network"]||[]).push([[0],[,,,function(e,a,t){e.exports={formregister:"FormRegister_formregister__3Duiu",formregisterimg:"FormRegister_formregisterimg__2-lzc",formhead:"FormRegister_formhead__Z-H94",formunhead:"FormRegister_formunhead__3ufXN",formheadbtn:"FormRegister_formheadbtn__10UB5",or:"FormRegister_or__3EgYF",formbtnfb:"FormRegister_formbtnfb__1YjYZ",formbtngg:"FormRegister_formbtngg__GW-yy",formicon:"FormRegister_formicon__1CYVQ",forminput:"FormRegister_forminput__10Awc",input:"FormRegister_input__3C-E8",footerbtn:"FormRegister_footerbtn__2GXaB",footer_text:"FormRegister_footer_text__1Y_4X",footerbtnacsess:"FormRegister_footerbtnacsess__1pswL",times:"FormRegister_times__3pxk9",paragraph_head:"FormRegister_paragraph_head__2KDT6"}},,,function(e,a,t){e.exports={market:"Market_market__iyjVV",market_img:"Market_market_img__1bn12",market_body:"Market_market_body__3w5uH",market_btn:"Market_market_btn__3dr_s",market_footer:"Market_market_footer__3wg4D",markettext2:"Market_markettext2__xNBl6",markettext:"Market_markettext__3Wg3z",marketitem:"Market_marketitem__30QuH",marketbtnincrease:"Market_marketbtnincrease__3JUji",time:"Market_time__3DhUs",markettotal:"Market_markettotal__2ABaG",total:"Market_total__3zpts",totalprice:"Market_totalprice__2k8Md",hr:"Market_hr__1kk_J",tong:"Market_tong__2kVLA"}},function(e,a,t){e.exports={info:"Infoitem_info__2yWXM",headinfo:"Infoitem_headinfo__sVUVH",infoimg:"Infoitem_infoimg__OW2xA",infotext:"Infoitem_infotext__2Sm3V",infomati0n:"Infoitem_infomati0n__2ZSEe",infonumber:"Infoitem_infonumber__22xOj",infoprice:"Infoitem_infoprice__3bBQt",info_right:"Infoitem_info_right__3UcDK",infoprices:"Infoitem_infoprices__Ns7hX",infomationprice:"Infoitem_infomationprice__1Z6kt",btnnumber:"Infoitem_btnnumber__1hLGS",btnincrease:"Infoitem_btnincrease__nKhwc",btndescrease:"Infoitem_btndescrease__3t7hP",btnbuy:"Infoitem_btnbuy__2_pcM",number:"Infoitem_number__ix6w5",times:"Infoitem_times__2-Esa"}},,,function(e,a,t){e.exports={header:"header_header__3kC3t",header_logoimg:"header_header_logoimg__2pAYK",header_nav_item:"header_header_nav_item__2MfPR",header_nav_link:"header_header_nav_link__B3rUq",header_registration:"header_header_registration__GwnQK",header_icon:"header_header_icon__1_9IY",header_login:"header_header_login__1qkwC"}},,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(17),m=t.n(c),l=t(5),s=t(10),i=t.n(s),o=(t(23),t(2)),u=t(15),_=t(9),f=t(6),b=t.n(f);var E=function(){var e=JSON.parse(localStorage.getItem("products")),a=Object(n.useState)(null!==e&&void 0!==e?e:[]),t=Object(l.a)(a,2),c=t[0],m=t[1];return r.a.createElement("div",{className:"containermarket"},r.a.createElement("div",{className:b.a.market},c.map((function(e,a){return r.a.createElement("div",{key:a,className:b.a.market_body},r.a.createElement("img",{className:b.a.market_img,src:e.url,alt:"img"}),r.a.createElement("div",{className:b.a.marketitem},r.a.createElement("p",{className:b.a.markettext2},e.title),r.a.createElement("p",{className:b.a.markettext},e.price),r.a.createElement("div",{className:b.a.market_btn},r.a.createElement("button",{className:b.a.marketbtnincrease},"-"),r.a.createElement("p",null,"1"),r.a.createElement("button",{className:b.a.marketbtnincrease},"+"))),r.a.createElement("div",{className:b.a.market_footer},r.a.createElement("div",{onClick:function(){return function(e){m((function(a){var t=Object(u.a)(a);return t.splice(e,1),localStorage.setItem("products",JSON.stringify(t)),t}))}(a)}},r.a.createElement("span",{className:b.a.time},r.a.createElement(_.b,null))),r.a.createElement("p",{className:b.a.markettext2},e.price)))})),r.a.createElement("span",{className:b.a.hr}),r.a.createElement("div",{className:b.a.markettotal},r.a.createElement("div",{className:b.a.total},r.a.createElement("p",{className:b.a.tong},"T\u1ed5ng c\u1ed9ng:"),r.a.createElement("p",{className:b.a.totalprice},"80.000d")))))},d=t(14),p=t(4),g=t(7),h=t.n(g),N=["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"];var v=function(e){var a=e.i,t=e.number,c=Object(n.useState)([]),m=Object(l.a)(c,2),s=m[0],i=m[1],f=JSON.parse(localStorage.getItem("products")),b=Object(n.useState)([]),E=Object(l.a)(b,2),d=(E[0],E[1]);Object(n.useEffect)((function(){fetch("https://621089284cd3049e177eb0c8.mockapi.io/".concat(N[t-1])).then((function(e){return e.json()})).then((function(e){return i(e[a])}))}),[a,t]);var p=Object(n.useState)(1),g=Object(l.a)(p,2),v=g[0],k=g[1];return r.a.createElement("div",{className:Object(o.a)(h.a.info)},r.a.createElement("div",{className:"info_left"},r.a.createElement("h1",{className:h.a.headinfo},"CHI TI\u1ebeT S\u1ea2N PH\u1ea8M"),r.a.createElement("img",{className:h.a.infoimg,src:s.url,alt:"img"}),r.a.createElement("h1",{className:h.a.infotext},"Th\xf4ng tin s\u1ea3n ph\u1ea9m"),r.a.createElement("p",{className:h.a.infomation},"haha")),r.a.createElement("div",{className:h.a.info_right},r.a.createElement("span",{onClick:function(){document.querySelector(".containerinfo").classList.remove("open")},className:h.a.times},r.a.createElement(_.b,null)),r.a.createElement("h1",{className:h.a.headinfo},s.title),r.a.createElement("div",{className:h.a.infomationprice},r.a.createElement("h1",{className:h.a.infoprice},"Gi\xe1 b\xe1n: "),r.a.createElement("h1",{className:h.a.infoprices},s.price)),r.a.createElement("h1",{className:h.a.infonumber},"S\u1ed1 l\u01b0\u1ee3ng: "),r.a.createElement("div",{className:h.a.btnnumber},r.a.createElement("button",{onClick:function(){k(v<=0?0:v-1)},className:h.a.btndescrease},"-"),r.a.createElement("p",{className:h.a.number},v),r.a.createElement("button",{onClick:function(){k(v+1)},className:h.a.btnincrease},"+")),r.a.createElement("button",{onClick:function(){d(f),d((function(e){document.querySelector(".containerinfo").classList.remove("open");var a=[].concat(Object(u.a)(e),[s]),t=JSON.stringify(a);return localStorage.setItem("products",t),a}))},className:h.a.btnbuy},"CH\u1eccN MUA")))},k=["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"];var O=function(e){var a=e.number,t=Object(n.useState)(0),c=Object(l.a)(t,2),m=c[0],s=c[1];Object(n.useEffect)((function(){document.querySelectorAll(".item").forEach((function(e){e.onclick=function(){s(e.dataset.index)}}))}));var i=function(){document.querySelector(".containerinfo").classList.add("open")},o=Object(n.useState)([]),u=Object(l.a)(o,2),_=u[0],f=u[1];return Object(n.useEffect)((function(){fetch("https://621089284cd3049e177eb0c8.mockapi.io/".concat(k[a-1])).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"containerinfo"},r.a.createElement(v,{i:m,number:a})),_.map((function(e,a){return r.a.createElement("div",{className:"col",key:e.id},r.a.createElement("div",{className:"item","data-index":a},r.a.createElement("div",{className:"infoproduct"}),r.a.createElement("div",null,r.a.createElement("img",{className:"img",onClick:i,src:e.url,alt:"img"})),r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"title"},e.title)),r.a.createElement("div",{className:"price"},r.a.createElement("h1",{className:"price"},e.price))))})))};var j=function(e){e.number;var a=Object(n.useState)([]),t=Object(l.a)(a,2);return t[0],t[1],r.a.createElement("div",null,r.a.createElement("div",{className:"Banner"},r.a.createElement("img",{className:"Banner",src:"https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png",alt:"Banner"})))};var W=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(j,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(O,{number:a})))};var x=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(j,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(O,{number:a})))};var S=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(j,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(O,{number:a})))};var w=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(j,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(O,{number:a})))};var y=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(j,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(O,{number:a})))};var C=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))};var I=function(e){return e.number,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))};var M=function(e){return e.number,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))},F=t(3),R=t.n(F),B=t(12);var G=function(){return r.a.createElement("div",{className:"formregisterparent"},r.a.createElement("div",{className:Object(o.a)(R.a.formregister)},r.a.createElement("div",{className:Object(o.a)(R.a.formregisterimg)},r.a.createElement("img",{className:Object(o.a)(R.a.formregisterimg),src:"https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg",alt:"img-form"})),r.a.createElement("div",{className:Object(o.a)(R.a.formregisterimg)},r.a.createElement("h3",{className:Object(o.a)(R.a.formhead)},"\u0110\u0102NG K\xdd"),r.a.createElement("span",{onClick:function(){document.querySelector(".formregisterparent").classList.remove("open")},className:Object(o.a)(R.a.times)},r.a.createElement(_.b,null)),r.a.createElement("h4",{className:Object(o.a)(R.a.formunhead)},"\u0110\u0103ng k\xfd v\u1edbi t\xe0i kho\u1ea3n"),r.a.createElement("div",{className:Object(o.a)(R.a.formheadbtn)},r.a.createElement("button",{className:Object(o.a)(R.a.formbtnfb)},r.a.createElement(B.a,null),r.a.createElement("p",{className:Object(o.a)(R.a.formicon)},"FACEBOOK")),r.a.createElement("button",{className:Object(o.a)(R.a.formbtngg)},r.a.createElement(B.b,null),r.a.createElement("p",{className:Object(o.a)(R.a.formicon)},"GOOGLE"))),r.a.createElement("h6",{className:R.a.or},"ho\u1eb7c"),r.a.createElement("div",{className:Object(o.a)(R.a.forminput)},r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"M\u1eadt kh\u1ea9u"}),r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"}),r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"M\xe3 gi\u1edbi thi\u1ec7u"})),r.a.createElement("button",{className:Object(o.a)(R.a.footerbtn)},"\u0110\u0102NG K\xdd"),r.a.createElement("p",null,"B\u1eb1ng c\xe1ch ti\u1ebfp t\u1ee5c, b\u1ea1n s\u1ebd \u0111\u1ed3ng \xfd r\u1eb1ng \u0111\xe3 \u0111\u1ecdc v\xe0 hi\u1ec3u c\xe1c Ch\xednh s\xe1ch quy\u1ec1n ri\xeang t\u01b0."),r.a.createElement("h6",{className:Object(o.a)(R.a.footer_text)},"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n ?"),r.a.createElement("button",{className:Object(o.a)(R.a.footerbtnacsess)},"\u0110\u0102NG NH\u1eacP"))))};var L=function(){return r.a.createElement("div",{className:"formloginparent"},r.a.createElement("div",{className:Object(o.a)(R.a.formregister)},r.a.createElement("div",{className:Object(o.a)(R.a.formregisterimg)},r.a.createElement("img",{className:Object(o.a)(R.a.formregisterimg),src:"https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg",alt:"img-form"})),r.a.createElement("div",{className:Object(o.a)(R.a.formregisterimg)},r.a.createElement("h3",{className:Object(o.a)(R.a.formhead)},"\u0110\u0102NG NH\u1eacP"),r.a.createElement("span",{onClick:function(){document.querySelector(".formloginparent").classList.remove("open")},className:Object(o.a)(R.a.times)},r.a.createElement(_.b,null)),r.a.createElement("p",{className:Object(o.a)(R.a.paragraph_head)},"H\xe3y \u0111\u0103ng nh\u1eadp \u0111\u1ec3 s\u1eed d\u1ee5ng t\u1ea5t c\u1ea3 \u1ee9ng d\u1ee5ng c\xf3 tr\xean Welife"),r.a.createElement("h4",{className:Object(o.a)(R.a.formunhead)},"\u0110\u0103ng nh\u1eadp v\u1edbi t\xe0i kho\u1ea3n"),r.a.createElement("div",{className:Object(o.a)(R.a.formheadbtn)},r.a.createElement("button",{className:Object(o.a)(R.a.formbtnfb)},r.a.createElement(B.a,null),r.a.createElement("p",{className:Object(o.a)(R.a.formicon)},"FACEBOOK")),r.a.createElement("button",{className:Object(o.a)(R.a.formbtngg)},r.a.createElement(B.b,null),r.a.createElement("p",{className:Object(o.a)(R.a.formicon)},"GOOGLE"))),r.a.createElement("h6",{className:R.a.or},"ho\u1eb7c"),r.a.createElement("div",{className:Object(o.a)(R.a.forminput)},r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),r.a.createElement("input",{className:Object(o.a)(R.a.input),placeholder:"M\u1eadt kh\u1ea9u"})),r.a.createElement("button",{className:Object(o.a)(R.a.footerbtnacsess)},"\u0110\u0102NG NH\u1eacP"),r.a.createElement("p",null,"B\u1eb1ng c\xe1ch ti\u1ebfp t\u1ee5c, b\u1ea1n s\u1ebd \u0111\u1ed3ng \xfd r\u1eb1ng \u0111\xe3 \u0111\u1ecdc v\xe0 hi\u1ec3u c\xe1c Ch\xednh s\xe1ch quy\u1ec1n ri\xeang t\u01b0."))))};var q=r.a.memo((function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("header",{className:Object(o.a)(i.a.header,"d-flex")},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/",className:Object(o.a)(i.a.header_logo)},r.a.createElement("img",{className:Object(o.a)(i.a.header_logoimg),src:"https://www.weluck.vn/img/logo-weluck-dark.07935499.png",alt:"Logo"})),r.a.createElement("div",{className:"header_btn"},r.a.createElement("button",{onClick:function(){document.querySelector(".formloginparent").classList.add("open")},className:Object(o.a)(i.a.header_login)},"\u0110\u0103ng nh\u1eadp"))),r.a.createElement("div",{className:"header_nav d-flex"},r.a.createElement("ul",{className:"header_nav_list d-flex"},["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"].map((function(e,a){return r.a.createElement("li",{key:a,className:Object(o.a)(i.a.header_nav_item)},r.a.createElement(d.c,{exact:"true",to:"/".concat(e),className:Object(o.a)(i.a.header_nav_link),activeclassname:Object(o.a)(i.a.active)},e.toUpperCase()))})))),r.a.createElement("div",{onClick:function(){return c(!t)},className:Object(o.a)(i.a.header_icon,"d-flex")},r.a.createElement(_.a,null)),t&&r.a.createElement(E,null),r.a.createElement("div",{className:"header_btn"},r.a.createElement("button",{onClick:function(){document.querySelector(".formregisterparent").classList.add("open")},className:Object(o.a)(i.a.header_registration)},"\u0110\u0103ng K\xfd")),r.a.createElement(G,null),r.a.createElement(L,null)),r.a.createElement("div",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",element:r.a.createElement(x,{number:"1"})}),r.a.createElement(p.a,{path:"/Wesushi",element:r.a.createElement(x,{number:"1"})}),r.a.createElement(p.a,{path:"/Wecake",element:r.a.createElement(y,{number:"2"})}),r.a.createElement(p.a,{path:"/Wetea",element:r.a.createElement(W,{number:"3"})}),r.a.createElement(p.a,{path:"/Weshop",element:r.a.createElement(M,{number:"4"})}),r.a.createElement(p.a,{path:"/Westyle",element:r.a.createElement(S,{number:"5"})}),r.a.createElement(p.a,{path:"/Wescan",element:r.a.createElement(I,{number:"6"})}),r.a.createElement(p.a,{path:"/Wefix",element:r.a.createElement(w,{number:"7"})}),r.a.createElement(p.a,{path:"/Welotto",element:r.a.createElement(C,{number:"8"})}))))}));var H=function(e){return e.number,r.a.createElement("div",{className:"App"},r.a.createElement(q,null))},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,m=a.getTTFB;t(e),n(e),r(e),c(e),m(e)}))};t(24);m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,null,r.a.createElement(H,null))),document.getElementById("root")),K()}],[[18,1,2]]]);
//# sourceMappingURL=main.ff8e3e44.chunk.js.map