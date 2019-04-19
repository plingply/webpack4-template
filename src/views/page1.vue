<template>
  <div>
    <h1>哈哈哈</h1>
    <h2>测试样式</h2>
    <h3>组件内样式 {{ msg }}</h3>
    <el-button icon="el-icon-edit">编辑</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello'
    };
  },
  created() {
    let a = "123123";
    if ("a" == a) {
      console.log(a);
    }
  }
};
</script>


<style lang="less" scoped>

.h1 {
  font-size: 40px;
  font-weight: 100;
  color: red;
  transform: translateY(45px);
}
h3 {
  font-size: 30px;
  color: red;
  background-image: url('../static/img/bj1.jpg');
}
</style>

