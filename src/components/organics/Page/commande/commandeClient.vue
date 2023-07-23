<template>
    <div class="row container">
    <div class="col-sm-6">
        <div class="card text-white bg-dark mb-3">
        <div class="card-body">
            <h5 class="card-title">Selectionner vos command</h5>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Clients</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
                </select>
            </div>     
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect02">Produits</label>
                <select class="form-select" id="inputGroupSelect02">   
                    <option v-for="produit in produits" :key="produit.id" :value="produit.id">{{ produit.name }}</option>
                </select>
            </div>    
            <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Quantite</span>
            <input type="number" class="form-control" placeholder="Quantite" aria-label="Quantite" v-model="quantite" aria-describedby="addon-wrapping">
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-outline-primary" @click="suivant">Suivant</button>
            <button type="button" class="btn btn-outline-info" @click="direct">Terminer</button>
        </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card text-white bg-secondary mb-3">
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Client</th>
                <th scope="col">Produit</th>
                <th scope="col">Quantité</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(commande, index) in commandes" :key="index">
                    <td>{{ clients.find(client => client.id === commande.idclient_id) && clients.find(client => client.id === commande.idclient_id).name }}</td>
                    <td>{{ produits.find(produit => produit.id === commande.id_produit_id) && produits.find(produit => produit.id === commande.id_produit_id).name }}</td>
                    <td>{{ commande.quantite }}</td>
                    <td>{{ commande.date_commande }}</td>
                </tr>
            </tbody>
            </table>
            <button type="button" class="btn btn-outline-warning">Terminer</button>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
    import Clients from '@/services/Clients'
    import Produits from '@/services/Produits'
    import Commande from '@/services/Commande'

    export default {
        name: 'commandeClient',
        data() {
            return {
            clients: [],
            produits: [],
            quantite: 0,
            commandes: [] // Ajout de la variable pour stocker les commandes
            }
        },
        methods: { 
            suivant() {
                const idclient_id = document.getElementById("inputGroupSelect01").value;
                const id_produit_id = document.getElementById("inputGroupSelect02").value;
                const quantite = this.quantite;
                const date_commande = new Date().toISOString().substr(0, 10); // Obtenez la date du jour
                const commande = { idclient_id, id_produit_id, quantite, date_commande }; // Créez un objet commande
                console.log(commande)
                this.commandes.push(commande); // Ajouter la commande au tableau
                this.quantite = 0;
            },
            async direct() {
                const idclient_id = document.getElementById("inputGroupSelect01").value;
                const id_produit_id = document.getElementById("inputGroupSelect02").value;
                const quantite = this.quantite;
                const date_commande = new Date().toISOString().substr(0, 10); // Obtenez la date du jour
                const commande = { idclient_id, id_produit_id, quantite, date_commande }; // Créez un objet commande
                try {
                 await Commande.addCommande(commande)
                 this.$router.push('/historique');

                } catch (error) {
                    console.log(error);
                }

            }
        },
        async mounted() {
            try {
                const responseClients = await Clients.lisClient();
                const responseProduits = await Produits.listPro();
                this.clients = responseClients
                this.produits = responseProduits
            } catch (error) {
            console.log(error)
            }
        },
    }
</script>