'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async ctx => {
    const userId = ctx.state.user.id

    const {dictionaryId} = ctx.params

    const entity = await strapi.services.dictionaries.findOne({
      viewers: userId,
      id: dictionaryId,
      _sort: 'created_at:asc',
    })

    return entity?.words.map(word => strapi.services.words.sanitizeWord(word))
  },
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
