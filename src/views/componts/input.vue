<template>
  <div>
    <input type="text" v-bind="$attrs" :value="value1" v-on="inputListeners" />
    <div>父组件中inputsValue：{{ $parent.inputsValue }}</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value1"
  },
  props: ["value1"],
  computed: {
    inputListeners() {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input() {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  },

  created() {}
};
</script>