(this.webpackJsonpckeditor5=this.webpackJsonpckeditor5||[]).push([[0],{24:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(19),r=c.n(i),o=c(7),a=(c(24),c(1));var d=function(e){var t=e.onChange,i=e.editorLoaded,r=e.name,o=e.value,d=Object(n.useRef)(),s=d.current||{},j=s.CKEditor,u=s.ClassicEditor;return Object(n.useEffect)((function(){d.current={CKEditor:c(26).CKEditor,ClassicEditor:c(30)}}),[]),Object(a.jsx)("div",{children:i?Object(a.jsx)(j,{type:"",name:r,editor:u,data:o,onChange:function(e,c){var n=c.getData();t(n)}}):Object(a.jsx)("div",{children:"Editor loading"})})};function s(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),j=s[0],u=s[1];return Object(n.useEffect)((function(){i(!0)}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"ckEditor 5"}),Object(a.jsx)(d,{name:"description",onChange:function(e){u(e)},editorLoaded:c}),JSON.stringify(j)]})}var j=document.getElementById("root");r.a.render(Object(a.jsx)(n.StrictMode,{children:Object(a.jsx)(s,{})}),j)}},[[43,1,2]]]);
//# sourceMappingURL=main.14213b77.chunk.js.map