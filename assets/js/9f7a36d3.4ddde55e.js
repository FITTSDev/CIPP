"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9092],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=s(a),d=i,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(y,o(o({ref:t},m),{},{components:a})):n.createElement(y,o({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9400:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n,i=a(7462),l=a(3366),o=(a(7294),a(3905)),r=a(5108),p=["components"],s={id:"mempolicytemplates",title:"MEM (Intune) Policy Templates",description:"Deploy JSON formatted Intune policy templates to your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/mempolicytemplates"},m=void 0,u={unversionedId:"usingcipp/endpointmanagement/mempolicytemplates",id:"usingcipp/endpointmanagement/mempolicytemplates",title:"MEM (Intune) Policy Templates",description:"Deploy JSON formatted Intune policy templates to your Microsoft 365 tenants.",source:"@site/docs/user/usingcipp/endpointmanagement/mempolicytemplates.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/mempolicytemplates",permalink:"/docs/user/usingcipp/endpointmanagement/mempolicytemplates",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/endpointmanagement/mempolicytemplates.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1656329683,formattedLastUpdatedAt:"27/06/2022",frontMatter:{id:"mempolicytemplates",title:"MEM (Intune) Policy Templates",description:"Deploy JSON formatted Intune policy templates to your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/mempolicytemplates"},sidebar:"userSidebar",previous:{title:"Autopilot Status Page",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotstatuspage"},next:{title:"Defender Status",permalink:"/docs/user/usingcipp/endpointmanagement/defender"}},c={},d=[{value:"List Policies",id:"list-policies",level:2},{value:"Details",id:"listmempolicies-details",level:3},{value:"Actions",id:"listmempolicies-actions",level:3},{value:"Known Issues / Limitations",id:"listmempolicies-knownissues",level:3},{value:"Apply Policy",id:"apply-policy",level:2},{value:"Details",id:"applypolicy-details",level:3},{value:"Known Issues / Limitations",id:"applypolicy-knownissues",level:3},{value:"Add Policy Template",id:"add-policy-template",level:2},{value:"Details",id:"addmempolicytemplate-details",level:3},{value:"Known Issues / Limitations",id:"addmempolicytemplate-knownissues",level:3},{value:"List Policy Templates",id:"list-policy-templates",level:2},{value:"Details",id:"listmempolicytemplates-details",level:3},{value:"Actions",id:"listmempolicytemplates-actions",level:3},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:3}],y=(n="NoKnownIssues",function(e){return r.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:d};function g(e){var t=e.components,a=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following four pages in CIPP give you the ability to manage Microsoft Endpoint Manager (MEM):"),(0,o.kt)("h2",{id:"list-policies"},"List Policies"),(0,o.kt)("p",null,"This page lists all the MEM policies on the selected account and provides the ability for you to view the raw JSON of the policy."),(0,o.kt)("h3",{id:"listmempolicies-details"},"Details"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the policy.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Profile Type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of policy.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Created On"),(0,o.kt)("td",{parentName:"tr",align:null},"The creation date of the policy.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Last Modified"),(0,o.kt)("td",{parentName:"tr",align:null},"The date the policy was last modified.")))),(0,o.kt)("h3",{id:"listmempolicies-actions"},"Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit Policy"),(0,o.kt)("li",{parentName:"ul"},"View Policy"),(0,o.kt)("li",{parentName:"ul"},"Delete Policy")),(0,o.kt)("h3",{id:"listmempolicies-knownissues"},"Known Issues / Limitations"),(0,o.kt)("p",null,"If you have any other issues, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"apply-policy"},"Apply Policy"),(0,o.kt)("p",null,"The Apply Policy wizard provides the ability for you to select one or more tenants and add a MEM policy to their MEM portal."),(0,o.kt)("h3",{id:"applypolicy-details"},"Details"),(0,o.kt)("p",null,"The Apply Policy wizard can work in one of two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can select a template from a predefined policy that you have already created."),(0,o.kt)("li",{parentName:"ol"},"You can enter the raw JSON. Please note that information on how to obtain the raw JSON is available in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/user/usingcipp/endpointmanagement/mempolicytemplates/#add-policy-template---detail"},"Add Policy Template documentation"),"]")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"New Policies Only")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Currently you can only apply new policies, applying policies doesn\'t update existing policies even if originally created from this template. To work around this you can apply the policy to "AllTenants" and have it reapplied on a schedule.'))),(0,o.kt)("p",null,"You can then decide whether to assign the policy to all users, all devices or both. You can also just create the policy without applying it."),(0,o.kt)("h3",{id:"applypolicy-knownissues"},"Known Issues / Limitations"),(0,o.kt)("p",null,"No known issues exist for the Apply MEM Policy page. If you have any issues, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-policy-template"},"Add Policy Template"),(0,o.kt)("p",null,"This page provides the ability for you to create a template policy you can deploy to many tenants at the same time, if so required."),(0,o.kt)("h3",{id:"addmempolicytemplate-details"},"Details"),(0,o.kt)("p",null,"To create a policy and get it's raw JSON information you must visit ",(0,o.kt)("a",{parentName:"p",href:"https://endpoint.microsoft.com"},"Microsoft Endpoint Manager"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Devices -> Configuration Profiles")),(0,o.kt)("li",{parentName:"ul"},"Create a new configuration profile"),(0,o.kt)("li",{parentName:"ul"},'Choose "Windows 10 and later" as a platform'),(0,o.kt)("li",{parentName:"ul"},'Choose "Templates" and then select any option.'),(0,o.kt)("li",{parentName:"ul"},"Select all the settings you want, remember that there are both computer policies and user policies."),(0,o.kt)("li",{parentName:"ul"},'When you reach the Review and Create stage, don\'t select the "Create" button but press F12 on your keyboard to open the developer tools.'),(0,o.kt)("li",{parentName:"ul"},'Now select "Create" and look for the "UpdateDefiniationValues" post request for administrative templates, or any other POST request for other templates.'),(0,o.kt)("li",{parentName:"ul"},'Select "Headers" and scroll down to "request payload" this is the raw JSON payload. To copy it, select on "view source" and copy the entire text string.'),(0,o.kt)("li",{parentName:"ul"},"You can now use CIPP to deploy this policy to all tenants.")),(0,o.kt)("h3",{id:"addmempolicytemplate-knownissues"},"Known Issues / Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All templates are currently supported, if you don't see your template type in the list, you must select Custom Configuration"),(0,o.kt)("li",{parentName:"ul"},"When using Settings Catalog or Custom Configuration, the Display Name and Description come from the raw JSON file.")),(0,o.kt)("p",null,"If you have any other issues, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"list-policy-templates"},"List Policy Templates"),(0,o.kt)("p",null,"This page gives you the ability to view all configured templates, in addition to viewing the raw JSON and the type of policy."),(0,o.kt)("h3",{id:"listmempolicytemplates-details"},"Details"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the template.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"The description for the template.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Type"),(0,o.kt)("td",{parentName:"tr",align:null},"The template type, for example Catalog or Device.")))),(0,o.kt)("h3",{id:"listmempolicytemplates-actions"},"Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View Template"),(0,o.kt)("li",{parentName:"ul"},"Delete Template")),(0,o.kt)("h3",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,o.kt)(y,{mdxType:"NoKnownIssues"}))}g.isMDXComponent=!0}}]);