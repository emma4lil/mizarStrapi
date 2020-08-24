"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  findProductsByFilter(attr) {
    const filter = {
      _where: { name: "IPhone 7" },
    };
    const result = strapi.query("product").find(filter);
    return result;
  },
};
