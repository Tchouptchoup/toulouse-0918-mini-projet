import {
  AJOUT_PANIER, DEDUIT_PANIER, SUPPRIME_PANIER, OPEN_PANIER, PLUS_PANIER
} from '../actions/panier';

const initialState = {
  panier: [],
  isOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUT_PANIER: {
      if (state.panier.find(produit => produit.id === action.produit.id)) {
        return {
          isOpen: !state.isOpen,
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
        return { isOpen: !state.isOpen, panier: [...state.panier, produit] };
      }
    }
    case PLUS_PANIER: {
      if (state.panier.find(produit => produit.id === action.produit.id)) {
        return {
          isOpen: !state.isOpen,
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
        return { isOpen: !state.isOpen, panier: [...state.panier, produit] };
      }
    }
    case DEDUIT_PANIER: {
      return {
        isOpen: !state.isOpen,
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
      return { isOpen: !state.isOpen, panier: state.panier.filter(produit => produit.id !== action.produit.id) }
    }
    case OPEN_PANIER: {
      return { ...state, isOpen: !state.isOpen }
    }
    default:
      return state;
  }
};

export default reducer;
