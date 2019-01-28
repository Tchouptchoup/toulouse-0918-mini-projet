export const ADD_PRODUCT = 'ADD_PRODUCT';
export const LIST_PRODUCT = 'LIST_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const OPEN_PRODUCT = 'OPEN_PRODUCT';
export const CLOSE_PRODUCT = 'CLOSE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product
});

export const listProduct = (products) => ({
  type: LIST_PRODUCT,
  products
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id
});

export const openProduct = (id) => ({
  type: OPEN_PRODUCT,
  id
});

export const closeProduct = () => ({
  type: CLOSE_PRODUCT
});

export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product
});
