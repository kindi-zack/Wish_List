import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_ISLOGIN (state, value) {
      this.state.isLogin = value
    }
  },
  actions: {
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
