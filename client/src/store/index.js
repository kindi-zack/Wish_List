/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogOut: false,
    wishlists: [],
    user: [],
    saldo: 0
  },
  mutations: {
    SET_SHOWLOGOUT (state, value) {
      state.showLogOut = value
    },
    SET_USER (state, value) {
      state.user = value
    },
    SET_SALDO (state, value) {
      state.saldo = value
    },
    SET_WISHLISTS (state, value) {
      state.wishlists = value
    }
  },
  actions: {
    deleteWL (context, payload) {
      const { id } = payload
      Swal.fire({
        title: 'Do you want to Delete This Item ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'Don\'t Delete'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios({
            url: `wishlists/${id}`,
            method: 'delete',
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(({ data }) => {
              console.log(data)
              context.dispatch('fetchWishlist')
              Swal.fire('Deleted!', '', 'success')
            })
            .catch(({ response }) => {
              console.log(response.data)
            })
        } else if (result.isDenied) {
          Swal.fire('Delete Cenceled', '', 'info')
        }
      })
    },
    addWishlist (context, payload) {
      const { price, name, image_url, description } = payload
      Swal.fire({
        title: 'Are sure to add this Item ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Add',
        denyButtonText: "Don't Add"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios({
            url: 'wishlists',
            method: 'post',
            headers: {
              access_token: localStorage.access_token
            },
            data: {
              price, name, image_url, description
            }
          })
            .then(({ data }) => {
              console.log(data)
              context.dispatch('fetchWishlist')
              Swal.fire('added!', '', 'success')
            })
            .catch(({ response }) => {
              console.log(response.data.msg)
              Swal.fire(response.data.msg, '', 'error')
            })
        } else if (result.isDenied) {
          Swal.fire('Canceled Adding Item', '', 'info')
        }
      })
    },
    fetchWishlist (context) {
      axios({
        url: 'wishlists',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_WISHLISTS', data.data)
          context.commit('SET_USER', data.user)
          const result1 = data.user
          return result1
        })
        .then(result1 => {
          return axios({
            url: `user/${result1.id}`,
            method: 'get'
          })
        })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_SALDO', data.saldo)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    register (context, payload) {
      const { email, password } = payload
      axios({
        url: 'register',
        method: 'post',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(({ response }) => {
          console.log(response.data)
          Swal.fire({
            icon: 'error',
            title: response.data
          })
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: 'login',
        method: 'post',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.access_token = data.access_token
          context.commit('SET_SHOWLOGOUT', true)
          router.push('/')
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.msg
          })
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
