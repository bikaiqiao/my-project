import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ("@/pages/login.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ("@/pages/register.vue")
    },
    {
        path: '/',
        name: 'index',
        component: () =>
            import ("@/pages/index/index.vue")
    },
    {
        path: '/manager',
        name: 'manager',
        component: () =>
            import ("@/pages//manager.vue")
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ("@/pages/test.vue")
    },
];

export default new Router({
    routes: routes,
    mode: 'history',
});