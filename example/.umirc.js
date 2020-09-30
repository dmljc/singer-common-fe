import { defineConfig } from 'umi';
// https://www.it610.com/article/1275990763846516736.htm

export default defineConfig({
    hash: true,
    history: {
        type: 'hash',
    },
    routes: [
        {
            path: '/',
            redirect: '/base',
        },
        {
            path: '/login',
            component: '@/pages/login/index',
        },
        {
            path: '/',
            component: '@/layouts/default/index',
            routes: [
                {
                    path: '/base',
                    component: '@/pages/base/index',
                },
                {
                    path: '/demo',
                    component: '@/pages/demo/index',
                },
                {
                    path: '/utils',
                    component: '@/pages/utils/index',
                },
                {
                    path: '/form',
                    component: '@/pages/form/index',
                },
            ],
        },
    ],
});
