"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByTag: async (ctx) => {
    const data = await strapi.services.product.findProductsByTag(ctx.params);
    // return data.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
    return data;
  },
};
