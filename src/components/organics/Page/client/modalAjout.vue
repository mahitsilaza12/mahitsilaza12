<template>
    <div class="modal fade" :id="'ajoutClient'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New client</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name:</label>
                    <input type="text" placeholder="nom produit" class="form-control" id="recipient-name" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Adress:</label>
                    <input type="text" class="form-control" placeholder="adress" id="message-text" v-model="adress" />
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">numero:</label>
                    <input type="number" placeholder="numero" class="form-control" v-model="numero" id="message-text"/>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addClient" data-bs-dismiss="modal">Add</button>
            </div>
            </div>
        </div>
    </div>  
</template>

<script>
import Clients from '@/services/Clients'

export default {
    name:'modalAjout',
    data(){
        return{
            name: '',
            numero: 0,
            adress: '',
        }
    },
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
        async addClient() {
            try {
                const payload = {
                name: this.name,
                numero: this.numero,
                adress: this.adress
                };
                await Clients.addClient(payload);
                this.$parent.clients = await Clients.lisClient();
            } catch (error) {
                console.log(error);
            }
            }
    },  

}
</script>



