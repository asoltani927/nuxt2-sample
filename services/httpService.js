
// eslint-disable-next-line camelcase
const http_build_query = require('js-http-build-query')

export const buildQuery = (query) => {
  const queryString = http_build_query(query)
  return queryString ? `?${queryString}` : ''
}
