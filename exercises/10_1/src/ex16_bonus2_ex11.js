const setPrice = ({ name }, price) => ({ name, price });

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => [item];

module.exports = {
  setPrice,
  addToCart
};