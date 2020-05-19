const setPrice = (item, price) => {
  const retorno = Object.assign({}, item);
  retorno.price = price;
  return retorno;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => [item];

module.exports = {
  setPrice,
  addToCart
};