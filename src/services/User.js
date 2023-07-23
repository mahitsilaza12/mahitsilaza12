import Api from '../api/api'
import { authGuard } from '@/_helpers/auth-guard'
import Config from './Config'

const User = {
    lisUser : async () => {
        if (authGuard()) {
                try {
                    let accessToken = localStorage.getItem('token');
    
                    const response = await Config.get(Api.user.listUser, {
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
        getCurrentUser: async () => {
            if (authGuard()) {
                try {
                    let accessToken = localStorage.getItem('token');
    
                    const response = await Config.get(Api.user.currentUser, {
                        headers: {
                            'Authorization' : `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        },
                        method: 'GET'
                    });
                    return response.data;
                } catch (error) {
                    console.log(error)
                }
            }
        }
}

export default User
