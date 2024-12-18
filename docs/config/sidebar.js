// export default [
//   {
//     text: "风格规范",
//     items: [{ text: "Introduction", link: "/code-style/introduction/" }],
//   },
// ];

export default {
  '/code-style/': [
    {
      text: '风格规范',
      items: [
        { text: '快速上手', link: '/code-style/quick-start/' },
        { text: '项目文件夹', link: '/code-style/file/' },
        { text: '编程规范约定', link: '/code-style/code/' },
        { text: 'template模板', link: '/code-style/template/' },
        { text: 'typescript模板', link: '/code-style/typescript/' },
        { text: 'type类型声明', link: '/code-style/type/' },
        { text: 'style样式', link: '/code-style/style/' }
        // { text: "color颜色", link: "/code-style/color/" },
        // { text: "border边框字体", link: "/code-style/border/" },
      ]
    }
  ],
  '/interview/': [
    {
      text: 'HTML',
      link: '/interview/html/'
    },
    {
      text: 'CSS',
      link: '/interview/css/'
    },
    {
      text: 'JS基础',
      link: '/interview/js/'
    },
    {
      text: 'ES6+',
      link: '/interview/es6/'
    },
    {
      text: 'Vue2',
      link: '/interview/vue2/'
    },
    {
      text: 'Vue3',
      link: '/interview/vue3/'
    },
    {
      text: '计算机网络',
      link: '/interview/network/'
    },
    {
      text: '浏览器相关',
      items: [
        { text: '大纲', link: '/interview/browser/' },
        { text: '事件循环', link: '/interview/browser/eventloop' }
      ]
    },
    {
      text: '前端性能优化',
      link: '/interview/optimize/'
    },
    {
      text: '工程化',
      items: [
        { text: 'webpack', link: '/interview/webpack/' },
        { text: 'vite', link: '/interview/vite/' }
      ]
    }
  ],
  '/best-practice/': [
    {
      text: 'webp格式图片',
      link: '/best-practice/webp-photo/'
    },
    {
      text: 'node-sass安装问题',
      link: '/best-practice/node-sass/'
    }
  ],
  '/common-components/': [
    {
      text: '下拉分页选择',
      link: '/common-components/select-pager/'
    }
  ],
  '/handwriting/': [
    {
      text: '深拷贝',
      link: '/handwriting/deep-clone/'
    },
    {
      text: 'Promise.all',
      link: '/handwriting/promise-all/'
    },
    {
      text: '类的继承(ES5)',
      link: '/handwriting/class-extends/'
    }
  ],
  '/': []
}
