import Api from '../api/api'
import { authGuard } from '@/_helpers/auth-guard'
import Config from './Config'

const Produit = {
    listPro : async () => {
    if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.get(Api.produit.listProduit, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'GET'
                });
                return response.data.datas
            } catch (error) {
                console.log(error)
            }
        }
    },
    addtPro : async (data) => {
        if (authGuard()) {

            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.post(Api.produit.addProduit, data, {
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
    deletePro : async (id) => {
        if (authGuard()) {
            try {
                console.log(id)
                const response = await Config.delete(`/api/produit/${id}`, {
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
    updatePro : async (produit) => {
        if (authGuard()) {
            try {
                const response = await Config.put(`/api/produit/${produit.id}`, produit, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT'
                });
                return response
                } catch (error) {
                    console.log(error)
                }
            }
        }
}

export default Produit
