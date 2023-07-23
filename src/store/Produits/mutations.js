export const SET_PRODUCTS = (state, produits) => (state.produits = produits);
export const ADD_PRODUCT = (state, product) => state.produits.push(product);
export const DELETE_PRODUCT = (state, id) => state.produits = state.produits.filter(product => product.id !== id);
export const UPDATE_PRODUCT = (state, product) => {
  const index = state.produits.findIndex(p => p.id === product.id)
  if (index !== -1) {
    state.produits.splice(index, 1, product)
  }
};
