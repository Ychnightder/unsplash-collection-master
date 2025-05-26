import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ImagePage from '../views/ImagePage.vue';
import Collections from '../views/Collections.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/image/:id', name: 'ImagePage', component: ImagePage },
    { path: '/collections', name: 'Collections', component: Collections }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
