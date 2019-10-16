import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Detail from '@/pages/detail'

Vue.use(Router)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ("@/pages/login/login.vue")
    },

    {
        path: '/register',
        name: 'register',
        component: () =>
            import ("@/pages/register/register.vue")
    },
    {
        path: '/index',
        name: 'index',
        component: () =>
            import ("@/pages/index/index.vue")
    },
];

export default new Router({
    routes: routes,
    mode: 'history',
});