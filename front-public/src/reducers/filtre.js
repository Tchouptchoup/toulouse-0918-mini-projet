import { ADD_FILTRE_CAT, REMOVE_FILTRE_CAT } from '../actions/filtre';

const initialState = {
  filtres: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTRE_CAT:
      return { filtres: [...state.filtres, action.id] }
    case REMOVE_FILTRE_CAT:
      return { filtres: state.filtres.filter(filtre => filtre !== action.id) }
    default:
      return state;
  }
};

export default reducer;