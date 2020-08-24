"use strict";

/**
 * A set of functions called "actions" for `newuser`
 */

module.exports = {
  create: async (ctx, next) => {
    const body = ctx.req.body;
    console.log(body);
  },
};
