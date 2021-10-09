/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    whoAmI: '',
    isLogin: true,
    wishlists: []
  },
  mutations: {
    SET_ISLOGIN (state, value) {
      this.state.isLogin = value
    },
    SET_WISHLISTS (state, value) {
      this.state.wishlists = value
    },
    SET_WHOAMI (state, value) {
      this.state.whoAmI = value
    }
  },
  actions: {
    deleteWishlist (context, payload) {
      const { id } = payload
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
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
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch(({ response }) => {
              console.log(response.err)
            })
        }
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
          console.log(data.data)
          context.commit('SET_WISHLISTS', data.data)
          context.commit('SET_WHOAMI', data.whoAmI)
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
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
        })
        .catch(({ response }) => {
          console.log(response.data)
          Swal.fire({
            icon: 'error',
            title: response.data
          })
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
          Swal.fire({
            icon: 'success',
            text: 'Register Success'
          })
        })
        .catch(({ response }) => {
          console.log(response.data)
          Swal.fire({
            icon: 'error',
            title: response.data
          })
        })
    }
  },
  modules: {
  }
})
