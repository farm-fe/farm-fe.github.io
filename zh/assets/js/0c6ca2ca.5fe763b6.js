"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2624],{985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=t(6070),i=t(5658);const s={},c="Rust Api",a={id:"api/rust-api",title:"Rust Api",description:"\u60a8\u53ef\u4ee5\u5728 Rust \u4ee3\u7801\u4e2d\u521b\u5efa Farm Rust \u7f16\u8bd1\u5668\u3002 \u4f8b\u5b50\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/api/rust-api.md",sourceDirName:"api",slug:"/api/rust-api",permalink:"/zh/docs/api/rust-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/api/rust-api.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"JavaScript Api",permalink:"/zh/docs/api/javascript-api"}},o={},p=[];function u(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"rust-api",children:"Rust Api"}),"\n",(0,n.jsx)(r.p,{children:"\u60a8\u53ef\u4ee5\u5728 Rust \u4ee3\u7801\u4e2d\u521b\u5efa Farm Rust \u7f16\u8bd1\u5668\u3002 \u4f8b\u5b50\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:'use farmfe_compiler::Compiler;\nuse farmfe_core::config::Config;\n\n// \u521b\u5efa farm \u7f16\u8bd1\u5668\npub fn create_farm_compiler() {\n  let config = Config::default();\n  let extra_plugins = vec![];\n\n  let compiler = Compiler::new(config, extra_plugins);\n\n  compiler\n}\n\n// \u7f16\u8bd1\u9879\u76ee\npub fn compile() {\n  let compiler = create_farm_compiler();\n  compiler.compile()\n}\n\n// \u6267\u884c\u70ed\u66f4\u65b0\npub fn update(compiler: Compiler) {\n  let update_result = compiler.update(vec![(String::from("/root/index.ts"), UpdateType:Update)], || {\n    // \u5f53\u6240\u6709\u66f4\u65b0\uff08\u5305\u62ec\u8d44\u6e90\u518d\u751f\uff09\u5b8c\u6210\u65f6\u8c03\u7528\n  }, true);\n\n  // \u5904\u7406 update_result...\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Farm Rust \u7f16\u8bd1\u5668\u7531 ",(0,n.jsx)(r.a,{href:"https://docs.rs/farmfe_core/latest/farmfe_compiler",children:(0,n.jsx)(r.code,{children:"farmfe_compiler"})})," crate \u5bfc\u51fa\u3002 \u8bf7\u53c2\u9605 ",(0,n.jsx)(r.a,{href:"https://docs.rs/farmfe_core/latest/farmfe_compiler",children:(0,n.jsx)(r.code,{children:"farmfe_compiler"})})," \u6587\u6863\u3002"]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5658:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var n=t(758);const i={},s=n.createContext(i);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);