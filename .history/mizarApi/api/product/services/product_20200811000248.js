"use strict";

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
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return deepFilter(result, { key: "tags.tag", val: "phone-ios" });
  },
};
