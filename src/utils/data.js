const products = require('../data.json').imoveis;

exports.findProducts = () => products;
exports.findProduct = id =>
	products.filter(product => product.id === parseInt(id))[0];
