import {
  ADD_PRODUCT, LIST_PRODUCT, DELETE_PRODUCT, OPEN_PRODUCT, CLOSE_PRODUCT, EDIT_PRODUCT
} from '../actions/produit';

const initialState = {
  products: [],
  isOpen: false,
  produitWithID: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product[0]] };
    case LIST_PRODUCT:
      return { ...state, products: action.products };
    case DELETE_PRODUCT:
      return { ...state, products: state.products.filter(product => product.id !== parseInt(action.id)) };
    case OPEN_PRODUCT:
      return { ...state, isOpen: !state.isOpen, produitWithID: state.products.find(product => product.id === action.id) };
    case CLOSE_PRODUCT:
      return { ...state, isOpen: !state.isOpen, produitWithID: '' };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.product.id) {
            return action.product;
          }
          return product;
        })
      };
    default:
      return state;
  }
};

export default reducer;
