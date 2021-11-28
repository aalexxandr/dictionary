'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
    const userId = ctx.state.user.id

    const {dictionary, name, translation} = ctx.request.body

    if (await strapi.services.words.isDictionaryEditor(dictionary, userId)) {
      const entity = await strapi.services.words.create({
        name,
        dictionary,
        translation,
      })

      return strapi.services.words.sanitizeWord(entity)
    }

    return null
  },
  update: async ctx => {
    const userId = ctx.state.user.id

    const {dictionaryId, wordId} = ctx.params
    const {name, translation} = ctx.request.body

    if (await strapi.services.words.isDictionaryEditor(dictionaryId, userId)) {
      const entity = await strapi.services.words.update({id: wordId}, {
        name,
        translation,
      })

      return strapi.services.words.sanitizeWord(entity)
    }

    return null
  },
  find: async ctx => {
    const {id} = ctx.state.user

    const entities = await strapi.services.words.find({
      _sort: 'created_at:asc',
      user: id,
    })

    return entities.map(entity => strapi.services.words.sanitizeWord(entity))
  },
  delete: async ctx => {
    const userId = ctx.state.user.id

    const {dictionaryId, wordId} = ctx.params

    if(await strapi.services.words.isDictionaryEditor(dictionaryId, userId)) {
      const entity = await strapi.services.words.delete({id:wordId})

      return strapi.services.words.sanitizeWord(entity)
    }

    return null
  },
};
