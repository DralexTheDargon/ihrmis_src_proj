(this.webpackJsonphrmis=this.webpackJsonphrmis||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var c=s(2),i=s.n(c),n=s(24),a=s.n(n),l=(s(30),s(8)),r=s(9),j=s(11),o=s(10),d=s(5),b=s.p+"static/media/logo.450b2bab.png",O=(s(31),s(1)),h=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).addClassName="notification-badge "+c.props.className,c.state={},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)("span",{className:this.addClassName,children:this.props.value})}}]),s}(c.Component);h.defaultProps={};var u=h,x=(s(33),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).onClickOptionEvent=function(){"none"===c.state.optionDisplay?c.setState({optionDisplay:"block"}):c.setState({optionDisplay:"none"})},c.onClickNotificationEvent=function(){"none"===c.state.notificationDisplay?c.setState({notificationDisplay:"block"}):c.setState({notificationDisplay:"none"})},c.onClickHelpEvent=function(){"none"===c.state.helpDisplay?c.setState({helpDisplay:"block"}):c.setState({helpDisplay:"none"})},c.state={optionDisplay:"none",notificationDisplay:"none",helpDisplay:"none"},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"navbar-div",children:Object(O.jsxs)("nav",{children:[Object(O.jsxs)("h1",{children:[Object(O.jsx)("span",{className:"navbar-span-1 margin-right-1",children:"HRMiS"}),Object(O.jsx)("span",{className:"navbar-span-2",children:Object(O.jsx)("p",{children:"\xa9 2021 DOST"})}),Object(O.jsx)("span",{className:"navbar-span-3",children:Object(O.jsx)("p",{children:"Monday 04 January 2021 | 08:00:00 AM"})})]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{className:"margin-right-1 notification",children:[Object(O.jsx)(u,{className:"add-style-badge",value:1}),Object(O.jsx)("span",{children:Object(O.jsx)(d.c,{size:"20px"})})]}),Object(O.jsxs)("li",{className:"margin-right-1 notification",children:[Object(O.jsx)(u,{className:"add-style-badge",value:1}),Object(O.jsx)("span",{children:Object(O.jsx)(d.g,{size:"20px"})})]}),Object(O.jsxs)("li",{onClick:this.onClickOptionEvent,className:"user-dropdown",children:[Object(O.jsx)("span",{className:"user-avatar",children:Object(O.jsx)("img",{src:b,width:"20",height:"20",alt:"avatar"})}),Object(O.jsx)("span",{className:"user-name-display",children:"Juan Dela Cruz "}),Object(O.jsxs)("span",{className:"user-drop-arrow",children:[" ",Object(O.jsx)(d.a,{size:"12px"})]}),Object(O.jsxs)("ul",{className:"user-drop-option",style:{display:this.state.optionDisplay},children:[Object(O.jsx)("span",{className:"user-arrow-up",children:Object(O.jsx)(d.b,{size:"15px"})}),Object(O.jsx)("li",{className:"margin-top-1",children:Object(O.jsx)("a",{href:"",children:"HR Module"})}),Object(O.jsx)("li",{className:"margin-bottom-1",children:Object(O.jsx)("a",{href:"",children:"Change Password"})}),Object(O.jsx)("li",{className:"margin-bottom-1",children:Object(O.jsx)("a",{href:"",children:"LOGOUT"})})]})]})]})]})})}}]),s}(c.Component)),p=s(14),m=[{title:"Dashboard",id:1,icon:Object(O.jsx)(d.f,{size:"20"}),more:null,link:"/"},{title:"Request",id:2,icon:Object(O.jsx)(d.d,{size:"20"}),more:null,link:"/request"},{title:"Plantilla",id:3,icon:Object(O.jsx)(d.h,{size:"20"}),more:[{id:1,title:"Employee"},{id:2,title:"Plantilla Items"}],link:"/plantilla/plantilla-items"},{title:"Recruitment",id:4,icon:Object(O.jsx)(d.e,{size:"20"}),more:null,link:"/recruitment"},{title:"Compensation",id:5,icon:Object(O.jsx)(d.i,{size:"20"}),more:null,link:"/compensation"}],v=(s(34),s(18));var N=function(){var e=Object(c.useState)(1),t=Object(p.a)(e,2),s=t[0],n=t[1],a=function(e){n(e)};return Object(O.jsx)(i.a.Fragment,{children:Object(O.jsx)("div",{className:"sidebar-menu",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"margin-bottom-2 parag-link",children:Object(O.jsxs)("p",{children:["Human Resource Management",Object(O.jsx)("br",{}),"Information System"]})}),m.map((function(e){return null!==e.more?Object(O.jsx)(v.b,{className:"router-link",to:e.link,children:Object(O.jsxs)("li",{onClick:function(){return a(e.id)},children:[Object(O.jsxs)("div",{className:s===e.id?"padding-1 item-list item-list-activate":"padding-1 item-list",children:[Object(O.jsx)("span",{className:"margin-left-1 margin-right-1",children:e.icon}),Object(O.jsx)("span",{children:e.title})]},e.id),Object(O.jsx)("div",{className:s===e.id?"sub-menu-list":"sub-menu-list-close",children:Object(O.jsx)("ul",{children:e.more.map((function(e){return Object(O.jsx)("li",{className:"padding-1",children:e.title},e.id)}))})})]})}):Object(O.jsx)(v.b,{className:"router-link",to:e.link,children:Object(O.jsxs)("li",{onClick:function(){return a(e.id)},className:s===e.id?"padding-1 item-list item-list-activate":"padding-1 item-list",children:[Object(O.jsx)("span",{className:"margin-left-1 margin-right-1",children:e.icon}),Object(O.jsx)("span",{children:e.title})]},e.id)})}))]})})})},f=(s(40),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)(i.a.Fragment,{children:Object(O.jsx)("ul",{className:"breadcrumb",children:this.props.list.map((function(e){return"#"===e.link?Object(O.jsx)("li",{children:e.name},e.name):Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.link,children:e.name})},e.name)}))})})}}]),s}(c.Component)),S=[{name:"Home",link:"./"},{name:"Plantilla",link:"./"},{name:"Plantilla Items",link:"#"}],g=(s(41),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).addClassName="custom-input "+c.props.className,c.state={},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"input-div",children:Object(O.jsx)("input",{className:this.addClassName,placeholder:""})})}}]),s}(c.Component)),C=[{value:"0",title:"All"},{value:"1",title:"Filled"},{value:"2",title:"Vacant"},{value:"3",title:"CE Level"},{value:"4",title:"PS Level"},{value:"5",title:"PN Level"},{value:"6",title:"SS Level"},{value:"7",title:"SN Level"}],E=s(13),y=s(16),A=[{id:1,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:2,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:3,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:4,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:5,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:6,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:7,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"},{id:8,itemNo:"OSEC-DOSTTB-EXA3-1-2019",position:"Executive Assistant III",office:"OSEC-A",status:"Contructual"}];s(42);var I=function(){var e=Object(c.useState)(1),t=Object(p.a)(e,2),s=t[0],i=t[1],n=function(e){i(e)};return Object(O.jsxs)("div",{className:"plantilla-view",children:[Object(O.jsx)("div",{className:"container-plantilla",children:Object(O.jsx)(f,{list:S,className:""})}),Object(O.jsxs)("div",{className:"tab-button",children:[Object(O.jsx)("button",{onClick:function(){return n(1)},className:1===s?"tab-tap tab-tap-activate":"tab-tap",children:"Regular"}),Object(O.jsx)(u,{className:"tab-badge-add-style",value:"9"}),Object(O.jsx)("button",{onClick:function(){return n(2)},className:2===s?"tab-tap tab-tap-activate margin-left-1":"tab-tap margin-left-1",children:"Non-Regular"}),Object(O.jsx)("hr",{className:"solid"})]}),Object(O.jsxs)("div",{className:1===s?"current-tab":"show-none",children:[Object(O.jsxs)("div",{className:"selector-buttons",children:[Object(O.jsxs)("div",{className:"selector-container",children:[Object(O.jsx)("span",{className:"selector-span-1",children:Object(O.jsxs)("button",{children:[Object(O.jsx)(y.a,{size:"18"}),Object(O.jsx)("span",{children:"Plantilla Item"})]})}),"                            ",Object(O.jsx)("span",{className:"margin-left-1 selector-span-1",children:Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Filter By"}),C.map((function(e){return Object(O.jsx)("option",{className:"options",defaultValue:e.value,children:e.title},e.value)}))]})})]}),Object(O.jsxs)("div",{className:"selector-container",children:[Object(O.jsx)("span",{className:"margin-right-1 selector-search-label",children:Object(O.jsx)("label",{children:"Search"})}),Object(O.jsx)("span",{children:Object(O.jsx)(g,{})})]})]}),Object(O.jsxs)("div",{className:"plantilla-table",children:[Object(O.jsx)("div",{className:"scrollable-div-table",children:Object(O.jsxs)("table",{id:"custom-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"fixed-label-table",children:[Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Item No."]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Position"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Office"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Status"]})]})}),Object(O.jsx)("tbody",{children:A.map((function(e){return Object(O.jsxs)("tr",{className:"trClass",children:[Object(O.jsx)("td",{children:e.itemNo}),Object(O.jsx)("td",{children:e.position}),Object(O.jsx)("td",{children:e.office}),Object(O.jsxs)("td",{className:"column-option",children:[Object(O.jsxs)("div",{className:"inline-div-td-1",children:[e.status,Object(O.jsx)("br",{}),e.status.score]}),Object(O.jsx)("div",{className:"inline-div-td-2",children:Object(O.jsx)("button",{children:Object(O.jsx)(y.b,{size:"15"})})})]})]},e.id)}))})]})}),Object(O.jsxs)("p",{className:"data-entry",children:["Total of ",A.length," Entries"]})]})]}),Object(O.jsx)("div",{className:2===s?"current-tab":"show-none",children:Object(O.jsx)("h1",{className:"margin-left-2",children:"Employee"})})]})},T=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)(I,{})}}]),s}(c.Component),D=(s(43),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={},c}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("span",{className:"margin-right-1",children:Object(O.jsx)("img",{src:b,width:"20",height:"20",alt:"dost logo"})}),Object(O.jsx)("p",{children:"\xa9 2020 DEPARTMENT OF SCIENCE AND TECHNOLOGY. ALL RIGHT RESERVE"})]})}}]),s}(c.Component)),P=s(3);s(44);var k=function(e){return Object(O.jsxs)("div",{className:"input-group-container",children:[Object(O.jsx)("label",{className:"input-group-label",children:e.label}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("span",{className:"input-group-addon",children:e.addonSign})]})]})},L=(s(45),{jobDescription:{positionTitle:"Chief Science Specialist",platillaItemNo:"OSEC-DOSTB-CSRS-3-2009",officeUnit:"Planning and Evaluation Service Information Technology Division",placeOfAssignment:"Information Technology Division",reportsTo:"Directore IV",salaryGrade:"22"},cscQStandatard:{eligibility:"CSC Professional / Second Level Eligibility",education:"Masters degree relevant to the job or Certificate in Leadership and Management from the Civil Service Commission",experience:"Four (4) years of Management and supervisory experience",training:"Forty (40) hours of supervisory/management leadership and development Intervention"}});var R=function(e){var t=Object(c.useState)(L),s=Object(p.a)(t,2),i=s[0];return s[1],Object(O.jsx)("div",{className:"dashboard-container",children:Object(O.jsxs)("div",{className:"jvs-crw-container",children:[Object(O.jsxs)("div",{className:"form-header",children:[Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:b,width:"50px",height:"50px",alt:"dost-logo"}),Object(O.jsx)("h3",{children:"Department of Science and Technology"}),Object(O.jsx)("p",{children:"General Santos Avenue, Bicutan Taguig City"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"JOB VACANCY SPECIFICATION & CRITERIA RATING FORM"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"version-dropdown",children:[Object(O.jsx)("span",{children:"Version"}),Object(O.jsx)("span",{className:"margin-left-1",children:Object(O.jsxs)("select",{className:"select-version",children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Select version"}),Object(O.jsx)("option",{value:"1",children:"1"}),Object(O.jsx)("option",{value:"2",children:"2"})]})})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"jvs-crw-main-table",children:Object(O.jsxs)("table",{id:"custom-table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"main-headers",children:Object(O.jsx)("th",{style:{textAlign:"center"},colSpan:"4",children:"JOB POSITION"})})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{className:".row-percent-75",colSpan:"2",children:"POSITION TITLE"}),Object(O.jsx)("th",{className:".row-percent-25",colSpan:"2",children:"PLANTILLA ITEM NO."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"row-percent-50",colSpan:"2",children:i.jobDescription.positionTitle}),Object(O.jsx)("td",{colSpan:"2",children:i.jobDescription.platillaItemNo})]}),Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{className:".row-percent-75",colSpan:"2",children:"OFFICE/UNIT"}),Object(O.jsx)("th",{className:".row-percent-75",colSpan:"2",children:"PLACE OF ASSIGNMENT"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:".row-percent-75",colSpan:"2",children:i.jobDescription.officeUnit}),Object(O.jsx)("td",{className:".row-percent-75",colSpan:"2",children:i.jobDescription.placeOfAssignment})]}),Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{colSpan:"2",children:"REPORTS TO"}),Object(O.jsx)("th",{colSpan:"2",children:"SALARY GRADE"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{colSpan:"2",children:i.jobDescription.reportsTo}),Object(O.jsx)("td",{colSpan:"2",children:i.jobDescription.salaryGrade})]})]}),Object(O.jsx)("tr",{className:"main-headers",children:Object(O.jsx)("th",{style:{textAlign:"center"},colSpan:"4",children:"CSC QUALIFICATION STANDARDS"})}),Object(O.jsx)("tr",{className:"secondary-headers",children:Object(O.jsx)("th",{colSpan:"4",children:"ELIGIBILITY"})}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"4",children:i.cscQStandatard.eligibility})}),Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{colSpan:"3",children:"EDUCATION"}),Object(O.jsx)("td",{className:"special-row-column",colSpan:"1",rowSpan:"2",children:Object(O.jsx)(k,{label:"Min. Factor Weight",addonSign:"%"})})]}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"3",children:i.cscQStandatard.education})}),Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{colSpan:"3",children:"EXPERIENCE"}),Object(O.jsx)("td",{className:"special-row-column",colSpan:"1",rowSpan:"2",children:Object(O.jsx)(k,{label:"Min. Factor Weight",addonSign:"%"})})]}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"3",children:i.cscQStandatard.experience})}),Object(O.jsxs)("tr",{className:"secondary-headers",children:[Object(O.jsx)("th",{colSpan:"3",children:"TRAINING"}),Object(O.jsx)("td",{className:"special-row-column",colSpan:"1",rowSpan:"2",children:Object(O.jsx)(k,{label:"Min. Factor Weight",addonSign:"%"})})]}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"3",children:i.cscQStandatard.training})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"jvs-crw-main-table",children:Object(O.jsx)("h3",{children:"MINIMUM QUALIFICATION STANDARDS FOR JOB COMPETENCY"})})]})})};var w=function(e){return Object(O.jsx)("h1",{className:"margin-left-2 margin-top-2",children:"Request"})};var F=function(e){return Object(O.jsx)("h1",{className:"margin-left-2 margin-top-2",children:"Compensation"})},M=[{value:"0",title:"ALL"},{value:"1",title:"Filled"},{value:"2",title:"Vacant"},{value:"3",title:"CE Level"},{value:"4",title:"PS Level"},{value:"5",title:"PN Level"},{value:"6",title:"SS Level"},{value:"7",title:"SN Level"}],z=[{value:"0",title:"ALL"},{value:"1",title:"IT OFFICER I"},{value:"2",title:"IT OFFICER II"},{value:"3",title:"PROJECT MANAGER I"},{value:"4",title:"PROJECT MANAGER V"}],B=[{name:"Home",link:"./"},{name:"Recruitment",link:"#"}],V=[{id:1,applicant:"Ambers, Liza C.",profile:{info:"35 years old: Single",email:"lcambers@gmail.com",cellNo:"0919 123 4567"},qualification:"PhD Science Education major in Physics: Magna Cum laude: 10 years experience: 40 hours trainings: RA 1080 LET: PO 907",positionApplied:{position:"Project Development Office V",posAbbrv:"PES PCMD"},status:{record:"For user assesment:",score:"70 pts Pre-employment exam"}},{id:2,applicant:"Ambers, Liza C.",profile:{info:"35 years old: Single",email:"lcambers@gmail.com",cellNo:"0919 123 4567"},qualification:"PhD Science Education major in Physics: Magna Cum laude: 10 years experience: 40 hours trainings: RA 1080 LET: PO 907",positionApplied:{position:"Project Development Office V",posAbbrv:"PES PCMD"},status:{record:"For user assesment:",score:"70 pts Pre-employment exam"}},{id:3,applicant:"Ambers, Liza C.",profile:{info:"35 years old: Single",email:"lcambers@gmail.com",cellNo:"0919 123 4567"},qualification:"PhD Science Education major in Physics: Magna Cum laude: 10 years experience: 40 hours trainings: RA 1080 LET: PO 907",positionApplied:{position:"Project Development Office V",posAbbrv:"PES PCMD"},status:{record:"For user assesment:",score:"70 pts Pre-employment exam"}},{id:4,applicant:"Ambers, Liza C.",profile:{info:"35 years old: Single",email:"lcambers@gmail.com",cellNo:"0919 123 4567"},qualification:"PhD Science Education major in Physics: Magna Cum laude: 10 years experience: 40 hours trainings: RA 1080 LET: PO 907",positionApplied:{position:"Project Development Office V",posAbbrv:"PES PCMD"},status:{record:"For user assesment:",score:"70 pts Pre-employment exam"}}];s(46),s(47);function G(e){return Object(O.jsxs)("ul",{className:"ul-dropdown-container",style:{display:e.display},children:[Object(O.jsx)("div",{className:"ul-menu-item-arrow",children:Object(O.jsx)(d.b,{size:"15px"})}),Object(O.jsx)("li",{className:"ul-menu-item",children:Object(O.jsx)("a",{href:e.link,children:"View"})}),Object(O.jsx)("li",{className:"ul-menu-item",children:Object(O.jsx)("a",{href:e.link,children:"Disqualified"})}),Object(O.jsx)("li",{className:"ul-menu-item",children:Object(O.jsx)("a",{href:e.link,children:"Delete"})})]})}G.defaultProps={display:"none",link:"#"};var q=G;var J=function(e){var t=Object(c.useState)(1),s=Object(p.a)(t,2),i=s[0],n=s[1],a=function(e){n(e)},l=Object(c.useState)(0),r=Object(p.a)(l,2),j=r[0],o=r[1];return Object(O.jsxs)("div",{className:"plantilla-view",children:[Object(O.jsx)("div",{className:"container-plantilla",children:Object(O.jsx)(f,{list:B,className:""})}),Object(O.jsxs)("div",{className:"tab-button",children:[Object(O.jsx)("button",{onClick:function(){return a(1)},className:1===i?"tab-tap tab-tap-activate":"tab-tap",children:"Qualified"}),Object(O.jsx)(u,{className:"tab-badge-add-style",value:"1"}),Object(O.jsx)("button",{onClick:function(){return a(2)},className:2===i?"tab-tap tab-tap-activate margin-left-1":"tab-tap margin-left-1",children:"Disqualified"}),Object(O.jsx)("hr",{className:"solid"})]}),Object(O.jsxs)("div",{className:1===i?"current-tab":"show-none",children:[Object(O.jsxs)("div",{className:"selector-buttons",children:[Object(O.jsxs)("div",{className:"selector-container",children:[Object(O.jsx)("span",{className:"selector-span-1",children:Object(O.jsxs)("button",{children:[Object(O.jsx)(y.a,{size:"18"}),Object(O.jsx)("span",{children:"Applicant"})]})}),Object(O.jsx)("span",{className:"margin-left-1 selector-span-1",children:Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Vacant Position"}),z.map((function(e){return Object(O.jsx)("option",{className:"options",defaultValue:e.value,children:e.title},e.value)}))]})}),Object(O.jsx)("span",{className:"margin-left-1 selector-span-1",children:Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Filter By"}),M.map((function(e){return Object(O.jsx)("option",{className:"options",defaultValue:e.value,children:e.title},e.value)}))]})})]}),Object(O.jsxs)("div",{className:"selector-container",children:[Object(O.jsx)("span",{className:"margin-right-1 selector-search-label",children:Object(O.jsx)("label",{children:"Search"})}),Object(O.jsx)("span",{children:Object(O.jsx)(g,{})})]})]}),Object(O.jsxs)("div",{className:"plantilla-table",children:[Object(O.jsx)("div",{className:"scrollable-div-table",children:Object(O.jsxs)("table",{id:"custom-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"fixed-label-table",children:[Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Name"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Profile"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Qualifications"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Position applied"]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("button",{children:Object(O.jsx)(E.a,{})})," Status"]})]})}),Object(O.jsx)("tbody",{children:V.map((function(e){return Object(O.jsxs)("tr",{className:"trClass",children:[Object(O.jsx)("td",{children:e.applicant}),Object(O.jsxs)("td",{children:[e.profile.info,Object(O.jsx)("br",{}),e.profile.email,Object(O.jsx)("br",{}),e.profile.cellNo]}),Object(O.jsx)("td",{style:{width:"250px"},children:e.qualification}),Object(O.jsxs)("td",{children:[e.positionApplied.position,Object(O.jsx)("br",{}),e.positionApplied.posAbbrv]}),Object(O.jsxs)("td",{className:"column-option",children:[Object(O.jsxs)("div",{className:"inline-div-td-1",children:[e.status.record,Object(O.jsx)("br",{}),e.status.score]}),Object(O.jsxs)("div",{className:"inline-div-td-2",children:[Object(O.jsx)("button",{onClick:function(){return t=e.id,void o(t);var t},children:Object(O.jsx)(y.b,{size:"15"})}),Object(O.jsx)(q,{display:(e.id,"none")}),false===j===e.id]})]})]},e.id)}))})]})}),Object(O.jsxs)("p",{className:"data-entry",children:["Total of ",V.length," Entries"]})]})]})]})};s(48),s(49);var Q=function(){return Object(O.jsx)(v.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{children:Object(O.jsx)(N,{})}),Object(O.jsx)("div",{className:"positioning",children:Object(O.jsxs)(P.c,{children:[Object(O.jsx)(P.a,{exact:!0,path:"/",children:Object(O.jsx)(R,{})}),Object(O.jsx)(P.a,{exact:!0,path:"/build/",children:Object(O.jsx)(R,{})}),Object(O.jsx)(P.a,{path:"/request",children:Object(O.jsx)(w,{})}),Object(O.jsx)(P.a,{path:"/plantilla",children:Object(O.jsx)(T,{})}),Object(O.jsx)(P.a,{path:"/compensation",children:Object(O.jsx)(F,{})}),Object(O.jsx)(P.a,{path:"/recruitment",children:Object(O.jsx)(J,{})})]})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(D,{})})]})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.dfd3a850.chunk.js.map