<template>
    <div class="modal fade" :id="'exampleModals' + produit.id" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Supprimer produit</h5>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" @click="supprimerProduit(produit.id)" data-bs-dismiss="modal">Supprimer</button>
            </div>
            </div>
        </div>
    </div>  
    </div>  
</template>

<script>
import Produits from '@/services/Produits'

export default {
    name:'modalSuppre',
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
        async supprimerProduit(produit) {
            try {
                await Produits.deletePro(produit);
                await Produits.listPro();
                this.$emit('supprimerProduit', produit);
            } catch (error) {
                console.log(error);
            }
            }
    }

}
</script>



