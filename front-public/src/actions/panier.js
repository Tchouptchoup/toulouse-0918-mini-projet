export const AJOUT_PANIER = 'AJOUT_PANIER';
export const DEDUIT_PANIER = 'DEDUIT_PANIER';
export const SUPPRIME_PANIER = 'SUPPRIME_PANIER';

export const ajoutPanier = (produit) => ({
  type: AJOUT_PANIER,
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
