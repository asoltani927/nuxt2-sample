import { buildQuery } from '~/services/httpService'

// actions
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS_SEARCH = 'SET_PRODUCTS_SEARCH'

// mutations
export const CALL_PRODUCTS = 'CALL_PRODUCTS'
export const SET_SEARCH = 'SET_SEARCH'

export default {
  name: 'products',
  namespaced: true,
  state () {
    return {
      search: '',
      records: [],
      page: 0,
      count: 15,
      total: 0,
      total_page: 0,
      from: 0,
      to: 0
    }
  },
  getters: {
    search: (state) => {
      return state.search
    },
    records: (state) => {
      return state.records ?? []
    },
    total: (state) => {
      return state.total
    },
    page: (state) => {
      return state.page
    },
    totalPage: (state) => {
      return state.total_page
    },
    count: (state) => {
      return state.count
    },
    from: (state) => {
      return state.from
    },
    to: (state) => {
      return state.to
    }
  },
  actions: {
    [GET_PRODUCTS] (context, query) {
      query.search = context.getters.search
      return this.$axios.$get(`/products${buildQuery(query ?? {})}`).then((payload) => {
        context.commit(CALL_PRODUCTS, payload)
      })
    },
    [SET_PRODUCTS_SEARCH] (context, query) {
      context.commit(SET_SEARCH, query)
    }
  },

  mutations: {
    [CALL_PRODUCTS] (state, payload) {
      state.records = payload.data
      state.page = payload.page
      state.count = payload.count
      state.total = payload.total
      state.total_page = payload.total_page
      state.from = payload.from
      state.to = payload.to
    },
    [SET_SEARCH] (state, payload) {
      state.search = payload
    }
  }
}
