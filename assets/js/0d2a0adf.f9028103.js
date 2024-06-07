"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4120],{2396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=t(1527),a=t(5696),l=t(2264),i=t(7123),s=t(9988);const o={sidebar_position:1},c="Quick Start",u={id:"quick-start",title:"Quick Start",description:"Farm needs Node 16.19.0 and above.",source:"@site/versioned_docs/version-0.x/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/0.x/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/quick-start.mdx",tags:[],version:"0.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Why Farm?",permalink:"/docs/0.x/why-farm"},next:{title:"Using Plugins",permalink:"/docs/0.x/using-plugins"}},d={},h=[{value:"Online experience",id:"online-experience",level:2},{value:"Create a Farm Project",id:"create-a-farm-project",level:2},{value:"2. Start the Project",id:"2-start-the-project",level:2},{value:"3. Configuring the Project",id:"3-configuring-the-project",level:2},{value:"4. Building the project",id:"4-building-the-project",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Farm needs ",(0,r.jsx)(n.strong,{children:"Node 16.19.0 and above"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"online-experience",children:"Online experience"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://codesandbox.io/p/github/ErKeLost/react/main",children:(0,r.jsx)(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Farm"})})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-farm-project",children:"Create a Farm Project"}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"npm",label:"npm",children:(0,r.jsx)(l.Z,{children:"npm create farm@latest"})}),(0,r.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(l.Z,{children:"yarn create farm"})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(l.Z,{children:"pnpm create farm"})})]})}),"\n",(0,r.jsx)(n.admonition,{title:"Then follow the prompts!",type:"note",children:(0,r.jsx)(n.p,{children:"You can also directly specify the project name and the template you want to use via additional command line options:"})}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"npm 6.x",label:"npm 6.x",children:(0,r.jsx)(l.Z,{children:"npm create farm@latest my-vue-app --template react"})}),(0,r.jsx)(s.Z,{value:"npm 7+",label:"npm 7+",children:(0,r.jsx)(l.Z,{children:"npm create farm@latest my-vue-app -- --template vue"})}),(0,r.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(l.Z,{children:"yarn create farm my-vue-app --template react"})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(l.Z,{children:"pnpm create farm my-vue-app --template vue"})})]})}),"\n",(0,r.jsx)(n.h2,{id:"2-start-the-project",children:"2. Start the Project"}),"\n",(0,r.jsx)(n.p,{children:"Choose the package manager you like, then the dependencies will be installed automatically.\nThen, start the project:"}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{value:"npm",label:"npm",children:(0,r.jsx)(l.Z,{children:"cd farm-project && npm start"})}),(0,r.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(l.Z,{children:"cd farm-project && yarn start"})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(l.Z,{children:"cd farm-project && pnpm start"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The project will start at ",(0,r.jsx)(n.code,{children:"http://localhost:9000"})," by default."]}),"\n",(0,r.jsx)(n.h2,{id:"3-configuring-the-project",children:"3. Configuring the Project"}),"\n",(0,r.jsxs)(n.p,{children:["The project is configured by ",(0,r.jsx)(n.code,{children:"farm.config.ts/js/mjs"})," file in the root directory of the project."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import { defineConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  // Options related to the compilation\n  compilation: {\n    input: {\n      // can be a relative path or an absolute path\n      index: "./index.html",\n    },\n    output: {\n      path: "./build",\n      publicPath: "/",\n    },\n    // ...\n  },\n  // Options related to the dev server\n  server: {\n    port: 9000,\n    // ...\n  },\n  // Additional plugins\n  plugins: [],\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/config/farm-config",children:"Config Reference"})})," for more details of configuring Farm."]})}),"\n",(0,r.jsx)(n.h2,{id:"4-building-the-project",children:"4. Building the project"}),"\n",(0,r.jsx)(n.p,{children:"Build the Farm project as production-ready static files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The built product is downgraded to ES5 by default, and the product will be compressed and Tree Shake. If you want to preview the build product locally, you can execute ",(0,r.jsx)(n.code,{children:"npm run preview"})," or ",(0,r.jsx)(n.code,{children:"npx farm preview"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/why-farm",children:"Why Farm?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/features/html",children:"Features"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/config/farm-config",children:"Config Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/plugins/official-plugins/overview",children:"Plugins"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9988:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var r=t(5341);const a={tabItem:"tabItem_MFY6"};var l=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},7123:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(959),a=t(5341),l=t(5739),i=t(8903),s=t(6206),o=t(6404),c=t(2108),u=t(2685);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(8302);const j={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var b=t(1527);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);