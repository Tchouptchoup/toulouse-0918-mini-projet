import {
  AJOUT_PANIER, DEDUIT_PANIER, SUPPRIME_PANIER
} from '../actions/panier';

const initialState = {
  panier: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUT_PANIER: {
      if (state.panier.find(produit => produit.id === action.produit.id)) {
        return {
          panier: state.panier.map(produit => {
            if (produit.id === action.produit.id) {
              return { ...produit, quantite: produit.quantite + 1 }
            }
            else {
              return produit
            }
          })
        }
      }
      else {
        const produit = {
          ...action.produit,
          quantite: 1
        }
        return { panier: [...state.panier, produit] };
      }
    }
    case DEDUIT_PANIER: {
      return {
        panier: state.panier.map(produit => {
          if (produit.id === action.produit.id) {
            return { ...produit, quantite: produit.quantite - 1 }
          }
          else {
            return produit
          }
        }).filter(produit => produit.quantite >= 1)
      }
    }
    case SUPPRIME_PANIER: {
      return { panier: state.panier.filter(produit => produit.id !== action.produit.id) }
    }
    default:
      return state;
  }
};

export default reducer;
