"use strict";

/**
 * A set of functions called "actions" for `newuser`
 */

module.exports = {
  create: async (ctx, next) => {
    const advanced = await strapi
      .store({
        environment: "",
        type: "plugin",
        name: "users-permissions",
        key: "advanced",
      })
      .get();

    const { username, email, phone, password, role } = ctx.request.body;
    const body = ctx.request.body;

    const pwd = await strapi.plugins[
      "users-permissions"
    ].services.user.hashPassword(password);
    body.password = pwd;

    if (!role) {
      const defaultRole = await strapi
        .query("role", "users-permissions")
        .findOne({ type: advanced.default_role }, []);

      body.role = defaultRole.id;
    }

    const data = await strapi.plugins["users-permissions"].services.user.add(
      body
    );

    const wallet = {
      balance: 0,
      floating_balance: 0,
      user: data.id,
    };

    wallet = await strapi.query("wallet").create(wallet);
    console.log(wallet);
  },
};
