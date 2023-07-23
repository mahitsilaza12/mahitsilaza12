<template>
    <div class="col d-flex">
      <div class="col-12">
        <Slide/>
        
        <CommandeClient></CommandeClient>
      </div>
    </div>
  </template>
  
    <script>
    import Slide from '@/components/organics/Page/Slide.vue';
    import CommandeClient from '@/components/organics/Page/commande/commandeClient.vue'
    export default {
      name:'Commande',
  
      components: {
        Slide,
        CommandeClient
      },
      data() {
        return {
        }
      },
      computed: {
      },
      methods: {
      },
      async mounted() {
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
  