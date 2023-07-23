const base_url = "/api"
export default {
    listCommande  : `${base_url}/commande`,
    addCommande : `${base_url}/commande`,
    getCommande : `${base_url}/commande/:id`,
    updateCommande : `${base_url}/commande/:id`,
    deleteCommande : `${base_url}/commande/:id`,
    adminCommande : `${base_url}/commandes/delete`,
}