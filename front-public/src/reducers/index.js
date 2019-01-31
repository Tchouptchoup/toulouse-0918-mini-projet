import { combineReducers } from 'redux';
import produit from './produit';
import panier from './panier';
import auth from './auth';
import categorie from './categorie';
import filtre from './filtre';

const reducer = combineReducers({
  produit, panier, auth, categorie, filtre
});

export default reducer;
