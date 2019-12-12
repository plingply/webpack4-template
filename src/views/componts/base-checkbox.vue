<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="checkeds"
      v-on:change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "checkeds",
    event: "change"
  },
  props: {
    checkeds: Boolean
  },

  data() {
    return {
      age: 30
    };
  }
};
</script>