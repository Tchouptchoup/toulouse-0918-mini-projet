import {
  LISTE_PRODUITS, MAJ_STOCK
} from '../actions/produit';

const initialState = {
  produits: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTE_PRODUITS:
      return { produits: action.liste };
    case MAJ_STOCK: {
      return {
        produits:
          state.produits.map(produit => {
            for (let i = 0; i < action.produits.length; i += 1) {
              if (action.produits[i].product_id === produit.id) {
                return { ...produit, stock: (produit.stock - action.produits[i].quantity) }
              }
              return produit
            }
          })
      }
    }
    default:
      return state;
  }
};

export default reducer;
