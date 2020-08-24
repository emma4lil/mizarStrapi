"use strict";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return result;
  },

  findProductsByFilter(attr) {
    const filter = {
      where: { "price.oldprice": 45 },
    };
    const result = strapi.query("product").model.find(filter);
    return result;
  },
};
