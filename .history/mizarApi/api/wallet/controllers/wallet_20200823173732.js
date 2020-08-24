"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    // const { amount } = ctx.request.params;
    const { id } = ctx.state.user;
    let { amount } = ctx.request.body;
    amount = +amount;
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
      const res = await strapi
        .query("wallet")
        .update({ id: wallet_id }, { balance: +diff });
      console.log("bal:", res.balance);

      ctx.response.body = { balance: res.balance };
      ctx.response.status = 200;
    }
  },
};
