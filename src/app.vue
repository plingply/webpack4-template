<template>
  <div>
    <div class="banner">
      Vue-webpack4项目模板1
    </div>
    <ul>
      <router-link tag="li" :class="{active:$route.name == 'page1'}" :to="{name:'page1'}">Page1</router-link>
      <router-link tag="li" :class="{active:$route.name == 'page2'}" :to="{name:'page2'}">Page2</router-link>
      <router-link tag="li" :class="{active:$route.name == 'page3'}" :to="{name:'page3'}">Page3</router-link>
    </ul>
    <div class="contnet">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "./less/style.less";

.banner{
  width: 100%;
  height: 400px;
  background-color: #000;
  font-size: 30px;
  font-weight: 100;
  line-height: 400px;
  text-align: center;
  color: #fff;
}
ul{
  width: 100%;
  display: flex;
  background-color: #eee;
  border-bottom: 1px solid #ddd;
  li{
    flex: 1;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    &.active{
      color: green;
      font-weight: 400;
    }
    &:last-child{
      border-right: none;
    }
  }
}
.contnet{
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
