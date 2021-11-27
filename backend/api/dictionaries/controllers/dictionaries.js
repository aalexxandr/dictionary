'use strict';

const { sanitizeEntity } = require('strapi-utils');

const sanitizeDictionary = (dictionary) => sanitizeEntity(dictionary, {model: strapi.models.dictionaries})

module.exports = {
  create: async ctx => {
    const {id} = ctx.state.user

    const entity = await strapi.services.dictionaries.create({...ctx.request.body, owner: id, editors: id})

    return sanitizeDictionary(entity)
  },
  delete: async ctx => {
    const {id} = ctx.state.user
    const dictionaryId = ctx.params.id

    const entity = await strapi.services.dictionaries.delete({id: dictionaryId, owner: id})

    return sanitizeDictionary(entity)
  }
};
