'use strict';

const {sanitizeEntity} = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const sanitizeWord = (word) => sanitizeEntity(word, {model: strapi.models.words})

module.exports = {
  find: async ctx => {
    const {id} = ctx.state.user

    const entities = await strapi.services.words.find({
      _sort: 'created_at:asc',
      user: id,
    })

    return entities.map(entity => sanitizeWord(entity))
  },
  delete: async ctx => {
    const {id} = ctx.state.user

    const wordId = ctx.params.id

    const entity = await strapi.services.words.delete({
      id: wordId, user: id
    })

    return sanitizeWord(entity)
  },
  update: async ctx => {
    const { id } = ctx.params
    const userId = ctx.state.user.id

    const entity = await strapi.services.words.update({id, user: userId}, ctx.request.body)

    return sanitizeWord(entity)
  },
  create: async ctx => {
    const entity = await strapi.services.words.create(ctx.request.body)

    return sanitizeWord(entity)
  }
};
