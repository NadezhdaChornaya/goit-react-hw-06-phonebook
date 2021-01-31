(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{34:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),o=e(7),i=e.n(o),c=(e(34),e(19)),s=e(3),l=e(9),u=e(26),b=e(43),x=e(12),d=e(4),p=e(2);function m(){var n=Object(d.a)(["\nmargin-bottom: 20px;\n.label{\n    font-size: 20px;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 5px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n    \n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n.buttonWrapper{\n   display:flex;\n   justify-content:flex-end;\n}\n.button{\n    \t\n   width: 25%;\n   padding: 5px 10px; \n   font-size: 20px;\n   border-radius: 5px;\n   border-color: #eeedfa;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n       background-color:#3CB371;\n       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n\n"]);return m=function(){return n},n}var f=p.b.form(m()),j=function(n){var t=n.addContact,e=Object(r.useState)({name:"",number:""}),o=Object(l.a)(e,2),i=o[0],c=o[1],u=function(n){var t=n.target,e=t.name,a=t.value;c((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(x.a)({},e,a))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(f,{className:"wrapper",onSubmit:function(n){n.preventDefault(),t(Object(s.a)({},i)),c({name:"",number:""})},children:[Object(a.jsxs)("label",{className:"label",children:["Name",Object(a.jsx)("input",{className:"input",type:"text",name:"name",value:i.name,onChange:u})]}),Object(a.jsxs)("label",{className:"label",children:["Number",Object(a.jsx)("input",{className:"input",type:"tel",name:"number",value:i.number,onChange:u})]}),Object(a.jsx)("div",{className:"buttonWrapper",children:Object(a.jsx)("button",{className:"button",type:"submit",children:"Add contact"})})]})})},O=e(44);function h(){var n=Object(d.a)(["\n.contactList{\n  list-style: none;\n}\n\n.itemContact{\n    display:flex;\n    justify-content: space-between;\n    padding: 5px 10px;\n    font-size: 20px;\n    background-color:#ffffff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n    border: 1px solid #afaeb0;\n    border-radius: 5px;\n   \n     &:not(:last-child) {\n      margin-bottom: 10px;}\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n\n}\n.button{\n   width: 25%;\n   padding: 5px 10px; \n   \t\n   font-size: 20px;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n\n   border-radius: 5px;\n   border-color: #eeedfa;\n\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n       background-color:#3CB371;\n       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n\n"]);return h=function(){return n},n}var g=p.b.div(h());function v(){var n=Object(d.a)(["\n&:enter{transform: translateX(-200%);}\n&:enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n&:exit{transform: transform: translateX(0);}\n&:exit-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"]);return v=function(){return n},n}var w=e(24).a.li.attrs({mountOnEnter:!0,unmountOnExit:!0,timeout:250})(v()),F=function(n){var t=n.contacts,e=n.deleteContact;return Object(a.jsx)(g,{children:Object(a.jsx)(O.a,{component:"ul",className:"contactList wrapper",children:t.map((function(n){var t=n.id,r=n.name,o=n.number;return Object(a.jsxs)(w,{timeout:250,className:"itemContact",children:["".concat(r,":  ").concat(o),Object(a.jsx)("button",{className:"button",type:"button","data-id":t,onClick:e,children:"Delete"})]},t)}))})})};function S(){var n=Object(d.a)(["\nmargin-bottom: 20px;\n\n.titleFilter{\nfont-size: 25px;\ncolor:#2F4F4F;\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 20px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n\n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n"]);return S=function(){return n},n}var N=p.b.div(S()),C=function(n){var t=n.value,e=n.onChangeFilter;return Object(a.jsxs)(N,{className:"wrapper",children:[Object(a.jsx)("h3",{className:"titleFilter",children:"Find contacts by name"}),Object(a.jsx)("input",{name:"filter",type:"text",className:"input",placeholder:"Search...",value:t,onChange:e})]})};function y(){var n=Object(d.a)(["\n.mainTitle,.title{\ntext-align: center;\ncolor:#3b2dd6;\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n.mainTitle{\n    margin-bottom:20px;  \n    font-size: 40px;\n}\n.title{\n    margin-bottom:10px;\n    font-size: 30px;   \n}\n\n.titleSlide-appear{\n    transform: translateY(-100%);\n}\n.titleSlide-appear-active{\n    transform: translateY(0);\n    transition:transform 500ms linear;\n}\n\n.filterSlide-enter{\ntransform: scale(0);\n    \n}\n.filterSlide-enter-active{\n   transform: scale(1);\n  transition: transform 500ms ease-in-out;\n}\n.filterSlide-exit{\n    transform: scale(1);\n}\n.filterSlide-exit-active{\n    transform: scale(0);\n  transition: transform 500ms ease-in-out;\n}\n\n.alertSlide-enter{\ntransform: translateX(200%);\n}\n.alertSlide-enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n.alertSlide-exit{\n    transform: translateX(0);\n}\n.alertSlide-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"]);return y=function(){return n},n}var k=p.b.div(y());function z(){var n=Object(d.a)(["\nwidth: 50vw;\nmargin:0 auto;\npadding: 20px;\nbackground-color: #f55d67;\nborder: 1px solid #afaeb0;\nborder-radius: 5px;\n.alertText{\n    text-align: center;\n    font-size: 30px;\n    color: #ffffff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n"]);return z=function(){return n},n}var E=p.b.div(z()),X=function(n){var t=n.text;return Object(a.jsx)(E,{children:Object(a.jsxs)("p",{className:"alertText",children:["\u2757",t,"\u2757"]})})},T=function(){var n=Object(r.useState)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""}),t=Object(l.a)(n,2),e=t[0],o=t[1],i=Object(r.useState)(!1),x=Object(l.a)(i,2),d=x[0],p=x[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),O=f[0],h=f[1];Object(r.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e.contacts))}),[e.contacts]),Object(r.useEffect)((function(){var n=localStorage.getItem("contacts");n&&o((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:Object(c.a)(JSON.parse(n))})}))}),[]);var g=function(n){h(n),p(!0),setTimeout((function(){p(!1)}),2e3),setTimeout((function(){h("")}),2700)};return Object(a.jsxs)(k,{children:[Object(a.jsx)(u.a,{in:d,classNames:"alertSlide",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(X,{text:O})}),Object(a.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"mainTitle",children:"Phonebook"})}),Object(a.jsx)(j,{addContact:function(n){var t={id:Object(b.a)(),name:n.name,number:n.number};n.name.length?n.number.length?e.contacts.some((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?g("".concat(n.name," is already in contacts.")):o((function(n){return Object(s.a)(Object(s.a)({},n),{},{contacts:[].concat(Object(c.a)(n.contacts),[t])})})):g("Please, enter your number"):g("Please, enter your name")}}),Object(a.jsx)("h2",{className:"title",children:"Contacts"}),Object(a.jsx)(u.a,{in:e.contacts.length>1,classNames:"filterSlide",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(C,{value:e.filter,onChangeFilter:function(n){o((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:n.target.value})}))}})}),e.contacts.length>0&&Object(a.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(F,{contacts:function(){var n=e.contacts,t=e.filter;return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}(),deleteContact:function(n){var t=n.target.dataset.id;o((function(n){return Object(s.a)(Object(s.a)({},n),{},{contacts:n.contacts.filter((function(n){return n.id!==t}))})}))}})})]})};i.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2692aa3a.chunk.js.map