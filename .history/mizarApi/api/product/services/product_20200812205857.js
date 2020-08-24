"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  findProductsByFilter(filter) {
    const filter = {
      where: "",
    };
    const result = strapi.query("product").find(filter);
    return result;
  },
};
