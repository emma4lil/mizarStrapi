"use strict";

/**
 * A set of functions called "actions" for `newuser`
 */

module.exports = {
  create: async (ctx, next) => {
    const { username, email, phone, password } = ctx.request.body;
    console.log(body);
  },
};
