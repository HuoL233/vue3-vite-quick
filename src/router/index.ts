import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../App.vue')
    }
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
