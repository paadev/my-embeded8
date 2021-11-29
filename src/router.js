import EmberOne from '@/components/EmberOne'
import EmberTwo from '@/components/EmberTwo'
import VueRouter from 'vue-router';

const routes = [
    { path: '/one', component: EmberOne },
    { path: '/two', component: EmberTwo }
];

const router = new VueRouter({
    routes
})

export default router;
