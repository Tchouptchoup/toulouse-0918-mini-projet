import { combineReducers } from 'redux';
import categorie from './categorie';
import produit from './produit';

const reducer = combineReducers({
  categorie, produit
});

export default reducer;
