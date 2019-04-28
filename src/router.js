/* eslint-disable prettier/prettier */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './container/search/search.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'home',
                requireAuth: false
            }
        },
        {
            path: '/main',
            name: 'main',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/Main.vue'),
            meta: {
                title: 'main',
                requireAuth: true
            },
            children: [
                {
                    path: 'music',
                    name: 'music',
                    component: () => import('./container/music/music.vue'),
                    meta: {
                        title: 'music',
                        requireAuth: true
                    }
                },
                {
                    path: 'search',
                    name: 'search',
                    component: Search,
                    meta: {
                        title: 'search',
                        requireAuth: true
                    }
                }
            ]
        }
    ]
});
