import{_ as e,o,c as t,Q as a}from"./chunks/framework.7d3ea279.js";const v=JSON.parse('{"title":"vue2相关","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue2/index.md","filePath":"interview/vue2/index.md","lastUpdated":1699154526000}'),c={name:"interview/vue2/index.md"},d=a('<h1 id="vue2相关" tabindex="-1">vue2相关 <a class="header-anchor" href="#vue2相关" aria-label="Permalink to &quot;vue2相关&quot;">​</a></h1><h2 id="什么是数据响应式" tabindex="-1">什么是数据响应式 <a class="header-anchor" href="#什么是数据响应式" aria-label="Permalink to &quot;什么是数据响应式&quot;">​</a></h2><p>数据变化后，会自动重新运行依赖该数据的函数</p><h2 id="vue2响应式原理" tabindex="-1">vue2响应式原理 <a class="header-anchor" href="#vue2响应式原理" aria-label="Permalink to &quot;vue2响应式原理&quot;">​</a></h2><p>通过<code>object.defineProperty</code>遍历对象的所有属性，通过<code>get</code>、<code>set</code>函数拦截属性的读取和赋值，在<code>get</code>的时候会收集相应的依赖函数，在<code>set</code>的时候会派发通知去执行相应的依赖函数，从而更新数据（具体核心：<code>observer</code>、<code>dep</code>、<code>watcher</code>、<code>scheduler</code>）</p><blockquote><p>observer把一个普通对象变成响应式对象，递归遍历对象的所有属性</p></blockquote><blockquote><p>dep 收集依赖和派发更新</p></blockquote>',7),r=[d];function i(n,s,u,l,_,h){return o(),t("div",null,r)}const b=e(c,[["render",i]]);export{v as __pageData,b as default};