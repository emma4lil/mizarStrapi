"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    // const { amount } = ctx.request.params;
    const { id } = ctx.state.user;
    const { amount } = ctx.request.params.amount;
    const wallet = await strapi
      .query("wallet")
      .findOne({ _where: { user: id } });
    let balance = +wallet.balance;
    const wallet_id = wallet.id;

    if (amount > balance) {
      ctx.response.status = 500;
      ctx.response.message = "Insufficient balance!";
    } else {
      const diff = balance - amount;
      await strapi.query("wallet").update({ id: wallet_id }, { amount });
    }
    console.log("wallet", wallet.balance);
  },
};
