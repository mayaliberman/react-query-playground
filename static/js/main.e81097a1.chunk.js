(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{43:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),s=n(17),i=n.n(s),a=(n(43),n(18)),j=n(1),u=function(e){var t=e.setPage;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("button",{onClick:function(){return t("planets")},children:"Planets"}),Object(j.jsx)("button",{onClick:function(){return t("people")},children:"People"})]})},o=n(20),l=n.n(o),d=n(29),b=n(14),h=function(e){var t=e.planet;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsxs)("p",{children:["Population = ",t.population]}),Object(j.jsxs)("p",{children:["Terrain = ",t.terrain]})]})},p=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,fetch("https://swapi.dev/api/planets/?page=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(b.useQuery)(["planets",n],(function(){return p(n)}),{keepPreviousData:!0}),i=s.data,u=s.isLoading,o=s.isError,l=s.isPreviousData,d=s.isFetching;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Planets"}),Object(j.jsxs)("h3",{children:["Current Page: ",n]}),Object(j.jsx)("button",{onClick:function(){return c((function(e){return Math.max(e-1,0)}))},disabled:1===n,children:"Previous Page"}),Object(j.jsx)("button",{onClick:function(){!l&&i.next&&c((function(e){return e+1}))},disabled:l||!(null===i||void 0===i?void 0:i.next),children:"Next Page"}),d?Object(j.jsx)("span",{children:" Loading..."}):null," ",u?Object(j.jsx)("div",{children:"Loading..."}):o?Object(j.jsx)("div",{children:"Error"}):Object(j.jsx)("div",{children:i.results.map((function(e){return Object(j.jsx)(h,{planet:e},e.name)}))})]})},x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"People"})})},v=n(30),f=new b.QueryClient;var P=function(){var e=Object(r.useState)("planets"),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(b.QueryClientProvider,{client:f,children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Star Wars Info"}),Object(j.jsx)(u,{setPage:c}),Object(j.jsx)("div",{className:"content",children:"planets"===n?Object(j.jsx)(O,{}):Object(j.jsx)(x,{})})]}),Object(j.jsx)(v.ReactQueryDevtools,{initialIsOpen:!1})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e81097a1.chunk.js.map