'use strict';

module.exports = {
  sanitizeEntity: (data) => ({
    'userJwt': data.jwt,
    'userId': data.user.id,
    'userEmail': data.user.email,
    'userName': data.user.username,
  }),
};
