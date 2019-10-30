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
    {
        path: '/wangEditor',
        name: 'wangEditor',
        component: () =>
            import ("@/pages/wangEditor.vue")
    },
    {
        path: '/mavonEditor',
        name: 'mavonEditor',
        component: () =>
            import ("@/pages/mavonEditor.vue")
    },
    {
        path: '/components',
        name: 'components',
        component: () =>
            import ("@/pages/components.vue")
    },

];

export default new Router({
    routes: routes,
    mode: 'history',
});