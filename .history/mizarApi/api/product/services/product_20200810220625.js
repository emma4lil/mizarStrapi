"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */
// const deepFilter = require("../../../lib/deepfilter");
import { deepFilter } from "../../../lib/deepfilter";

module.exports = {
  findProductsByTag(params, populate) {
    const result = strapi.query("product").find({});
    return deepFilter(result, { key: "tags.tag", val: "phone-ios" });
  },
};
