import { createStore } from 'vuex'

import state from "./Produits/state";
import actions from "./Produits/actions";
import * as getters from "./Produits/getters";
import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Produits/mutations";

const store = createStore({
    state,
    actions,
    mutations: {
        SET_PRODUCTS,
        ADD_PRODUCT,
        DELETE_PRODUCT,
        UPDATE_PRODUCT,
      },
    getters
});

export default store;
