import { combineReducers } from 'redux';
import produit from './produit';
import panier from './panier';

const reducer = combineReducers({
  produit, panier
});

export default reducer;
