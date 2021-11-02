import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../api/axios'
import Router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    wishlists: []
  },
  mutations: {
    SET_USER (state, value) {
      state.user = value
    },
    SET_WISHLISTS (state, value) {
      state.wishlists = value
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      Axios({
        url: 'user/login',
        method: 'POST',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.access_token = data.access_token
          Router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    showWl (context) {
      Axios({
        url: 'wishlists',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          const user = data[0].User
          // console.log({ user, data })
          context.commit('SET_USER', user)
          // console.log(user)
          context.commit('SET_WISHLISTS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
