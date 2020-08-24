"use strict";

/**
 * A set of functions called "actions" for `newuser`
 */

module.exports = {
  create: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
