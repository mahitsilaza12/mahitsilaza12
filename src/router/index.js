import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/page/Auth/Login.vue'
import Register from '@/views/page/Auth/Register.vue'
import Dashboard from '@/views/page/Dashboard/Dashboard.vue';
import Client from '@/views/page/client/Client.vue';
import Produit from '@/views/page/produit/Produit.vue';
import Commande from '@/views/page/commande/Commande.vue';
import AdminCommande from '@/views/page/commande/AdminCommande.vue';
import Historique from '@/views/page/commande/Historique.vue';
import Test from '@/views/test.vue';
import Accueil from '@/views/accueil.vue';
import { authGuard } from '@/_helpers/auth-guard.js';

const routes = [
    {
        path:'/login', name: 'login', component:Login
    },
    {
        path:'/register', name: 'register', component:Register
    },
    {
        path:'/dashboard', name: 'Dashboard', component:Dashboard, beforeEnter: authGuard
    },
    {
        path:'/client', name: 'Client', component:Client, beforeEnter: authGuard
    },
    {
        path:'/produit', name: 'Produit', component:Produit, beforeEnter: authGuard
    },
    {
        path:'/produit:id', name: 'Produits', component:Produit, props: true, beforeEnter: authGuard
    },
    {
        path:'/commande', name: 'Commande', component:Commande, beforeEnter: authGuard
    },
    {
        path:'/admincommande', name: 'AdminCommande', component:AdminCommande, beforeEnter: authGuard
    },
    {
        path:'/historique', name: 'Historique', component:Historique, beforeEnter: authGuard
    },
    {   
        path: '/:pathMatch(.*)*', redirect: '/login' 
    },
    {   
        path: '/test', name: 'test',component:Test
    },
    {   
        path: '/accueil', name: 'accueil',component:Accueil
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router