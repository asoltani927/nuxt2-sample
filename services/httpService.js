
// eslint-disable-next-line camelcase
const http_build_query = require('js-http-build-query')

export const buildQuery = (query) => {
  return http_build_query(query)
}
