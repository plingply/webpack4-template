<template>
  <div class="h5">
    <header>
      <p>这是文档的头部</p>
    </header>
    <nav>
      <a href="http://www.baidu.com">百度</a>
      <a href="http://www.360.com">360</a>
    </nav>

    <main>
      <aside>
        <ul>
          <li>腾讯</li>
          <li>阿里</li>
          <li>百度</li>
        </ul>
      </aside>

      <progress value="30" max="100"></progress>

      <section>
        <h1></h1>
        <p></p>
      </section>

      <input type="text" list="cars">
      <datalist id="cars">
        <option value="宝马"></option>
        <option value="奔驰"></option>
        <option value="奥迪"></option>
      </datalist>

      <time datetime="2018-01-17">今天是我生日</time>

      <ruby>
        人
        <rt>ren</rt>
        <rp>该标签无法显示</rp>
      </ruby>

      <details>
        <summary>点击查看更多</summary>
        <p>这是点击后的内容</p>
      </details>

      <p>
        我最喜欢
        <mark>数学</mark>
      </p>

      <menu>
        <p>菜单1</p>
        <p>菜单3</p>
        <p>菜单2</p>
      </menu>

      <article>
        <h2>五一劳动节</h2>
        <div>今天是五一劳动节</div>
      </article>
    </main>

    <footer>
      <address>南京鼓楼</address>
    </footer>
  </div>
</template>

<script src="./h5.js"></script>
<style lang="less" scoped src="./h5.less">
</style>
