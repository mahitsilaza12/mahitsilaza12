<template>
    <div class="col d-flex">
      <div class="col-12">
        <Slide/>
        <div class="container mt-2">
          <div class="alert alert-info col-4" role="alert">
              Liste des commande supprimer
          </div>
        </div>
        <table class="table table-bordered table-hover mt-2 container">
          <thead class="bg-primary text-white"> 
            <tr>
              <th scope="col">Utilisateur</th>
              <th scope="col">Nom client</th>
              <th scope="col">Product design</th>
              <th scope="col" class="text-center">Price</th>
              <th scope="col" class="text-center">quantite</th>
              <th scope="col" class="text-center">Total</th>
              <th scope="col" class="text-center">Date</th>
            </tr>
          </thead>
          <tbody>
          <AdminCommandeList v-for="adminCommand in adminCommands" :key="adminCommand.id" :adminCommand="adminCommand"/>
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </div>
  </template>

  <script>
    import Slide from '@/components/organics/Page/Slide.vue';
    import Commande from '@/services/Commande'
    import AdminCommandeList from '@/components/organics/Page/commande/AdminCommandeList.vue';

    export default {
        name:'AdminCommande',
        data(){
            return {
                adminCommands: [],
            }
        },
        components: {
            Slide,
            AdminCommandeList
        },
        async mounted() {
            const response = await Commande.adminCommande()
            this.adminCommands = response
            console.log(response)
        },
    }
  </script>
  