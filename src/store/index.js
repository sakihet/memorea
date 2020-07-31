import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStorage = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type !== 'init') {
      window.localStorage.setItem('text', JSON.stringify(state.text))
    }
  })
}

export default new Vuex.Store({
  state: {
    text: ''
  },
  plugins: [
    localStorage
  ],
  getters: {
    getText: state => {
      return state.text
    }
  },
  mutations: {
    init (state) {
      if (window.localStorage.getItem('text')) {
        state.text = JSON.parse(window.localStorage.getItem('text'))
      }
    },
    update (state, payload) {
      state.text = payload
    }
  },
  actions: {
    init ({ commit }) {
      commit('init')
    },
    update ({ commit }, params) {
      commit('update', params)
    }
  },
  modules: {
  }
})
