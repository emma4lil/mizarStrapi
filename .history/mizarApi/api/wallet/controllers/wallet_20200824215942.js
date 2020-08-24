"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pay: async (ctx) => {
    // const { amount } = ctx.request.params;
    const { id } = ctx.state.user;
    let { amount, pib_id } = ctx.request.body;
    //detect negative payments
    if (amount < 0) amount = +amount;
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

      //add record to BIPRecords
      let record = {
        user: id,
        paid_amount: amount,
        name: "WALLET_PIB_TX",
        pay_in_bit: pib_id,
      };
      const pibrec = await strapi.query("bits-records").create(record);
      ctx.response.body = { balance: res.balance, pibrec };
      ctx.response.status = 200;
    }
  },
};
