import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        entryData: true,
        userName: "",
        userState: false
    },
    mutations: {
        update(state, updateData) {
            state.entryData = updateData;
        },
        login(state, userName) {
            state.userState = true;
            state.userName = userName;
        },
        logout(state) {
            state.userState = false;
            state.userName = "";
        }
    }
})

export default store;