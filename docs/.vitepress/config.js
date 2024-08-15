import nav from '../config/nav.js'
import sidebar from '../config/sidebar.js'

export default {
  title: 'CodeHub',
  description: 'Just Study.',
  head: [
    // 网站头部的配置
    ["link", { rel: "icon", type: "image/x-icon", href: "/image/favicon.ico" }],
  ],
  lastUpdated: true,
  lastUpdatedText: 'Updated Date',
  themeConfig:{
    nav,
    sidebar,
    logo: '/image/logo.svg',
  },
  base:'/webdocs/',
  // outDir: '../public'
}
