import{s as o,a0 as i,a1 as u,a2 as c,a3 as l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as g,aa as y,d as P,u as v,j as w,y as C,ab as R,ac as _,ad as b,ae as E}from"./chunks/framework.7d3ea279.js";import{t as D}from"./chunks/theme.e675dde2.js";const T={...D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(T),j=P({name:"VitePressApp",setup(){const{site:e}=v();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function O(){const e=x(),a=S();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function S(){return h(j)}function x(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=y(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
