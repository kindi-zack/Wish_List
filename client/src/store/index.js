import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../api/axios'
import Router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    wishlists: [],
    outBtn: false
  },
  mutations: {
    SET_USER (state, value) {
      state.user = value
    },
    SET_WISHLISTS (state, value) {
      state.wishlists = value
    },
    SET_OUTBTN (state, value) {
      state.outBtn = value
    }
  },
  actions: {
    register (context, payload) {
      const { email, username, password } = payload
      Axios({
        url: 'user/register',
        method: 'post',
        data: {
          email, username, password
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(({ response }) => {
          console.log(response.data)
          // return false
        })
    },
    deleteWl (context, payload) {
      const { id } = payload
      Axios({
        url: `wishlists/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    addWl (context, payload) {
      const { name, price, description } = payload
      const imageUrl = payload.image_url
      Axios({
        url: 'wishlists',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          price,
          description,
          image_url: imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(({ response }) => {
          console.log((response.data))
        })
    },
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
          this.context.commit('SET_OUTBTN', true)
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
          const user = data.user
          // console.log({ user, data })
          // console.log(user)
          context.commit('SET_WISHLISTS', data.data)

          return Axios({
            url: `user/${user.id}`,
            method: 'get'
          })
        })
        .then(({ data }) => {
          context.commit('SET_USER', data)
          context.dispatch('showWl')
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
