<template>
    <tr>
      <td>
        <p class="card-text">{{ command.idclient ? command.idclient.name : '' }}</p>
      </td>
      <td>
        <p class="card-text">{{ command.id_produit ? command.id_produit.name : '' }}</p>
      </td>
      <td>
        <p class="card-text">{{ command.id_produit ? command.id_produit.prix : '0' }} Ar</p>
      </td>
      <td>
        <p class="card-text">{{ command.quantite }}</p>
      </td>
      <td>
        <p class="card-text">{{ calculerTotal() }} Ar</p>
      </td>
      <td>
        <p class="card-text">{{ formatDate(command.date_commande) }}</p>
      </td>
      <td class="text-center">
      <button type="button" class="btn btn-danger" :data-bs-target="'#exampleModals' + command.id" @click="$emit('supprimerCommand', command)" data-bs-toggle="modal" data-bs-whatever="@mdo">Suprimer</button>
      </td>
    <modalSuppression :command="command" @supprimerCommand="supprimerCommand"></modalSuppression>

    </tr>
  </template>
  

<script>
import modalSuppression from '@/components/organics/Page/commande/modalSuppression.vue'


export default {
  props: {
    command: {
      type: Object,
      required: true
    }
  },
  components: {
    modalSuppression
  },
  methods: {
    supprimerCommand() {
      this.$emit('supprimerCommand', this.command)

    },
    calculerTotal() {
      if (this.command.id_produit) {
        return this.command.quantite * this.command.id_produit.prix
      } else {
        return 0
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { hour: 'numeric', minute: 'numeric' }
      return date.toLocaleDateString('fr-FR', options)
    }
  }
}
</script>