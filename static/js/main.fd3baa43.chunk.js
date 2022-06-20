(this["webpackJsonpblack-thoughts"]=this["webpackJsonpblack-thoughts"]||[]).push([[0],{164:function(t,e,n){"use strict";n.r(e);var a=n(11),r=n.n(a),o=n(61),i=n.n(o),c=(n(80),n(9)),u=n(28),s=n(13),l=n.n(s),h=n(22),d=n(15),b=(n(82),n(68)),j=n(42),p=n.n(j),f=n(10),g=function(t){var e=t.data,n=t.changeDescription,r=Object(a.useRef)(),o=Object(a.useCallback)((function(t){var e=1+100/Math.hypot(t.x,t.y,t.z);r.current.cameraPosition({x:t.x*e,y:t.y*e,z:t.z*e},t,2e3),n([t.name,t.description,t.link,t.relatedAuthors])}),[r]);return Object(f.jsx)("div",{className:p.a.graph,children:Object(f.jsx)(b.a,{ref:r,graphData:e,width:900,height:p.a.graph.height,backgroundColor:"#5F9DA0",onNodeClick:o})})},O=n(67),v=n.n(O),m=function(t){var e=t.description;return Object(f.jsxs)("div",{className:v.a.overview,children:[Object(f.jsx)("h1",{children:"Black Thoughts"}),e.map((function(t){return t.includes("https://")?Object(f.jsx)("a",{href:t,children:Object(f.jsx)("h3",{children:t})}):Object(f.jsx)("h3",{children:t})}))]})},x=n(34),k=n.n(x),y=function(t){var e=t.formHandler,n=t.title,a=t.description,r=t.link,o=t.keywords,i=t.date,c=t.author,u=t.organization,s=t.location,l=t.relatedAuthors,h=t.citations,d=t.update;return Object(f.jsxs)("div",{className:k.a.submission,children:[Object(f.jsx)("h1",{children:"Add Submission"}),Object(f.jsxs)("form",{className:k.a.submissionForm,onSubmit:function(t){e(t)},children:[Object(f.jsx)("input",{type:"text",name:"title",placeholder:"title",value:n,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("textarea",{type:"text-area",name:"description",placeholder:"description",value:a,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"link",placeholder:"link",value:r,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"keywords",placeholder:"keywords",value:o,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"date",placeholder:"date of publication",value:i,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"author",placeholder:"author",value:c,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"organization",placeholder:"organization",value:u,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"location",placeholder:"location",value:s,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"relatedAuthors",placeholder:"related authors",value:l,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{type:"text",name:"citations",placeholder:"citations",value:h,onChange:function(t){return d(t.target.name,t.target.value)}}),Object(f.jsx)("input",{className:k.a.button,type:"submit",placeholder:"Submit"})]})]})},w=n(43),A=n.n(w),S=n(69);function C(t,e){return{id:e,name:t.title,link:t.link,keywords:t.keywords,date:t.date,author:t.author,organization:t.organization,location:t.location,relatedAuthors:t.relatedAuthors,citations:t.citations,val:1,description:t.description}}function _(t){if(t.length<=0)return[];var e=[],n=0;return t.forEach((function(t){var a=n;e.push(C(t,a)),n++})),e}function z(t){var e=[];t.forEach((function(t){var n={id:t.id,relatedAuthors:Object(S.a)(t.relatedAuthors.split(", "))};e.push(n)}));var n={};return e.forEach((function(t){t.relatedAuthors.forEach((function(e){e in n?n[e].push(t.id):n[e]=[t.id]}))})),n}function E(t,e){var n=!1;return e.forEach((function(e){e.source==t.source&&e.target==t.target&&(n=!0)})),n}var F={byAuthor:function(t){return function(t){if(Object.keys(t).length<=0)return[];var e=[];for(var n in t)for(var a=0;a<t[n].length;a++)for(var r=a+1;r<t[n].length;r++){var o={source:t[n][a],target:t[n][r]};E(o,e)||(console.log("new edge from ".concat(t[n][a]," to ").concat(t[n][r])),e.push(o))}return e}(t)}};var N=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)({}),i=Object(d.a)(o,2),s=i[0],b=i[1],j=Object(a.useState)("byAuthor"),p=Object(d.a)(j,1)[0],O=Object(a.useState)({byAuthor:{}}),v=Object(d.a)(O,2),x=v[0],k=v[1],w=Object(a.useState)([]),S=Object(d.a)(w,2),E=S[0],N=S[1],D=Object(a.useState)(!1),B=Object(d.a)(D,2),H=B[0],J=B[1],L=Object(a.useState)({nodes:n,links:E}),M=Object(d.a)(L,2),P=M[0],T=M[1];Object(a.useEffect)(Object(h.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("http://localhost:5001/").then((function(t){t.data.length>0&&r(_(t.data))})).catch((function(t){return console.error(t)}));case 2:case"end":return t.stop()}}),t)}))),[]),Object(a.useEffect)((function(){b(z(n)),k((function(t){var e=t;return e.byAuthor=z(n),e}))}),[n]),Object(a.useEffect)((function(){N(F[p](x[p])),J(!0)}),[s]),Object(a.useEffect)((function(){H&&(T({nodes:n,links:E}),J(!1))}),[H]);var G=Object(a.useState)(!1),I=Object(d.a)(G,2),K=I[0],R=I[1],W=Object(a.useState)({title:"",description:"",link:"",keywords:"",date:"",author:"",organization:"",location:"",relatedAuthors:"",citations:""}),q=Object(d.a)(W,2),Q=q[0],U=q[1],V=function(){var t=Object(h.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,A.a.post("http://localhost:5000/add",Q).then((function(t){r(n.push(C(t.data,n.length)))})).catch((function(t){return console.error(t)}));case 3:U({title:"",description:"",link:"",keywords:"",date:"",author:"",organization:"",location:"",relatedAuthors:"",citations:""});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=Object(a.useState)(["Associate for free"]),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(g,{data:P,changeDescription:function(t){R(!1),$(t)}}),K?Object(f.jsx)(y,{title:Q.title,description:Q.description,link:Q.link,keywords:Q.keywords,date:Q.date,author:Q.author,organization:Q.organization,location:Q.location,relatedAuthors:Q.relatedAuthors,citations:Q.citations,update:function(t,e){U((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(c.a)({},t,e))}))},formHandler:V}):Object(f.jsx)(m,{description:Z}),Object(f.jsx)("button",{className:"addSubBtn",onClick:function(){return R(!K)},children:K?"Close":"+"})]})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),D()},34:function(t,e,n){t.exports={submission:"Submission_submission__HbKHu",annotation:"Submission_annotation__2OaxG",submissionForm:"Submission_submissionForm__p42yB"}},42:function(t,e,n){t.exports={graph:"Graph_graph__1nWte"}},67:function(t,e,n){t.exports={overview:"Overview_overview__1DALJ",annotation:"Overview_annotation__1Mua3"}},80:function(t,e,n){},82:function(t,e,n){}},[[164,1,2]]]);
//# sourceMappingURL=main.fd3baa43.chunk.js.map