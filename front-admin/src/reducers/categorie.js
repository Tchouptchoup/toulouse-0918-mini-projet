import {
  LISTE_CATEGORIES
} from '../actions/categorie';

const initialState = {
  categories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTE_CATEGORIES:
      return { ...state, categories: action.liste };
    default:
      return state;
  }
};

export default reducer;
