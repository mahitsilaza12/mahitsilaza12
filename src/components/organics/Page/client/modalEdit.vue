<template>
    <div class="modal fade" :id="'modalEdit' + client.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">client</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <input type="hidden" placeholder="nom produit" class="form-control" id="recipient-name" v-model="client.id">

                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name:</label>
                    <input type="text" placeholder="nom client" class="form-control" id="recipient-name" v-model="client.name">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">adress:</label>Design
                    <input type="text" class="form-control" placeholder="design" id="message-text" v-model="client.adress" />
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">PU:</label>
                    <input type="number" placeholder="numero" class="form-control" v-model="client.numero" id="message-text"/>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="modifierClient(client)" data-bs-dismiss="modal">Update</button>
            </div>
            </div>
        </div>
    </div>  
</template>

<script>
import Clients from '@/services/Clients'

export default {
    name:'modal',
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
        async modifierClient(client) {
            try {
                const payload = {
                id: client.id,
                name: client.name,
                numero: client.numero,
                adress: client.adress
                };
                await Clients.updateClient(payload);
                this.$emit('modifierClient');
            } catch (error) {
                console.log(error);
            }
            }
    },  

}
</script>



