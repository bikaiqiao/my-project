import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ("@/pages/index.vue")
    },
    {
        path: '/entry',
        name: 'entry',
        component: () =>
            import ("@/pages/entry.vue")
    },
    {
        path: '/layout',
        name: 'layout',
        component: () =>
            import ("@/components/layout.vue")
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
            import ("@/pages/components")
    },
];

export default new Router({
    routes: routes,
    mode: 'history',
});