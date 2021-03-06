"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  findProductsByFilter(attr) {
    const filter = {
      _where: { name: "Nokia 3.2" },
    };
    const result = strapi.query("product").find(filter);
    return result;
  },
};
