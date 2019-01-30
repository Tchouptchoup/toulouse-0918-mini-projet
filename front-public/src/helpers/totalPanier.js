export const totalPanier = (tab) => {
  return tab.reduce(
    (carry, item) => carry + item.price, 0,
  );
}