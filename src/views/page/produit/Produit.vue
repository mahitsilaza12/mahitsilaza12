<template>
  <div class="col d-flex">
    <div class="col-12">
      <Slide/>
      <div class="container mt-2">
          <div class="alert alert-info col-4" role="alert">
              Liste des produits enregistrer
          </div>
          <div>
            <button type="button" class="btn btn-info" :data-bs-target="'#ajout'" data-bs-toggle="modal" data-bs-whatever="@mdo">Ajout</button>
          </div>
        </div>

      <table class="table table-bordered table-hover mt-2 container">
        <thead class="bg-primary text-white"> 
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Product design</th>
            <th scope="col" class="text-center">Prix Unitaire</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProduitList v-for="produit in produits" :key="produit.id" :produit="produit" :modifierProduit="modifierProduit"/>
        </tbody>
      </table>
    </div>
    <div>
    </div>
    <modalAjout></modalAjout>
  </div>
</template>

  <script>
  import Slide from '@/components/organics/Page/Slide.vue';
  import ProduitList from '@/components/organics/Page/produit/ProduitList.vue';
  import modalAjout from '@/components/organics/Page/produit/modalAjout.vue';
  import Produits from '@/services/Produits'
  export default {
    name:'Produit',

    components: {
      Slide,
      ProduitList,
      modalAjout
    },
    data() {
      return {
        produits: [],
        name: '',
        prix: '',
        design: ''
      }
    },
    computed: {
      produitsList() {
        return this.produits;
      }
    },
    methods: {
    },
    async mounted() {
      try {
        const response = await Produits.listPro();
        this.produits = response
      } catch (error) {
        console.log(error)
      }
    }
  }
  </script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  .parent {
    height: 100vh;
  }

  .col {
    height: 100%;
  }
</style>
