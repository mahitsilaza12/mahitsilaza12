import Api from '../api/api'
import { authGuard } from '@/_helpers/auth-guard'
import Config from './Config'

const Client = {
    lisClient : async () => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.get(Api.client.listClient, {
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
    addClient : async (data) => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');

                const response = await Config.post(Api.client.addClient, data, {
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
    deleteClient : async (id) => {
        if (authGuard()) {
            try {
                let accessToken = localStorage.getItem('token');
        
                const response = await Config.delete(`/api/client/${id}`, {
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
    updateClient : async (client) => {
        if (authGuard()) {

            try {
                let accessToken = localStorage.getItem('token');
                console.log(client)
                const response = await Config.put(`/api/client/${client.id}`, client, {
                    headers: {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT'
                });
                console.log(response.data.datas)
                return response.data.datas
                } catch (error) {
                    console.log(error)
                }
            }
        }
}

export default Client
