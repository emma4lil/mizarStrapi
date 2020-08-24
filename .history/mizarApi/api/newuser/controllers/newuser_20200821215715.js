"use strict";

/**
 * A set of functions called "actions" for `newuser`
 */

module.exports = {
  create: async (ctx, next) => {
    const wallet = {
      balance: 0,
      floating_balance: 0,
      user: ctx.params.id,
    };
    const { username, email, phone, password } = ctx.request.body;
    const body = ctx.request.body;

    const user = strapi.plugins["users-permissions"].services.user.create(body);

    // const user = await strapi.services.wallets.create(wallet);
    console.log(user);
  },
};
