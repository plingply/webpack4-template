<template>
  <div class="home">
    <h1>Webpack4.30.0 For VUE templete</h1>
    <router-link :to="{ name:'info' }">
      详情
    </router-link>
    <router-link :to="{ name:'h5' }">
      H5
    </router-link>
    <div>
      <el-button type="primary" @click="show = true">
        弹框
      </el-button>
    </div>

    <div>name: {{ name }}</div>
    <div>lovingVue: {{ lovingVue }}</div>
    <div>子组件中的年龄是：{{ childrens }}</div>
    <div>输入框：{{ inputsValue }}</div>
    <div>自定义事件：{{ onmsg }}</div>
    <list :name.sync="name" @callback="callback" />

    <base-checkbox ref="basecheck" v-model="lovingVue" />

    <inputs
      v-model="inputsValue"
      data-a="penglin"
      placeholder="你好呀"
      @input="inputsfunc"
      @focus="focusfunc"
    />

    <dia :show.sync="show" />
  </div>
</template>

<script src="./home.js">
</script>
<style lang="less" scoped src="./home.less">
</style>
