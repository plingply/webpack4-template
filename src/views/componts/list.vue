<template>
  <div>
    我是一个组件我的名字是:{{ name }}
    <div>
      <button type="button" @click="callback">我还是一个按钮</button>
    </div>
  </div>
</template>

<script>
import vue from "vue";
export default {
  props: {
    name: {
      type: String,
      default() {
        return "penglin";
      }
    }
  },

  methods: {
    callback() {
      this.name = "我是通过直接修改prop改变的";
      // this.$emit("callback")
    }
  },

  mounted() {
    this.$root.$on("pk", msg => {
      console.log("12343", msg);
    });
  }
};
</script>