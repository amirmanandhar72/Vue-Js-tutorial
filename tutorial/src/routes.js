import { createWebHistory, createRouter } from "vue-router";
import Home from './routing/Home.vue'
import Form from './routing/Form.vue'
import Service from './routing/Services.vue'
import NoPage from './routing/NoPage.vue'


const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    }
    , {
        name: 'Form',
        path: '/form',
        component: Form
    },
    {
        name: 'Service',
        path: '/service/:id',
        component: Service
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NoPage
    }


];
const router=createRouter({
    history:createWebHistory(),
    routes
})
 export default router;
