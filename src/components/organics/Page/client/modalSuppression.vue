<template>
    <div class="modal fade" :id="'modalSuppression' + client.id" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Supprimer client</h5>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" @click="supprimerClient(client.id)" data-bs-dismiss="modal">Supprimer</button>
            </div>
            </div>
        </div>
    </div>  
    </div>  
</template>

<script>
import Clients from '@/services/Clients'

export default {
    name:'modalSuppression',
    props: {
        client: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.client);
    },
    methods: {
        async supprimerClient(client) {
        try {
            await Clients.deleteClient(client);
            this.$emit('supprimerclient');
            const listeClients = await Clients.lisClient();
            console.log(listeClients);
            this.$parent.clients = listeClients;
        } catch (error) {
            console.log(error);
        }
    }
    }

}
</script>



