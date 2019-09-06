import Vue from 'vue'
import Vuex from 'vuex'
import level3menu from './modules/level3menu'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        level3menu
    },
    strict: debug
})