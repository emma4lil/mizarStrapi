'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    findProductsByTag(params, populate) {
        const result = strapi.query("product").find({
            
        },);
        const products = result.toObject()
        return products
    }
};
