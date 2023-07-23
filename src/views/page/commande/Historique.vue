<template>
    <div class="col d-flex">
      <div class="col-12">
        <Slide/>
        <div class="container mt-2">
          <div class="alert alert-info col-4" role="alert">
              Liste des historiques enregistrer
          </div>
        </div>
        <table class="table table-bordered table-hover mt-2 container">
          <thead class="bg-primary text-white"> 
            <tr>
              <th scope="col">Nom client</th>
              <th scope="col">Product design</th>
              <th scope="col" class="text-center">Price</th>
              <th scope="col" class="text-center">quantite</th>
              <th scope="col" class="text-center">total</th>
              <th scope="col" class="text-center">Date</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          <HistoriqueList v-for="command in commandes" :key="command.id" :command="command"/>
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
    import HistoriqueList from '@/components/organics/Page/commande/HistoriqueList.vue';

    export default {
        name:'Historique',
        data(){
            return {
                commandes: [],
            }
        },
        components: {
            Slide,
            HistoriqueList
        },
        async mounted() {
            const response = await Commande.listCommande()
            this.commandes = response
            console.log(response)
        },
    }
  </script>
  