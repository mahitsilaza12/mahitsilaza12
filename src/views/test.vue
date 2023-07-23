<template>
    <div class="test-container">
      <div class="spinner-container" v-if="loadingPayment">
        <span class="spinner-border spinner-border-lg" role="status"></span>
      </div>
      <div :class="{'blur-background': loadingPayment}">
        <test1 @click="startLoading"></test1>
        <test2></test2>
      </div>
    </div>
  </template>
  
  <style>
  .test-container {
    position: relative;
  }
  
  .spinner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 20%;
    transform: translate(-50%, -50%);
    z-index: 1; /* Le spinner a un indice de profondeur supérieur pour être affiché au-dessus du contenu */
  }
  
  .blur-background {
    position: relative; /* Assurez-vous que le contenu arrière-plan est positionné correctement */
    filter: blur(2px);
    opacity: 0.5;
  }
  
  /* Ajoutez d'autres styles selon vos besoins */
  </style>
  
  <script>
  import test1 from './test1.vue';
  import test2 from './test2.vue';
  
  export default {
    name: 'Test',
    components: {
      test1,
      test2
    },
    data() {
      return {
        loadingPayment: false,
      }
    },
    methods: {
      startLoading() {
        this.loadingPayment = true;
        setTimeout(() => {
          this.$router.push({ name: 'accueil' });
        }, 10000);
      }
    }
  }
  </script>
  