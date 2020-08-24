module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      const passwordHashed = await strapi.api.user.services.user.hashPassword(
        data.password
      );
      data.password = passwordHashed;
    },
  },
};
