<template>
    <div class="modal fade" :id="'ajout'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Produit</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name:</label>
                    <input type="text" placeholder="nom produit" class="form-control" id="recipient-name" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Design:</label>Design
                    <input type="text" class="form-control" placeholder="design" id="message-text" v-model="design" />
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">PU:</label>
                    <input type="number" placeholder="PU" class="form-control" v-model="prix" id="message-text"/>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addProduit" data-bs-dismiss="modal">Add</button>
            </div>
            </div>
        </div>
    </div>  
</template>

<script>
import Produits from '@/services/Produits'

export default {
    name:'modalAjout',
    data(){
        return{
            name: '',
            prix: 0,
            design: '',
        }
    },
    props: {
        produit: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.produit);
    },
    methods: {
        async addProduit() {
            try {
                const payload = {
                name: this.name,
                prix: this.prix,
                design: this.design
                };
                await Produits.addtPro(payload);
            } catch (error) {
                console.log(error);
            }
            }
    },  

}
</script>



