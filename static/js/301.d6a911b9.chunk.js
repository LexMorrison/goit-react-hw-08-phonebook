"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[301],{7301:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o,s,c=t(2791),d=t(2286),u=t(854),l=t(9434),p=t(3992),x=t(9439),h=t(1686),f=t.n(h),m=t(168),v=t(5706),Z=v.Z.form(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n"]))),b=v.Z.label(a||(a=(0,m.Z)(["\n  display: flex;\n"]))),j=v.Z.input(i||(i=(0,m.Z)(["\n  margin-left: 20px;\n  max-width: 160px;\n"]))),g=v.Z.input(o||(o=(0,m.Z)(["\n  margin-left: 5px;\n  max-width: 160px;\n"]))),w=v.Z.button(s||(s=(0,m.Z)(["\n  padding: 10px 20px;\n  border-radius: 3px;\n  text-transform: capitalize;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #45a049;\n  }\n"]))),y=t(184);var C,k,A,_=function(){var n=(0,c.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(""),i=(0,x.Z)(a,2),o=i[0],s=i[1],u=(0,l.v9)(d.Af),h=(0,l.I0)();(0,c.useEffect)((function(){h((0,p.VC)())}),[h]);var m=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"phone":s(a)}},v=function(){r(""),s("")};return(0,y.jsxs)(Z,{onSubmit:function(n){var e;n.preventDefault(),e={name:t,number:o},u.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?f().Notify.warning("".concat(e.name," is already in contacts! ")):h((0,p.je)(e)),v()},children:[(0,y.jsxs)(b,{children:["Name",(0,y.jsx)(j,{onChange:m,placeholder:"Ann Brown",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(b,{children:["Number",(0,y.jsx)(g,{onChange:m,placeholder:"+380661234567",type:"tel",name:"phone",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(w,{type:"submit",children:"Add contact"})]})},z=v.Z.li(C||(C=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: space-between;\n"]))),D=v.Z.button(k||(k=(0,m.Z)(["\n  padding: 5px 5px;\n  border-radius: 3px;\n  text-transform: capitalize;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #45a049;\n  }\n"]))),I=v.Z.h3(A||(A=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  text-shadow: #fc0 1px 0 10px;\n"]))),N=function(n){var e=n.message;return(0,y.jsx)(I,{children:e})};var T,F,S,q=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.hF);return e.length>0?(0,y.jsx)("div",{children:(0,y.jsx)("ul",{children:e.map((function(e){return(0,y.jsxs)(z,{children:[(0,y.jsxs)("p",{children:[e.name,": ",e.number]}),(0,y.jsx)(D,{type:"button",onClick:function(){return t=e.id,void n((0,p.xX)(t));var t},children:"Delete"})]},e.id)}))})}):(0,y.jsx)(N,{message:"There is no any contacts"})},B=v.Z.label(T||(T=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),E=v.Z.input(F||(F=(0,m.Z)(["\n  max-width: 160px;\n  margin-top: 12px;\n"]))),L=t(1728),V=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.AD);return(0,y.jsx)("div",{children:(0,y.jsxs)(B,{children:["Find contacts by name",(0,y.jsx)(E,{type:"text",value:e,onChange:function(e){n((0,L.T)(e.currentTarget.value))}})]})})},J=v.Z.div(S||(S=(0,m.Z)(["\n  margin: 30px auto;\n  border: black 2px solid;\n  border-radius: 5%;\n  padding: 15px;\n\n  width: 700px;\n"])));var M=function(){return(0,y.jsxs)(J,{children:[(0,y.jsx)(_,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(V,{}),(0,y.jsx)(q,{})]})},P=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.xU);return(0,c.useEffect)((function(){n(p.VC)}),[n]),e?(0,y.jsx)(u.Z,{}):(0,y.jsx)(M,{})}},854:function(n,e,t){var r=t(6286),a=t(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}}}]);
//# sourceMappingURL=301.d6a911b9.chunk.js.map