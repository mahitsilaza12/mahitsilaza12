<template>
    <tr>
      <td>
        <p class="card-text">{{ client.name }}</p>
      </td>
      <td>
        <p class="card-text">{{ client.adress }}</p>
      </td>
      <td class="text-center">
        <strong>{{ client.numero }}</strong>
      </td>
      <td class="text-center">
      <button type="button" class="btn btn-success" :data-bs-target="'#modalEdit' + client.id" @click="$emit('modifierClient', client)" data-bs-toggle="modal" data-bs-whatever="@mdo">Modifier</button>
      <button type="button" class="btn btn-danger" :data-bs-target="'#modalSuppression' + client.id" @click="$emit('supprimerClient', client)" data-bs-toggle="modal" data-bs-whatever="@mdo">Supprimer</button>
      </td>
        <modalSuppression :client="client" @supprimerClient="supprimerClient"></modalSuppression>
        <modalEdit :client="client" @modifierClient="modifierClient"></modalEdit>
    </tr>
  </template>

  <script>
    import modalSuppression from '@/components/organics/Page/client/modalSuppression.vue'
    import modalEdit from '@/components/organics/Page/client/modalEdit.vue'
    export default {
        name:'clientList',
        props: {
        client: {
            type: Object,
            required: true
        }
        },
        components: {
            modalSuppression,
            modalEdit
        },
        methods: {
            supprimerClient() {
                this.$emit('supprimerClient', this.client)
            },
            modifierClient() {
                this.$emit('modifierClient')
            }
            
        }
    }
  </script>
  