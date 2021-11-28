'use strict';

module.exports = {
  create: async ctx => {
    const userId = ctx.state.user.id

    const {name} = ctx.request.body

    const entity = await strapi.services.dictionaries.create({
      name,
      owner: userId,
      editors: userId,
    })

    return strapi.services.dictionaries.sanitizeDictionary(entity)
  },
  delete: async ctx => {
    const userId = ctx.state.user.id

    const {dictionaryId} = ctx.params

    const entity = await strapi.services.dictionaries.delete({id: dictionaryId, owner: userId})

    return strapi.services.dictionaries.sanitizeDictionary(entity)
  },
  update: async ctx => {
    const userId = ctx.state.user.id

    const {name} = ctx.request.body
    const {dictionaryId} = ctx.params

    const entity = await strapi.services.dictionaries.update({id: dictionaryId, owner: userId}, {name})

    return strapi.services.dictionaries.sanitizeDictionary(entity)
  }
};
