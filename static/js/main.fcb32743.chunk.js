(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(15),o=c.n(a),l=(c(22),c(7)),r=(c.p,c(23),c(24),c(0));function i(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",style:e.myStyle,children:[Object(r.jsx)("textarea",{cols:"100",rows:"9",value:n,onChange:function(e){a(e.target.value)},className:"textArea",style:e.myStyle}),Object(r.jsxs)("div",{className:"myBtns",children:[Object(r.jsx)("button",{disabled:0===n.length,onClick:function(){var e=n.toUpperCase();a(e)},className:"btnn",style:e.myStyle,children:"convert to upper case"}),Object(r.jsx)("button",{disabled:0===n.length,onClick:function(){var e=n.toLowerCase();a(e)},className:"btnn",style:e.myStyle,children:"convert to lower case "}),Object(r.jsx)("button",{disabled:0===n.length,onClick:function(){var e=n.split(/[ ]+/);a(e.join(" "))},className:"btnn",style:e.myStyle,children:"Remove Extra Spaces"}),Object(r.jsx)("button",{disabled:0===n.length,onClick:function(){var e=document.getElementsByClassName("textArea")[0];e.select(),document.getSelection().removeAllRanges(),navigator.clipboard.writeText(e.value)},className:"btnn",style:e.myStyle,children:"copy text"})]}),Object(r.jsxs)("p",{children:["word count : ",n.split(/\s+/).filter((function(e){return 0!==e.length})).length]}),Object(r.jsxs)("p",{children:["characters count : ",n.length]})]})})}c(26);c(27);var d=c(9);var b=function(e){return Object(r.jsx)("nav",{class:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),id:"myNavbar",children:Object(r.jsxs)("div",{class:"container-fluid",children:[Object(r.jsx)(d.b,{class:"navbar-brand",to:"/",children:"TextUtiles"}),Object(r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)(d.b,{class:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)(d.b,{class:"nav-link",to:"/about",children:"About"})})]})}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)("div",{className:"bg-primary rounded mx-1",onClick:function(){e.changeMode("primary")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}}),Object(r.jsx)("div",{className:"bg-warning rounded mx-1",onClick:function(){e.changeMode("warning")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}}),Object(r.jsx)("div",{className:"bg-success rounded mx-1",onClick:function(){e.changeMode("success")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}}),Object(r.jsx)("div",{className:"bg-danger rounded mx-1",onClick:function(){e.changeMode("danger")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}}),Object(r.jsx)("div",{className:"bg-light rounded mx-1",onClick:function(){e.changeMode("light")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}}),Object(r.jsx)("div",{className:"bg-dark rounded mx-1",onClick:function(){e.changeMode("dark")},style:{height:"22px",width:"22px",border:"1px solid #00ffe5"}})]})]})})};c(33);var u=function(e){return Object(r.jsx)("div",{id:"myPara",style:e.myStyle,children:Object(r.jsx)("p",{children:"As Bootstrap 5 continues to mature, more and more styles will be built with CSS variables as a means to provide more real-time customization without the need to always recompile Sass. Our approach is to take our source Sass variables and transform them into CSS variables. That way, even if you don\u2019t use CSS variables, you still have all the power of Sass. This is still in-progress and will take time to fully implement."})})};c(34);var j=function(e){return Object(r.jsx)("div",{style:{height:"20px"},children:e.alert&&Object(r.jsx)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",id:"myAlert",children:Object(r.jsx)("strong",{children:e.alert.msg})})})},h=c(2);var m=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],n=(t[1],Object(s.useState)("light")),a=Object(l.a)(n,2),o=a[0],m=(a[1],Object(s.useState)({color:"black",backgroundColor:"white"})),x=Object(l.a)(m,2),g=x[0],y=x[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{mode:o,myStyle:g,changeMode:function(e){document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-light"),document.body.classList.add("bg-"+e),"danger"===e?y({color:"white",backgroundColor:"#dc3545"}):"primary"===e?y({color:"white",backgroundColor:"#007bff"}):"warning"===e?y({color:"white",backgroundColor:"#ffc107"}):"success"===e?y({color:"white",backgroundColor:"#198754"}):"dark"===e?(y({color:"white",backgroundColor:"#212529"}),document.body.style.color="white"):"light"===e&&(document.body.style.color="#212529",y({color:"#212529",backgroundColor:"#f8f9fa"}))}}),Object(r.jsx)(j,{alert:c}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/",children:Object(r.jsx)(i,{mode:o,myStyle:g})}),Object(r.jsx)(h.a,{exact:!0,path:"/React-by-CWH",children:Object(r.jsx)(i,{mode:o,myStyle:g})}),Object(r.jsx)(h.a,{exact:!0,path:"/about",children:Object(r.jsx)(u,{myStyle:g})})]})]})})};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fcb32743.chunk.js.map