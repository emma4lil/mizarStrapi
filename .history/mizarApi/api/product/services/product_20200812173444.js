"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  filterProductsBy(params, populate) {
    const filter = {};
    const result = strapi.query("product").find(filter);
  },
};
