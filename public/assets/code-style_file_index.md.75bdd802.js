import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7d3ea279.js";const x=JSON.parse('{"title":"文件夹规范","description":"","frontmatter":{},"headers":[],"relativePath":"code-style/file/index.md","filePath":"code-style/file/index.md","lastUpdated":1699109823000}'),l={name:"code-style/file/index.md"},p=e(`<h1 id="文件夹规范" tabindex="-1">文件夹规范 <a class="header-anchor" href="#文件夹规范" aria-label="Permalink to &quot;文件夹规范&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">注意事项</p><ol><li>文件夹命名小写，使用短横线 - 连接 例如：my-order</li><li>页面自己拥有对应的store，components，types，utils，modules等文件 ，页面和功能对外完全保持独立 只要有能够拼接文件的构建系统，就把每个组件单独分成文件，便于编辑和查阅一个组件，缩小影响范围</li></ol></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">src</span></span>
<span class="line"><span style="color:#e1e4e8;">├──router</span></span>
<span class="line"><span style="color:#e1e4e8;">   └── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">├──application</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├── my-order</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── comp   // 页面子组件</span></span>
<span class="line"><span style="color:#e1e4e8;">   │       └── edit-dialog</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── index.less</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── index.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── store.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── types.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── constant.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">   │       └── notice-dialog</span></span>
<span class="line"><span style="color:#e1e4e8;">   │           └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── index.ts         // 页面逻辑</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── index.less       // 样式</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── index.vue        // 页面模板</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── store.ts         // 请求</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── types.ts         // 类型定义</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── constant.ts      // 常量</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── config.ts        // 表格配置等</span></span>
<span class="line"><span style="color:#e1e4e8;">   │   └── hooks.ts         // 逻辑复用</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   ├── order-config</span></span>
<span class="line"><span style="color:#e1e4e8;">   ...</span></span>
<span class="line"><span style="color:#e1e4e8;">   ————————————————</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">src</span></span>
<span class="line"><span style="color:#24292e;">├──router</span></span>
<span class="line"><span style="color:#24292e;">   └── index.ts</span></span>
<span class="line"><span style="color:#24292e;">├──application</span></span>
<span class="line"><span style="color:#24292e;">   ├── my-order</span></span>
<span class="line"><span style="color:#24292e;">   │   └── comp   // 页面子组件</span></span>
<span class="line"><span style="color:#24292e;">   │       └── edit-dialog</span></span>
<span class="line"><span style="color:#24292e;">   │           └── index.ts</span></span>
<span class="line"><span style="color:#24292e;">   │           └── index.less</span></span>
<span class="line"><span style="color:#24292e;">   │           └── index.vue</span></span>
<span class="line"><span style="color:#24292e;">   │           └── store.ts</span></span>
<span class="line"><span style="color:#24292e;">   │           └── types.ts</span></span>
<span class="line"><span style="color:#24292e;">   │           └── constant.ts</span></span>
<span class="line"><span style="color:#24292e;">   │       └── notice-dialog</span></span>
<span class="line"><span style="color:#24292e;">   │           └── ...</span></span>
<span class="line"><span style="color:#24292e;">   │   └── index.ts         // 页面逻辑</span></span>
<span class="line"><span style="color:#24292e;">   │   └── index.less       // 样式</span></span>
<span class="line"><span style="color:#24292e;">   │   └── index.vue        // 页面模板</span></span>
<span class="line"><span style="color:#24292e;">   │   └── store.ts         // 请求</span></span>
<span class="line"><span style="color:#24292e;">   │   └── types.ts         // 类型定义</span></span>
<span class="line"><span style="color:#24292e;">   │   └── constant.ts      // 常量</span></span>
<span class="line"><span style="color:#24292e;">   │   └── config.ts        // 表格配置等</span></span>
<span class="line"><span style="color:#24292e;">   │   └── hooks.ts         // 逻辑复用</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   ├── order-config</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">   ————————————————</span></span></code></pre></div>`,3),o=[p];function c(t,i,r,y,d,_){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{x as __pageData,h as default};
