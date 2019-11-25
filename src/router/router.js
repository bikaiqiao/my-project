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
        path: '/manager',
        name: 'manager',
        component: () =>
            import ("@/pages//manager.vue")
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: () =>
            import ("@/pages//analytics.vue")
    },
    {
        path: '/wangEditor',
        name: 'wangEditor',
        component: () =>
            import ("@/pages/wangEditor.vue")
    },
    {
        path: '/wangEditor2',
        name: 'wangEditor2',
        component: () =>
            import ("@/pages/wangEditor2.vue")
    },
    {
        path: '/mavonEditor',
        name: 'mavonEditor',
        component: () =>
            import ("@/pages/mavonEditor.vue")
    },
    {
        path: '/writing',
        name: 'writing',
        component: () =>
            import ("@/pages/writing.vue")
    },
    {
        path: '/aside',
        name: 'aside',
        component: () =>
            import ("@/components/aside.vue")
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ("@/pages/test.vue")
    },
    {
        path: '/member_centre',
        name: 'memberCentre',
        component: () =>
            import ("@/pages//memberCentre.vue")
    },
    {
        path: '/account',
        name: 'account',
        component: () =>
            import ("@/pages//account.vue")
    },
    {
        path: '/writeArticle',
        name: 'writeArticle',
        component: () =>
            import ("@/pages//writeArticle.vue")
    },
    {
        path: '/myarticle',
        name: 'MyArticle',
        component: () =>
            import ("@/pages//myArticle.vue")
    },
];

export default new Router({
    routes: routes,
    mode: 'history',
});