(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(t,e,s){},24:function(t,e,s){},25:function(t,e,s){"use strict";s.r(e);var c=s(11),n=s(7),u=s(2),l=s(12),a=s.n(l),i=s(10),r=s(3),j=(s(22),s(1)),o=function(t){var e=t.arr,s=t.updateItem,c=t.statusActive;return Object(j.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t,e){return t.status===c?Object(j.jsxs)("li",{className:"list",children:[Object(j.jsx)(i.a,{icon:2===t.status?r.d:r.c,onClick:function(){return 2===t.status?s(e,0):null},title:2===t.status?"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c":null}),Object(j.jsx)("span",{children:t.text}),Object(j.jsx)(i.a,{icon:2===t.status?r.c:0===t.status?r.b:r.a,onClick:function(){return 0===t.status?s(e,1):s(e,2)},title:0===t.status?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c":1===t.status?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c":null})]},e):null}))})},b=(s(24),function(){var t=Object(u.useRef)(null),e=Object(u.useRef)(null),s=Object(u.useState)(null),l=Object(n.a)(s,2),a=l[0],i=l[1],r=Object(u.useState)(0),b=Object(n.a)(r,2),O=b[0],d=b[1],f=Object(u.useState)([]),x=Object(n.a)(f,2),h=x[0],v=x[1];Object(u.useEffect)((function(){a&&(v([].concat(Object(c.a)(h),[{status:0,text:a}])),i(null),t.current.value="")}),[a]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"To do list use HOOKS"}),Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("input",{type:"text",ref:t}),Object(j.jsx)("button",{onClick:function(){return i(t.current.value)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(j.jsxs)("div",{className:"body",children:[Object(j.jsxs)("ul",{className:"status-lists",ref:e,children:[Object(j.jsx)("li",{className:0===O?"status-active":null,onClick:function(){return d(0)},children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b"}),Object(j.jsx)("li",{className:1===O?"status-active":null,onClick:function(){return d(1)},children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u044b"}),Object(j.jsx)("li",{className:2===O?"status-active":null,onClick:function(){return d(2)},children:"\u0423\u0434\u0430\u043b\u0435\u043d\u044b"})]}),Object(j.jsx)(o,{arr:h,updateItem:function(t,e){var s=h.map((function(s,c){return c===t&&(s.status=e),s}));v(Object(c.a)(s))},statusActive:O})]})]})});a.a.render(Object(j.jsx)(u.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d41d634b.chunk.js.map