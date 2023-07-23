import axios from "axios"
const API_URL = 'http://127.0.0.1:8000/api'

export default {
  async getProducts({ commit }) {
    try {
      const response = await axios.get(`${API_URL}/produit`)
      commit('SET_PRODUCTS', response.data.datas)
      console.log(response.data.datas)
    } catch (error) {
      console.error(error)
    }
  },

  async addProduct({ commit }, product) {
    const response = await axios.post(`${API_URL}/produit`, product)
    commit('ADD_PRODUCT', response.data)
  },

  async deleteProduct({ commit }, id) {
    await axios.delete(`${API_URL}/produit/${id}`)
    commit('DELETE_PRODUCT', id)
  },

  async updateProduct({ commit }, { id, product }) {
    const response = await axios.put(`${API_URL}/produit/${id}`, product)
    commit('UPDATE_PRODUCT', response.data)
  }
}