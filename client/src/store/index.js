import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      const { email, username, password } = payload
      axios({
        url: 'user/login',
        method: 'POST',
        data: {
          email, username, password
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
