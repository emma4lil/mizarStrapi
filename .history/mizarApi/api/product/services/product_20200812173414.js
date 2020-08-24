"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  filterProductsBy(params, populate) {
    const result = strapi.query("product").find({});
  },
};
