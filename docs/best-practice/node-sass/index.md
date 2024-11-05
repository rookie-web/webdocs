# node-sass 安装失败的原因

npm 安装 node-sass 依赖时，会从 github.com 上下载 .node 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。

## 方法一：使用淘宝镜像源

设置变量 sass_binary_site，指向淘宝镜像地址

```js
npm i node-sass --sass_binary_site=https://registry.npmjs.org/mirrors/node-sass/

// 也可以设置系统环境变量的方式。示例
// linux、mac 下
SASS_BINARY_SITE=https://registry.npmjs.org/mirrors/node-sass/ npm install node-sass

// window 下
set SASS_BINARY_SITE=https://registry.npmjs.org/mirrors/node-sass/ && npm install node-sass

```

或者设置全局镜像源：

```js
npm config set sass_binary_site https://registry.npmjs.org/mirrors/node-sass/
```

## 方法二：使用 cnpm

```js
cnpm install node-sass
```

## 方法三：创建.npmrc文件

在项目根目录创建.npmrc 文件，复制下面代码到该文件。

```js
sass_binary_site=https://registry.npmjs.org/mirrors/node-sass/
registry=https://registry.npmmirror.com

```

## 解决 win32-x64-64_binding.node 下载失败

遇到 .node 文件无法下载导致安装解析问题，可以从 github.com 上手动下载 .node 文件，将项目中的 sass 路径替换为下载好的文件路径。

1. 文件下载地址：https://github.com/sass/node-sass/releases/
2. 根目录下.npmrc 文件写如下代码

```js
// 示例路径，需替换为本地下载后的路径
SASS_BINARY_PATH=E:\nvm\v18.19.1\node_cache\node-sass\win32-x64-108_binding.node
```


