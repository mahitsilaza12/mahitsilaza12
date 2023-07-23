<template>
    <div class="slide">
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <router-link to="/Dashboard" class="navbar-brand" style="text-decoration: none; color: aliceblue;">
            Dashboard
          </router-link>
          <router-link to="/Client" style="text-decoration: none; color: aliceblue;" :class="{ 'active': $route.path === '/Client' }">
            Client
          </router-link>
          <router-link to="/Produit" style="text-decoration: none; color: aliceblue;" :class="{ 'active': $route.path === '/Produit' }">
            Produit
          </router-link>
          <router-link to="/Commande" style="text-decoration: none; color: aliceblue;" :class="{ 'active': $route.path === '/Commande' }">
            Commande
          </router-link>
          <router-link to="/Historique" style="text-decoration: none; color: aliceblue;" :class="{ 'active': $route.path === '/Historique' }">
            Historique
          </router-link>
          <router-link to="/AdminCommande"  v-if="userRoles.includes('ROLE_ADMIN')  || userRoles.includes('ROLE_SUPER_ADMIN')"  style="text-decoration: none; color: aliceblue;" :class="{ 'active': $route.path === '/AdminCommande' }">
            Admin command
            
          </router-link>
            <button type="button" class="btn btn-danger" @click="deconnection">Deconnection</button>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
    import User from '@/services/User'
    import { accountService } from "@/services"
    export default {
      name: 'Slide',
      data(){
            return {
                users: [],
                userRoles: []
            }
        },
      methods: {
        deconnection() {
          accountService.logout()
        },
        async getCurrentUser() {
          try {
            const response = await User.getCurrentUser();
            console.log(response)
            this.userRoles = response.roles;
          } catch (error) {
            console.log(error);
          }
        },
      },
      async mounted() {
        await this.getCurrentUser();
      }
    }
  </script>
  
  <style scoped>
    .active {
      font-weight: bold;
    }
  </style>
  