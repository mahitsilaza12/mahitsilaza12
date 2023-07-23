<template>
    <div class="modal fade" :id="'exampleModals' + command.id" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Supprimer command</h5>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" @click="supprimerCommand(command.id)" data-bs-dismiss="modal">Supprimer</button>
            </div>
            </div>
        </div>
    </div>  
    </div>  
</template>

<script>
import Commande from '@/services/Commande'

export default {
    name:'modalSuppression',
    props: {
        command: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.command);
    },
    methods: {
        async supprimerCommand(command) {
            try {
                await Commande.deleteCommande(command);
                this.$emit('supprimerCommand', command);
            } catch (error) {
                console.log(error);
            }
            }
    }

}
</script>



