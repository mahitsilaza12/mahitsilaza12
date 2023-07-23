<template>
  <tr>
    <td>
      <p class="card-text">{{ produit.name }}</p>
    </td>
    <td>
      <p class="card-text">{{ produit.design }}</p>
    </td>
    <td class="text-center">
      <strong>{{ produit.prix }} Ar</strong>
    </td>
    <td class="text-center">
      <button type="button" class="btn btn-success" :data-bs-target="'#exampleModal' + produit.id" @click="$emit('modifierProduit', produit)" data-bs-toggle="modal" data-bs-whatever="@mdo">Modifier</button>
      <button type="button" class="btn btn-danger" :data-bs-target="'#exampleModals' + produit.id" @click="$emit('supprimerProduit', produit)" data-bs-toggle="modal" data-bs-whatever="@mdo">Suppmier</button>
    </td>
    <modal :produit="produit" @modifierProduit="modifierProduit"></modal>
    <modalSuppre :produit="produit" @supprimerProduit="supprimerProduit"></modalSuppre>
  </tr>
</template>

<script>
import modal from '@/components/organics/Page/produit/modal.vue'
import modalSuppre from '@/components/organics/Page/produit/modalSuppre.vue'

export default {
  props: {
    produit: {
      type: Object,
      required: true
    }
  },
  components: {
    modal,
    modalSuppre
  },
  methods: {
    supprimerProduit() {
      this.$emit('supprimerProduit', this.produit)

    },
    modifierProduit() {
      this.$emit('modifierProduit', this.produit)
    }

  }
}
</script>
