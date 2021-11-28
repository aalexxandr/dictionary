'use strict';
const {sanitizeEntity} = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  sanitizeWord: (word) => sanitizeEntity(word, {model: strapi.models.words}),

  isDictionaryEditor: async (dictionaryId, userId) => !!await strapi.services.dictionaries.findOne({
    id: dictionaryId,
    editors_contains: userId,
  })
};
