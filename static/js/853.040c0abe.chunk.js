"use strict";(self.webpackChunkgoit_react_hw_05_1_movies=self.webpackChunkgoit_react_hw_05_1_movies||[]).push([[853],{853:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var u=n(439),r=n(791),a=n(184),s=function(t){var e=t.onChange,n=(0,r.useState)(""),s=(0,u.Z)(n,2),i=s[0],o=s[1];return(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i),t.target.reset()},children:[(0,a.jsx)("input",{type:"text",placeholder:"Enter movie name",onChange:function(t){o(t.target.value)}}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})},i=n(87),o=n(689),c=n(31),f=n(368),l=function(){var t=(0,i.lr)(),e=(0,u.Z)(t,2),n=e[0],l=e[1],h=(0,r.useState)([]),v=(0,u.Z)(h,2),_=v[0],m=v[1],d=(0,r.useState)(null),g=(0,u.Z)(d,2),p=g[0],x=g[1],j=(0,o.TH)(),b=n.get("query");return(0,r.useEffect)((function(){(0,c.Pt)(b).then((function(t){return m(t.data.results)})).catch((function(t){return x(t)}))}),[b]),_?(0,a.jsxs)("div",{children:[(0,a.jsx)(s,{onChange:function(t){l(""!==t?{query:t}:{})}}),!p&&(0,a.jsx)(f.O,{movies:_,state:{from:j}})]}):null}}}]);
//# sourceMappingURL=853.040c0abe.chunk.js.map