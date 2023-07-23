import Api from '../api/api'
import { authGuard } from '@/_helpers/auth-guard'
import Config from './Config'

const Commande = {
    listCommande : async () => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.get(Api.commande.listCommande, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'GET'
                });
                console.log(response.data.datas)
                return response.data.datas
            } catch (error) {
                console.log(error)
            }
        }
    },
    addCommande : async (data) => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.post(Api.commande.addCommande, data, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                });
                return response
                } catch (error) {
                    console.log(error)
                }
            }
    },
    deleteCommande : async (id) => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');
        
                const response = await Config.delete(`/api/commande/${id}`,{
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'DELETE'
                });
                return response
                } catch (error) {
                    console.log(error)
                }
        }
        },
    updateCommande : async (id) => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');
        
                const response = await Config.get(Api.commande.updateCommande, id, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                });
                console.log(response.data.datas)
                return response.data.datas
                } catch (error) {
                    console.log(error)
                }
            }
        },
    adminCommande : async () => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');
                const response = await Config.get(Api.commande.adminCommande, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                });
                console.log(response.data.datas)
                return response.data.datas
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default Commande
