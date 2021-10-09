/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    wishlists: []
  },
  mutations: {
    SET_ISLOGIN (state, value) {
      this.state.isLogin = value
    },
    SET_WISHLISTS (state, value) {
      this.state.wishlists = value
    }
  },
  actions: {
    deleteWishlist (context, payload) {
      const { id } = payload
      axios({
        url: `wishlists/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchWishList')
        })
        .catch(({ response }) => {
          console.log(response.err)
        })
    },
    addWishlist (context, payload) {
      const { image_url, price, name, description } = payload

      axios({
        url: 'wishlists',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          image_url, price, name, description
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchWishList')
        })
        .catch(({ response }) => {
          console.log(response.err)
        })
    },
    fetchWishList (context, payload) {
      axios({
        url: 'wishlists',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_WISHLISTS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: 'login',
        method: 'POST',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          context.commit('SET_ISLOGIN', true)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    register (context, payload) {
      const { email, password } = payload
      axios({
        url: 'register',
        method: 'POST',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
