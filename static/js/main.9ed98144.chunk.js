(this["webpackJsonpone-to-fifty"]=this["webpackJsonpone-to-fifty"]||[]).push([[0],{56:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var r,a=t(1),c=t(15),i=t.n(c),s=t(31),o=t(9),l=t(10),d=t(18),j=t(40),u=t(19),b=t(2);var h,x=u.a.div(r||(r=Object(d.a)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:30px;\n    border-radius:15px;\n    border:0px;\n    box-shadow:2px 5px 3px 2px rgba(0,0,0,0.16);\n    margin:5px;\n    &:hover{\n        transform:scale(1.05);\n        transition:.2s;\n        color:#8B756D;\n    }\n    transition:.2s;\n"]))),f=function(e){var n=e.num,t=e.handleClick;return Object(b.jsx)(x,{className:"fnt",onClick:function(){return t(n)},children:0!==n?n:null})};var p,O,m,v=u.a.div(h||(h=Object(d.a)(["\n    width:90vw;\n    height:90vw;\n    max-width:400px;\n    max-height:400px;\n    border-radius:15px;\n    border:0px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n"]))),g=function(e){var n=e.numbers,t=e.handleClick;return Object(b.jsx)(v,{children:n.map((function(e,n){return Object(b.jsx)(f,{num:e,handleClick:t},n)}))})};for(var w,y,k=u.a.div(p||(p=Object(d.a)(["\n    margin-top:30px;\n    width:100px;\n    height:50px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:30px;\n"]))),C=u.a.div(O||(O=Object(d.a)(["\n    text-align:right;\n"]))),S=u.a.div(m||(m=Object(d.a)(["\n    width:1em;\n"]))),N=function(e){e.show,e.handleClose;var n=e.handleShow,t=e.time,r=Object(a.useState)(0),c=Object(l.a)(r,2),i=c[0],s=c[1],o=Object(a.useRef)();return o.current=i,Object(a.useEffect)((function(){var e=setInterval((function(){s((function(e){return e+30}))}),30);return function(){t(o.current/1e3),n(),clearInterval(e)}}),[]),Object(b.jsxs)(k,{children:[Object(b.jsxs)(C,{children:[Math.floor(i/1e3),":"]}),Object(b.jsx)(S,{children:i%1e3/10})]})},I=(t(56),[]),B=1;B<=25;B++)I.push(B);var E=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e},z=u.a.div(w||(w=Object(d.a)(["\n    width:100%;\n    height:90vh;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    border-radius:30px;\n    box-shadow:5px 7px 7px 5px rgba(0,0,0,0.16);\n    margin:auto;\n    overflow:hidden;\n"]))),M=u.a.button(y||(y=Object(d.a)(["\n    margin-top:30px;\n    width:100px;\n    height:50px;\n    border-radius:15px;\n    border:0px;\n    box-shadow:5px 7px 2px 3px rgba(0,0,0,0.16);\n    &:hover{\n        transform:scale(1.05);\n        transition:.5s;\n        color:#8B756D;\n    }\n    transition:.5s;\n"]))),R=function(e){var n=e.show,t=e.handleShow,r=e.handleClose,c=e.time,i=Object(a.useState)(I),s=Object(l.a)(i,2),o=s[0],d=s[1],u=Object(a.useState)(!1),h=Object(l.a)(u,2),x=h[0],f=h[1],p=Object(a.useState)(1),O=Object(l.a)(p,2),m=O[0],v=O[1],w=function(){f(!1)};return Object(b.jsxs)(z,{children:[Object(b.jsx)(g,{numbers:o,handleClick:function(e){if(e===m){50===e&&w();var n=o.indexOf(e);d((function(t){return[].concat(Object(j.a)(t.slice(0,n)),[e<26?e+25:0],Object(j.a)(t.slice(n+1)))})),v((function(e){return e+1}))}}}),x?Object(b.jsx)(N,{show:n,handleShow:t,handleClose:r,time:c}):Object(b.jsx)(M,{className:"fnt",onClick:function(){d(E(I)),v(1),f(!0)},children:"\uc2dc\uc791\ud558\uae30"})]})},A=(t(32),t.p+"static/media/logo.4b5fae0f.png");var F=function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(b.jsx)("div",{className:"container-fluid fnt",children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(b.jsx)(s.b,{to:"/",className:"navbar-brand mx-3",style:{cursor:"pointer"},children:"1to50"}),Object(b.jsx)(s.b,{to:"/rank",children:Object(b.jsx)("img",{src:A,style:{width:"60px",height:"60px"}})})]})})})},H=t(103),L=t(104),Q=t(38),T=(t(58),{apiKey:"AIzaSyAhLlMfnhPyI51Hp68oH4_FE_kvnRTIj8w",authDomain:"to50-8e077.firebaseapp.com",databaseURL:"https://to50-8e077-default-rtdb.firebaseio.com",projectId:"to50-8e077",storageBucket:"to50-8e077.appspot.com",messagingSenderId:"515829371021",appId:"1:515829371021:web:ef32d358c2a2f1b76b92c4",measurementId:"G-E7ZQXPMV6F"});Q.a.initializeApp(T);var D=function(e){var n=e.show,t=(e.handleShow,e.handleClose),r=e.time,c=Object(o.e)(),i=Q.a.database(),s=Object(a.useState)(""),d=Object(l.a)(s,2),j=d[0],u=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(H.a,{show:n,onHide:t,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(H.a.Header,{closeButton:!0,children:Object(b.jsxs)(H.a.Title,{children:["\ub2f9\uc2e0\uc758 \uae30\ub85d : ",r," "]})}),Object(b.jsx)(H.a.Body,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-center row",children:[Object(b.jsx)("div",{className:"text-center my-2",children:"\uc774\ub984\uc744 \uc801\uc5b4\uc8fc\uc138\uc694. \uc21c\uc704\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4 !"}),Object(b.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},value:j})]})}),Object(b.jsxs)(H.a.Footer,{children:[Object(b.jsx)(L.a,{variant:"secondary",onClick:t,children:"\ub2eb\uae30"}),Object(b.jsx)(L.a,{variant:"primary",onClick:function(){""!==j?(i.ref("user/").push({name:j,time:r}),t(),c.push("/rank")):alert("\ube48\uce78\uc740 \uc548\ub3fc\uc694!")},children:"\ud655\uc778"})]})]})})};var P=function(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],r=n[1],c=function(){return r(!0)},i=function(){return r(!1)},s=Object(a.useState)(0),o=Object(l.a)(s,2),d=o[0],j=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(F,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(b.jsxs)("div",{className:"col-12 col-md-8 col-lg-8",children:[Object(b.jsx)("div",{style:{marginTop:"25px"}}),Object(b.jsx)(D,{show:t,handleShow:c,handleClose:i,time:d}),Object(b.jsx)(R,{show:t,handleShow:c,handleClose:i,time:function(e){return j(e)}})]})})})]})},J=t(51),_=t.n(J),G=t(72),K=t(39),U=t(73),V=t.n(U);var X=function(){var e=function(){var e=Object(G.a)(_.a.mark((function e(){var n,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Q.a.database().ref("user/"),t=new Array,e.next=4,n.get().then((function(e){e.forEach((function(e){t.push(e.val()),t.sort((function(e,n){return e.time-n.time}))}))}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=Object(K.useQuery)("makeRank",e),t=n.data,r=n.isLoading,c=(n.error,n.refetch);if(Object(a.useEffect)((function(){c()}),[]),r)return Object(b.jsx)(V.a,{type:"spinningBubbles",style:{marginLeft:"auto",marginRight:"auto",width:50,height:50}});var i=1;return t.map((function(e,n){return Object(b.jsxs)("div",{className:"rankSt fnt",children:[i++,". ",e.name," ",e.time]},n)}))};var Z=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(F,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(b.jsxs)("div",{className:"col-12 col-md-8 col-lg-8",children:[Object(b.jsx)("div",{style:{marginTop:"25px"}}),Object(b.jsx)("div",{style:{fontSize:"25px"},children:Object(b.jsx)("div",{children:Object(b.jsx)(X,{})})})]})})})]})},q=function(){var e=new K.QueryClient;return Object(b.jsx)(K.QueryClientProvider,{client:e,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:P}),Object(b.jsx)(o.a,{path:"/rank",component:Z})]})})};i.a.render(Object(b.jsx)(s.a,{basename:"/1to50",children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.9ed98144.chunk.js.map