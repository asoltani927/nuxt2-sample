// actions
export const TOGGLE_MENU = 'TOGGLE_MENU'

// mutations
export const SET_TOGGLE_MENU = 'SET_TOGGLE_MENU'

export default {
  name: 'menu',
  namespaced: true,
  state () {
    return {
      toggle: false
    }
  },
  getters: {
    isToggleMenu: (state) => {
      return state.toggle
    }
  },
  actions: {
    [TOGGLE_MENU] (context, query) {
      context.commit(SET_TOGGLE_MENU, query)
    }
  },

  mutations: {
    [SET_TOGGLE_MENU] (state, payload) {
      state.toggle = !state.toggle
    }
  }
}
