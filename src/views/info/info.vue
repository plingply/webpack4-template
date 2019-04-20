<template>
  <div class="info">
    <pre>



          // 新建组件 默认路径为config.originPagePath
          npm run new [compontName] 在src/views 下面创建组件
          npm run new [compontName]:[path] 在src/views/path 下面创建组件
          npm run new [compontName]:[path]/[path1] 在src/views/path/path1 下面创建组件
          npm run new [compontName]:[path]@[parentPath] 在src/parentPath/path 下面创建组件

          src为固定路由不可更改，否则创建组件会自动在跟目录下创建一个src目录

          npm run dev [ 加载 src/config.development.js ]
          npm run dev:test [ 加载 src/config.test.js ]
          npm run dev:prod [ 加载 src/config.production.js ]

          npm run build:dev [ 加载 src/config.development.js ]
          npm run build:test [ 加载 src/config.test.js ]
          npm run build [ 加载 src/config.production.js ]


          已实现永久缓存。
          
          <router-link
  :to="{ name:'home' }"
>HOME</router-link>
    </pre>
  </div>
</template>

<script src="./info.js"></script>
<style lang="less" scoped src="./info.less">
</style>
