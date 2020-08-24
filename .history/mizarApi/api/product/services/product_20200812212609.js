"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  findProductsByFilter(attr) {
    const filter = {
      _where: { "price.oldprice": 45 },
    };
    const result = strapi.query("product").find(filter);
    return result;
  },
};
