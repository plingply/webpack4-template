import vue from "vue"
import vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

vue.use(vuex)

const store = new vuex.Store({
    //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    actions
})

export default store