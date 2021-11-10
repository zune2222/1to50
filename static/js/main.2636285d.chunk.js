(this["webpackJsonpone-to-fifty"]=this["webpackJsonpone-to-fifty"]||[]).push([[0],{41:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a,c=t(1),r=t(18),i=t.n(r),s=t(24),o=t(6),l=t(10),d=t(14),j=t(38),b=t(15),h=t(2);var u,x=b.a.div(a||(a=Object(d.a)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:30px;\n    border-radius:15px;\n    border:0px;\n    box-shadow:2px 5px 3px 2px rgba(0,0,0,0.16);\n    margin:5px;\n    &:hover{\n        transform:scale(1.05);\n        transition:.2s;\n        color:#8B756D;\n    }\n    transition:.2s;\n"]))),f=function(e){var n=e.num,t=e.handleClick;return Object(h.jsx)(x,{className:"fnt",onClick:function(){return t(n)},children:0!==n?n:null})};var p,O,m,v=b.a.div(u||(u=Object(d.a)(["\n    width:90vw;\n    height:90vw;\n    max-width:400px;\n    max-height:400px;\n    border-radius:15px;\n    border:0px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n"]))),g=function(e){var n=e.numbers,t=e.handleClick;return Object(h.jsx)(v,{children:n.map((function(e,n){return Object(h.jsx)(f,{num:e,handleClick:t},n)}))})};for(var w,y,S=b.a.div(p||(p=Object(d.a)(["\n    margin-top:30px;\n    width:100px;\n    height:50px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:30px;\n"]))),k=b.a.div(O||(O=Object(d.a)(["\n    text-align:right;\n"]))),C=b.a.div(m||(m=Object(d.a)(["\n    width:1em;\n"]))),N=function(e){e.show,e.handleClose;var n=e.handleShow,t=e.time,a=Object(c.useState)(0),r=Object(l.a)(a,2),i=r[0],s=r[1],o=Object(c.useRef)();return o.current=i,Object(c.useEffect)((function(){var e=setInterval((function(){s((function(e){return e+30}))}),30);return function(){t(o.current/1e3),n(),clearInterval(e)}}),[]),Object(h.jsxs)(S,{children:[Object(h.jsxs)(k,{children:[Math.floor(i/1e3),":"]}),Object(h.jsx)(C,{children:i%1e3/10})]})},I=(t(41),[]),B=1;B<=25;B++)I.push(B);var E=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e},z=b.a.div(w||(w=Object(d.a)(["\n    width:100%;\n    height:90vh;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    border-radius:30px;\n    box-shadow:5px 7px 7px 5px rgba(0,0,0,0.16);\n    margin:auto;\n    overflow:hidden;\n"]))),A=b.a.button(y||(y=Object(d.a)(["\n    margin-top:30px;\n    width:100px;\n    height:50px;\n    border-radius:15px;\n    border:0px;\n    box-shadow:5px 7px 2px 3px rgba(0,0,0,0.16);\n    &:hover{\n        transform:scale(1.05);\n        transition:.5s;\n        color:#8B756D;\n    }\n    transition:.5s;\n"]))),M=function(e){var n=e.show,t=e.handleShow,a=e.handleClose,r=e.time,i=Object(c.useState)(I),s=Object(l.a)(i,2),o=s[0],d=s[1],b=Object(c.useState)(!1),u=Object(l.a)(b,2),x=u[0],f=u[1],p=Object(c.useState)(1),O=Object(l.a)(p,2),m=O[0],v=O[1],w=function(){f(!1)};return Object(h.jsxs)(z,{children:[Object(h.jsx)(g,{numbers:o,handleClick:function(e){if(e===m){50===e&&w();var n=o.indexOf(e);d((function(t){return[].concat(Object(j.a)(t.slice(0,n)),[e<26?e+25:0],Object(j.a)(t.slice(n+1)))})),v((function(e){return e+1}))}}}),x?Object(h.jsx)(N,{show:n,handleShow:t,handleClose:a,time:r}):Object(h.jsx)(A,{className:"fnt",onClick:function(){d(E(I)),v(1),f(!0)},children:"\uc2dc\uc791\ud558\uae30"})]})},F=(t(25),t.p+"static/media/logo.4b5fae0f.png");var H=function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(h.jsx)("div",{className:"container-fluid fnt",children:Object(h.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(h.jsx)(s.b,{to:"/",className:"navbar-brand mx-3",style:{cursor:"pointer"},children:"1to50"}),Object(h.jsx)(s.b,{to:"/rank",children:Object(h.jsx)("img",{src:F,style:{width:"60px",height:"60px"}})})]})})})},T=t(70),D=t(71),R=t(29),J=(t(43),{apiKey:"AIzaSyAhLlMfnhPyI51Hp68oH4_FE_kvnRTIj8w",authDomain:"to50-8e077.firebaseapp.com",databaseURL:"https://to50-8e077-default-rtdb.firebaseio.com",projectId:"to50-8e077",storageBucket:"to50-8e077.appspot.com",messagingSenderId:"515829371021",appId:"1:515829371021:web:ef32d358c2a2f1b76b92c4",measurementId:"G-E7ZQXPMV6F"});R.a.initializeApp(J);var L=function(e){var n=e.show,t=(e.handleShow,e.handleClose),a=e.time,r=Object(o.e)(),i=R.a.database(),s=Object(c.useState)(""),d=Object(l.a)(s,2),j=d[0],b=d[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(T.a,{show:n,onHide:t,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(T.a.Header,{closeButton:!0,children:Object(h.jsxs)(T.a.Title,{children:["\ub2f9\uc2e0\uc758 \uae30\ub85d : ",a," "]})}),Object(h.jsx)(T.a.Body,{children:Object(h.jsxs)("div",{className:"d-flex justify-content-center row",children:[Object(h.jsx)("div",{className:"text-center my-2",children:"\uc774\ub984\uc744 \uc801\uc5b4\uc8fc\uc138\uc694. \uc21c\uc704\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4 !"}),Object(h.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},value:j})]})}),Object(h.jsxs)(T.a.Footer,{children:[Object(h.jsx)(D.a,{variant:"secondary",onClick:t,children:"\ub2eb\uae30"}),Object(h.jsx)(D.a,{variant:"primary",onClick:function(){""!==j?(i.ref("user/").push({name:j,time:a}),t(),r.push("/rank")):alert("\ube48\uce78\uc740 \uc548\ub3fc\uc694!")},children:"\ud655\uc778"})]})]})})};var P=function(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],r=function(){return a(!0)},i=function(){return a(!1)},s=Object(c.useState)(0),o=Object(l.a)(s,2),d=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(H,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(h.jsxs)("div",{className:"col-12 col-md-8 col-lg-8",children:[Object(h.jsx)("div",{style:{marginTop:"25px"}}),Object(h.jsx)(L,{show:t,handleShow:r,handleClose:i,time:d}),Object(h.jsx)(M,{show:t,handleShow:r,handleClose:i,time:function(e){return j(e)}})]})})})]})};var _=function(){var e=Object(c.useState)(new Array),n=Object(l.a)(e,2),t=n[0],a=n[1];return console.log("first"),Object(c.useEffect)((function(){!function(){var e=R.a.database().ref("user/"),n=new Array;e.get().then((function(e){e.forEach((function(e){n.push(e.val()),n.sort((function(e,n){return e.time-n.time}))})),a(n)}))}(),console.log(t)}),[]),t.map((function(e,n){return Object(h.jsxs)("div",{className:"rankSt fnt",children:[e.name," ",e.time]},n)}))};var G=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(H,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(h.jsxs)("div",{className:"col-12 col-md-8 col-lg-8",children:[Object(h.jsx)("div",{style:{marginTop:"25px"}}),Object(h.jsx)("div",{style:{fontSize:"25px"},children:Object(h.jsx)("div",{children:Object(h.jsx)(_,{})})})]})})})]})},K=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:P}),Object(h.jsx)(o.a,{path:"/rank",component:G})]})};i.a.render(Object(h.jsx)(s.a,{basename:"/1to50",children:Object(h.jsx)(K,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2636285d.chunk.js.map