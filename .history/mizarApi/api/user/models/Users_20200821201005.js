module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async afterCreate(result, data) {
      console.log(result);
    },
  },
};
