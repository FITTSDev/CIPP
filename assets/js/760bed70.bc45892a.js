"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[8405],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"code",title:"Contributing to the Code",description:"What you'll need to help develop the CIPP React frontend.",slug:"/contributing/code"},s=void 0,u={unversionedId:"contributing/code",id:"contributing/code",title:"Contributing to the Code",description:"What you'll need to help develop the CIPP React frontend.",source:"@site/docs/dev/contributing/code.md",sourceDirName:"contributing",slug:"/contributing/code",permalink:"/docs/dev/contributing/code",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/dev/contributing/code.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644830324,formattedLastUpdatedAt:"14/02/2022",frontMatter:{id:"code",title:"Contributing to the Code",description:"What you'll need to help develop the CIPP React frontend.",slug:"/contributing/code"},sidebar:"devSidebar",previous:{title:"Contributing",permalink:"/docs/dev/contributing"},next:{title:"Contributing to the Documentation",permalink:"/docs/dev/contributing/documentation"}},c=[{value:"Pull Requests",id:"pull-requests",children:[],level:2},{value:"Function Naming Standards",id:"function-naming-standards",children:[],level:2},{value:"Creating two instances",id:"creating-two-instances",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contributions to CIPP are welcome by everyone. There's a couple of things to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Speed and Security are two of the fundamental pillars of CIPP, if it isn't fast, it isn't good and, if it isn't secure, it's not getting merged."),(0,o.kt)("li",{parentName:"ul"},"We try to use native APIs over PowerShell Modules. PowerShell modules tend to slow the entire processing. We currently only have ",(0,o.kt)("inlineCode",{parentName:"li"},"Az.Keyvault")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Az.Accounts")," loaded and prefer to keep it that way."),(0,o.kt)("li",{parentName:"ul"},"You should understand the structure and technologies used in the ",(0,o.kt)("a",{parentName:"li",href:"../../CIPP/structure/"},"CIPP")," and ",(0,o.kt)("a",{parentName:"li",href:"../../CIPP-API/structure/"},"CIPP-API")," repositories."),(0,o.kt)("li",{parentName:"ul"},"Avoid adding your deploy workflow file to your development branch. They cause annoyance when they appear in PRs. If you want to both deploy and develop it's probably better to create two instances of the repository.")),(0,o.kt)("p",null,"When contributing, or planning to contribute, please create an issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues"},"on GitHub"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are fixing a bug, file a complete bug report and assign it to yourself."),(0,o.kt)("li",{parentName:"ul"},'If you are adding a feature, please add "Feature Request" to the title and assign it to yourself.')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Assigning Yourself an Issue")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can assign yourself an issue on GitHub by creating a comment that says ",(0,o.kt)("inlineCode",{parentName:"p"},"I would like to work on this please!"),". You must enter that text verbatim!"))),(0,o.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,"We don't accept PRs or commits to ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". The branch ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," is always the current release version. Both CIPP and CIPP-API have at least two branches ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". Please make any PR to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),", when ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," gets promoted to a release the maintainers PR changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,o.kt)("h2",{id:"function-naming-standards"},"Function Naming Standards"),(0,o.kt)("p",null,"We follow a naming standard, as based on the name a user might get access to an API or not. The current naming standard is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ListBla - Everything that generates a list (users)"),(0,o.kt)("li",{parentName:"ul"},"EditBla - Anything that edits an existing object (edit user)"),(0,o.kt)("li",{parentName:"ul"},"AddBla - Anything that adds an object (add user)"),(0,o.kt)("li",{parentName:"ul"},"RemoveBla - Anything that deletes or removes an object (remove user)"),(0,o.kt)("li",{parentName:"ul"},"ExecBla - Anything that executes an action (send MFA request to user)")),(0,o.kt)("h2",{id:"creating-two-instances"},"Creating two instances"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make a clone of your forked repository."),(0,o.kt)("li",{parentName:"ul"},"Optional: mark this repository as private."),(0,o.kt)("li",{parentName:"ul"},"Add the following GitHub action, this synchronises the repositories every hour:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Pull from master schedule\non:\n  schedule:\n    - cron:  \'0 * * * *\'\njobs:\n  repo-sync:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n      with:\n        persist-credentials: false\n    - name: repo-sync\n      uses: repo-sync/github-sync@v2\n      with:\n        source_repo: "KelvinTegelaar/CIPP"\n        source_branch: "master"\n        destination_branch: "master"\n        github_token: ${{ secrets.PAT }}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to settings of the repository."),(0,o.kt)("li",{parentName:"ul"},"Select add secret."),(0,o.kt)("li",{parentName:"ul"},'Name the secret "PAT"'),(0,o.kt)("li",{parentName:"ul"},"Enter the value: a self created ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"personal access token"),".")))}p.isMDXComponent=!0}}]);