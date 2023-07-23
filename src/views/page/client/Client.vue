<template>
    <div class="col d-flex">
      <div class="col-12">
        <Slide/>
        <div class="container mt-2">
          <div class="alert alert-info col-4" role="alert">
                Liste des clients enregistrer
          </div>
          <div>
            <button type="button" class="btn btn-info" :data-bs-target="'#ajoutClient'" data-bs-toggle="modal" data-bs-whatever="@mdo">Ajout</button>
          </div>
        </div>

        <table class="table table-bordered table-hover mt-2 container">
          <thead class="bg-primary text-white"> 
            <tr>
              <th scope="col">Nom client</th>
              <th scope="col">Adress</th>
              <th scope="col" class="text-center">Numero</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ClientList v-for="client in clients" :key="client.id" :client ="client"></ClientList>
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
  import ClientList from '@/components/organics/Page/client/clientList.vue'
  import modalAjout from '@/components/organics/Page/client/modalAjout.vue'
  import Client from '@/services/Clients'

    export default {
        name: 'Client',
        data() {
            return {
                clients: [],
            }
        },
        components: {
            Slide,
            ClientList,
            modalAjout
        },
        computed: {
            clientsList() {
                return this.clients;
            }
        },
        async mounted() {
            try {
                const reponse = await Client.lisClient()
                this.clients = reponse
            } catch (error) {
                console.log(error)
            }
        },
    }
  </script>