import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        entryData: true
    },
    mutations: {
        update(state, updateData) {
            state.entryData = updateData;
        }
    }
})

export default store;