import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogOut: false
  },
  mutations: {
    SET_SHOWLOGOUT (state, value) {
      state.showLogOut = value
    }
  },
  actions: {
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
          console.log(data)
          localStorage.access_token = data.access_token
          context.commit('SET_SHOWLOGOUT', true)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
