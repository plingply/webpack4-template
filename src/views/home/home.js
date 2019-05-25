import list from "../componts/list"
import baseCheckbox from "../componts/base-checkbox"
import inputs from "../componts/input"
import dia from "../componts/dia"
export default {
    data() {
        return {
            name:'xinxin',
            lovingVue: true,
            show: false,
            childrens:'',
            onmsg:'',

            inputsValue:'inputsValue'
        }
    },

    components:{
        list,
        baseCheckbox,
        inputs,
        dia
    },

    created() {
        
    },

    methods: {
        callback(){
            this.name = '我是通过事件改变的'
        },

        inputsfunc(){
            console.log(this.inputsValue)
        },

        focusfunc(){
            console.log('获得焦点了')
            this.inputsValue = ''
        }
    },

    mounted() {
        this.childrens = this.$refs.basecheck.age

        this.$on("test", function(msg) {
            console.log(msg)
            this.onmsg = msg
          });
    },
}