"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{797:function(e,t,r){r.r(t);var n=r(439),a=r(390),u=r(791),c=r(689),s=r(87),o=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1],f=(0,s.lr)(),p=(0,n.Z)(f,2),m=p[0],l=p[1],h=m.get("searchName");console.log(h),(0,u.useEffect)((function(){h&&(0,a.Km)(h).then(i)}),[h]);var v=(0,c.TH)(),d=r.map((function(e){return(0,o.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:v},children:(0,o.jsx)("li",{children:e.title})},e.id)}));return console.log(d),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;l({searchName:t.elements.searchName.value}),t.reset(r)},children:[(0,o.jsx)("input",{type:"text",name:"searchName"}),(0,o.jsx)("button",{type:"Submit",children:"Search"})]}),(0,o.jsx)("ul",{children:d})]})}},390:function(e,t,r){r.d(t,{D_:function(){return p},Hs:function(){return f},Km:function(){return i},Pl:function(){return o},rQ:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e78259dddba5c209adb34bb75b422bf7"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.c5c62204.chunk.js.map