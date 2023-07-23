<template>
    <tr>
        <td>
        <p class="card-text">{{ adminCommand.user.email }}</p>
      </td>
      <td>
        <p class="card-text">{{ adminCommand.name }}</p>
      </td>
      <td>
        <p class="card-text">{{ adminCommand.produit_name }}</p>
      </td>
      <td>
        <p class="card-text">{{ adminCommand.price}} Ar</p>
      </td>
      <td>
        <p class="card-text">{{ adminCommand.quantite }}</p>
      </td>
      <td>
        <p class="card-text">{{ calculerTotal() }} Ar</p>
      </td>
      <td>
        <p class="card-text">{{ formatDate(adminCommand.date_commande) }}</p>
      </td>
    </tr>
  </template>
  

<script>
import modalSuppression from '@/components/organics/Page/commande/modalSuppression.vue'


export default {
    name:'AdminCommandeList',
    props: {
    adminCommand: {
      type: Object,
      required: true
    }
  },
  components: {
    modalSuppression
  },
  methods: {

    calculerTotal() {
      if (this.adminCommand) {
        return this.adminCommand.quantite * this.adminCommand.price
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