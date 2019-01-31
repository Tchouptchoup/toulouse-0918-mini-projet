export const ADD_FILTRE_CAT = 'ADD_FILTRE_CAT';
export const REMOVE_FILTRE_CAT = 'REMOVE_FILTRE_CAT';

export const addFiltreCat = (id) => ({
  type: ADD_FILTRE_CAT,
  id
});

export const removeFiltreCat = (id) => ({
  type: REMOVE_FILTRE_CAT,
  id
});