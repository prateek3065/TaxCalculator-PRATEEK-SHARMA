(this.webpackJsonpparticle46=this.webpackJsonpparticle46||[]).push([[0],{25:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(15),s=r.n(a),i=r(7),o=r(27),j=r(26),l=r(0),u=r(24).v4;function d(e){var t=e.sentences,r=e.pane,n=e.totalAmount;return 0===t.length?null:Object(l.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:"left"===r?Object(l.jsx)("th",{children:"Before Tax"}):Object(l.jsx)("th",{children:"After Tax"})})}),Object(l.jsxs)("tbody",{children:[t.map((function(e){return Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:e})},u())})),"right"===r?Object(l.jsx)("tr",{children:Object(l.jsxs)("td",{children:["Total = ",n]})}):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:"..."})})]})]})}var b=r(28),h=r(29),x=r(12),O=["book","medicine","food"];function f(e,t){function r(r){r.preventDefault();var n=t.current.value;""!==n&&(t.current.value="",function(e,t){if("string"===typeof e){var r=e.toLowerCase(),n="",c="",a=0,s=0,i=0;for(a=r.length-1;a>=0&&" "!==r[a];a--)n=r[a]+n;n=parseFloat(n),function(e){for(var t=0;t<O.length;t++)if(r.includes(O[t]))return!0;return!1}()||(s=.1*n,s=Math.round(100*(s+Number.EPSILON))/100),r.includes("imported")&&(i=.05*n,i=Math.round(100*(i+Number.EPSILON))/100),n+=i+s;for(var o=0;o<=a;o++)c+=r[o];t((function(e){var t=c+n,a=Math.round(100*(e[2]+n+Number.EPSILON))/100;return[[].concat(Object(x.a)(e[0]),[r]),[].concat(Object(x.a)(e[1]),[t]),a]}))}}(n,e))}return Object(l.jsx)(o.a,{children:Object(l.jsxs)(b.a,{onSubmit:function(e){return r(e)},children:[Object(l.jsxs)(b.a.Group,{className:"mb-3",children:[Object(l.jsx)(b.a.Label,{children:"Enter the item"}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"type here...",ref:t,required:!0}),Object(l.jsx)(b.a.Text,{className:"text-muted",children:"Last word shold be the Amount of the item"})]}),Object(l.jsx)(h.a,{variant:"primary",type:"submit",children:"Calculate Tax"})]})})}var p=function(){var e=Object(n.useState)((function(){return[[],[],0]})),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useRef)((function(){return""}));return Object(n.useEffect)((function(){}),[r]),Object(l.jsxs)(o.a,{children:[Object(l.jsxs)(o.a,{style:{display:"flex",flexDirection:"row",marginTop:"20px"},children:[Object(l.jsx)(d,{sentences:r[0],pane:"left",totalAmount:r[2]}),Object(l.jsx)(d,{sentences:r[1],pane:"right",totalAmount:r[2]})]}),f(c,a)]})};r(23);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9516b0d2.chunk.js.map