import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.7d3ea279.js";const A=JSON.parse('{"title":"Typescript模板规范","description":"","frontmatter":{},"headers":[],"relativePath":"code-style/typescript/index.md","filePath":"code-style/typescript/index.md","lastUpdated":1699109823000}'),l={name:"code-style/typescript/index.md"},o=p(`<h1 id="typescript模板规范" tabindex="-1">Typescript模板规范 <a class="header-anchor" href="#typescript模板规范" aria-label="Permalink to &quot;Typescript模板规范&quot;">​</a></h1><details class="details custom-block"><summary>注意事项</summary><ol><li>在声明 prop 的时候，其命名应该始终使用 camelCase 并且尽量配置高级选项，如类型检测、自定义验证和设置默认值</li><li>定义常量全部大写，单词拼接使用下划线</li><li>使用hooks的时候，应该以use开头，例如useMousePosition</li></ol></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 1 引入外部库</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, reactive, ref, toRefs, computed, toRaw, watch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { MUtils } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@paas/paas-library&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { MFormInstance } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@paas/paas-design&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { debounce } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2 引入内部依赖</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { State, ModalType } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./type&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { RULES, NAME, KEY_WORD } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./constant&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//引入常量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    components:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">注册组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// props</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      recruitOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">        required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      campusOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">        required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// refs页面组件实例集合</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">components</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          editNodeRef:  </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ModalType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//常量集中声明，解构导出 </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">constants</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">          RULES: </span><span style="color:#79B8FF;">RULES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          NAME: </span><span style="color:#79B8FF;">NAME</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// state</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">State</span><span style="color:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="color:#E1E4E8;">            loading: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// computed</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isLoading</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.loading</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// watch</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state.loading, (</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// methods</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">methods</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">删除逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">                methods.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        methods.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">()   </span><span style="color:#6A737D;">//直接调用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// lifecicle</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            methods.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// return</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">components,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">constants,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">methods,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isLoading</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 1 引入外部库</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, reactive, ref, toRefs, computed, toRaw, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { MUtils } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@paas/paas-library&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { MFormInstance } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@paas/paas-design&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { debounce } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lodash&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2 引入内部依赖</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { State, ModalType } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./type&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RULES, NAME, KEY_WORD } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./constant&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//引入常量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    components:{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">注册组件</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// props</span></span>
<span class="line"><span style="color:#24292E;">    props: {</span></span>
<span class="line"><span style="color:#24292E;">      recruitOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        type: Array,</span></span>
<span class="line"><span style="color:#24292E;">        required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      campusOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        type: Array,</span></span>
<span class="line"><span style="color:#24292E;">        required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// hooks</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// refs页面组件实例集合</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">components</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          editNodeRef:  </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">ModalType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">&gt;(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//常量集中声明，解构导出 </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">constants</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">          RULES: </span><span style="color:#005CC5;">RULES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          NAME: </span><span style="color:#005CC5;">NAME</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// state</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">State</span><span style="color:#24292E;">&gt;({</span></span>
<span class="line"><span style="color:#24292E;">            loading: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// computed</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isLoading</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.loading</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// watch</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> state.loading, (</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// methods</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">methods</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">删除逻辑</span></span>
<span class="line"><span style="color:#24292E;">                methods.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        methods.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">()   </span><span style="color:#6A737D;">//直接调用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// lifecicle</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            methods.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// return</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">components,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">constants,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">toRefs</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">methods,</span></span>
<span class="line"><span style="color:#24292E;">            isLoading</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{A as __pageData,m as default};
