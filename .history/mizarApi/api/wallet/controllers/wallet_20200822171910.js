"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    const { amount } = ctx.request.params;
    const { user_id } = ctx.state.id;
    const data = strapi.services.wallets.find({});
  },
};
