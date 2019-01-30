export const LISTE_PRODUITS = 'LISTE_PRODUITS';
export const MAJ_STOCK = 'MAJ_STOCK';

export const listeProduits = (liste) => ({
  type: LISTE_PRODUITS,
  liste
});

export const majStock = (produits) => ({
  type: MAJ_STOCK,
  produits
})