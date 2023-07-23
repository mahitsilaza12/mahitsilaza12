
export const allProducts = (state) => { return state.produits }

export const getProductById = (state) => {(id) => state.produits.find(product => product.id === id)}
