"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    const { amount, userid } = ctx.request.params;
    const data = strapi.services.wallets.find({});
  },
};
