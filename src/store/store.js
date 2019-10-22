import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.prototype.$store = store

const store = new Vuex.Store({
    state: {
        token,
    },
    getters: {
        getToken(state) {
            return state.token
        }
    },
    //同步修改数据
    mutations = {
        'SET_TOKEN': (state, token) => {
            state.token = token;
        }
    },
    //异步修改数据
    actions = {
        set_token(context, token) {
            context.commit('SET_TOKEN', token)
        }
    }
})
export default store