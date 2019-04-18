<template>
	<div>
		<h1>裁剪头像</h1>
		<div>
			<input type="file" @change="changes">
		</div>
		<vue-cut-picture :url="url" v-show="cutimgshow" :height="height" :width="width" :cutwidth="cutwidth" @uploadfile="uploadfile"></vue-cut-picture>
		<img :src="src" alt="" style="max-width:100%">
	</div>
</template>
<script>

export default {
  data() {
    return {
      url: "",
      cutwidth: "190px",
      cutheight: "100px",
      width: "100%",
      height: "500px",
      cutimgshow: false,
      src: ""
    };
  },
  methods: {
    uploadfile(imgobj) {
      this.cutimgshow = false;
      this.src = imgobj.src;
    },
    changes(e) {
      this.url = e.target.files[0];
      this.cutimgshow = true;
    }
  }
};
</script>
<style lang="less" scoped>
h3{
  font-size: 40px;
}
</style>

