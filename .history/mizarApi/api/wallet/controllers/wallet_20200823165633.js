"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    // const { amount } = ctx.request.params;
    const { id } = ctx.state.user;
    const wallet = await strapi
      .query("wallet")
      .findOne({ _where: { user: id } });
    console.log("wallet", wallet.balance);
  },
};
