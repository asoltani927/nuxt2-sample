import { buildQuery } from '~/services/httpService'

// actions
export const GET_PRODUCTS = 'GET_PRODUCTS'

// mutations
export const CALL_PRODUCTS = 'CALL_PRODUCTS'

export default {
  name: 'products',
  namespaced: true,
  state () {
    return {
      records: [],
      page: 0,
      count: 15,
      total: 0,
      total_page: 0
    }
  },
  getters: {
    getRecords: (state) => {
      return state.records
    },
    getTotal: (state) => {
      return state.records
    },
    getPage: (state) => {
      return state.page
    },
    getTotalPage: (state) => {
      return state.total_page
    },
    getCount: (state) => {
      return state.count
    }
  },
  actions: {
    [GET_PRODUCTS] (context, query) {
      return this.$axios.$get(`/products${buildQuery(query ?? {})}`).then((payload) => {
        context.commit(CALL_PRODUCTS, payload)
      })
    }
  },

  mutations: {
    [CALL_PRODUCTS] (state, payload) {
      state.records = payload.data
      state.page = payload.page
      state.count = payload.count
      state.total = payload.total
      state.total_page = payload.total_page
    }
  }
}
