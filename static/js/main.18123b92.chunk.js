(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{61:function(e,t,a){e.exports=a(78)},66:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),u=(a(66),a(37)),i=a(79),o=a(120),m=a(121),d=a(122),s=a(114),E=a(12),f=a(13),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(f.a)(t,2),r=a[0],l=a[1],c=function(){l(!r)};return[r,c]},g=a(116),b=a(124),O=a(117),h=a(118),v=a(115),j=a(50),y=a.n(j),k=a(51),x=a.n(k),C=a(123),S=function(e){var t=Object(n.useState)(e),a=Object(f.a)(t,2),r=a[0],l=a[1];return[r,function(e){l(e.target.value)},function(){l("")}]},D=a(49),w=a.n(D);var T=a(40),I=a(52),N=a(47),A=a.n(N),F=function(e,t){switch(t.type){case"ADD":return[].concat(Object(I.a)(e),[{id:A()(),task:t.task,completed:!1}]);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGEL":return e.map((function(e){return e.id===t.id?Object(T.a)({},e,{completed:!e.completed}):e}));case"EDITE":return e.map((function(e){return e.id===t.id?Object(T.a)({},e,{task:t.task,completed:!1}):e}));default:return e}},G=[],J=Object(n.createContext)(),L=Object(n.createContext)(),R=function(e){var t=function(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a;try{a=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(n){a=t}return a})),l=Object(E.a)(r,2),c=l[0],u=l[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,u]}("todos",G,F),a=Object(E.a)(t,2),l=a[0],c=a[1];return r.a.createElement(J.Provider,{value:l},r.a.createElement(L.Provider,{value:c},e.children))},W=function(e){var t=e.toggel,a=(e.id,e.task),l=Object(n.useContext)(L),c=S(a),u=Object(E.a)(c,3),i=u[0],o=u[1],m=u[2],d=function(e){e.preventDefault(),l({type:"EDITE",task:i}),t(),m()};return r.a.createElement("form",{onSubmit:d,style:{display:"flex",alignItems:"center",marginLeft:"1rem"}},r.a.createElement(C.a,{value:i,onChange:o,fullWidth:!0,autoFocus:!0}),r.a.createElement(v.a,{"aria-label":"Save",onClick:d},r.a.createElement(w.a,null)))},H=Object(n.memo)((function(e){var t=e.task,a=e.completed,l=e.id,c=Object(n.useContext)(L),u=p(!1),i=Object(E.a)(u,2),o=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{height:"64px"}},o?r.a.createElement(W,{toggel:m,id:l,task:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{tabIndex:-1,checked:a,onClick:function(){return c({type:"TOGGEL",id:l})}}),r.a.createElement(O.a,{style:{textDecoration:a?"line-through":"none"}},t),r.a.createElement(h.a,null,r.a.createElement(v.a,{"aria-label":"Delete",onClick:function(){return c({type:"REMOVE",id:l})}},r.a.createElement(y.a,null)),r.a.createElement(v.a,{"aria-label":"Edit",onClick:m},r.a.createElement(x.a,null))))))})),M=a(119),P=function(){var e=Object(n.useContext)(J);return r.a.createElement(i.a,null,e.length>0?r.a.createElement(s.a,null,e.map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,Object.assign({},t,{key:t.id})),a<e.length-1&&r.a.createElement(M.a,null))}))):r.a.createElement(u.a,{variant:"h4",style:{textAlign:"center",padding:"2rem"}}," ","No Todo Now"," "))},V=function(){var e=Object(n.useContext)(L),t=S(""),a=Object(E.a)(t,3),l=a[0],c=a[1],u=a[2];return r.a.createElement(i.a,{style:{padding:"0 1rem",margin:"1rem 0"}},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD",task:l}),u()}},r.a.createElement(C.a,{value:l,onChange:c,label:"Add New Todo",fullWidth:!0})))},B=function(){return r.a.createElement(i.a,{style:{paddind:0,margin:0,height:"100vh",backgroundColor:"#fafafa"}},r.a.createElement(o.a,{color:"primary",position:"static",style:{height:"64px"}},r.a.createElement(m.a,null,r.a.createElement(u.a,{color:"inherit"}," TODOS WITH HOOKS "))),r.a.createElement(d.a,{container:!0,justify:"center",style:{paddingTop:"1rem"}},r.a.createElement(d.a,{item:!0,xs:11,md:7,lg:4},r.a.createElement(R,null,r.a.createElement(V,null),r.a.createElement(P,null)))))},K=function(){return r.a.createElement(B,null)};c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.18123b92.chunk.js.map