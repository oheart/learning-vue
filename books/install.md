# 安装使用
[安装](https://www.vue3js.cn/docs/zh/guide/installation.html#%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

### 步骤
1. 安装vue最新稳定版
```
$ npm install vue@next
```

2. 安装命令行工具 (CLI)
```
yarn global add @vue/cli@next
# OR
npm install -g @vue/cli@next
```

3. Vite构建web项目  
- 什么是Vite
  - Vite是作者开发的一款意图取代webpack的工具
  - 其实现原理是利用ES6的import会发送请求去加载文件的特性
  - 拦截这些请求，做一些预编译，省去webpack冗长的打包时间

- 安装Vite
  ```
  $ npm install -g create-vite-app
  ``` 

- Vite构建web项目  
  使用 npm：
  ```
  $ npm init vite-app <project-name>
  $ cd <project-name>
  $ npm install
  $ npm run dev
  ```
  或者 yarn：
  ```
  $ yarn create vite-app <project-name>
  $ cd <project-name>
  $ yarn
  $ yarn dev
  ```

  
