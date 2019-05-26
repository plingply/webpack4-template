<template>
    <el-dialog title="提示" :visible.sync="show" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="cx">确 定</el-button>
      </span>
    </el-dialog>
</template>

<script>
import vue from "vue"
export default {
    props:['show'],

    watch:{
        show(){
            console.log('change show')
            this.$emit('update:show', this.show)
        }
    },

    methods:{
      cx(){
        this.show = false
        vm.$emit('pk', 'hi')
      }
    },

    mounted(){
        
    }
}
</script>