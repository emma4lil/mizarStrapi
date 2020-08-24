"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const deepFilter = function (
  objectList = [{}],
  filter = { key: "tags.tag", val: "ios" }
) {
  const [key, prop] = filter.key.split(".");
  const result = objectList.filter((item) => {
    if (item[key] && Array.isArray(item[key])) {
      const v = helper(prop, item[key], filter.val);
      return v;
    } else {
      return false;
    }
  });
  return result;
};

const helper = function (prop, items, val) {
  const index = items.findIndex((item) => item[prop] === val);
  if (index === -1) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  findByTag: async (ctx) => {
    const data = await strapi.services.product.findProductsByTag(ctx.params);
    // return data.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
    return deepFilter(data, { key: "tags.tag", val: "phone-android" });
  },
};
