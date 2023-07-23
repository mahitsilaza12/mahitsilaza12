<template>
    <div>
      <button @click="afficher">envoyer</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "test1",
    methods: {
      afficher() {
        this.$emit('click');
      }
    }
  }
  </script>
  