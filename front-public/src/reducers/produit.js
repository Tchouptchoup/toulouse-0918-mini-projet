import {
  LISTE_PRODUITS
} from '../actions/produit';

const initialState = {
  produits: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTE_PRODUITS:
      return { produits: action.liste };
    default:
      return state;
  }
};

export default reducer;
