export const AJOUT_PANIER = 'AJOUT_PANIER';
export const PLUS_PANIER = 'PLUS_PANIER';
export const DEDUIT_PANIER = 'DEDUIT_PANIER';
export const SUPPRIME_PANIER = 'SUPPRIME_PANIER';
export const OPEN_PANIER = 'OPEN_PANIER';

export const ajoutPanier = (produit) => ({
  type: AJOUT_PANIER,
  produit
});

export const plusPanier = (produit) => ({
  type: PLUS_PANIER,
  produit
});

export const deduitPanier = (produit) => ({
  type: DEDUIT_PANIER,
  produit
});

export const supprimePanier = (produit) => ({
  type: SUPPRIME_PANIER,
  produit
});

export const openPanier = () => ({
  type: OPEN_PANIER,
});
