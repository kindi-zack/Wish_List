<template>
<div class="container">
<div id="login-container" class="bg-light p-3 rounded mb-5">
        <div class="row d-flex">
          <div class="col-md-4">
            <h2 class="text-dark">Welcome to</h2>
            <h2 class="text-dark">Shopping WishList</h2>
            <p v-if="logForm" id='loginNotif' class="text-dark">Please Login first</p>
            <p v-else id='regNotif' class="text-dark">Please Register Your Account</p>

<!-- LOGIN FORM -->
            <Login v-if="logForm" :logHideShow="logHideShow"/>

<!-- REGISTER -->
            <Register v-else :logHideShow="logHideShow"/>

          </div>
          <div class="col-md-8">
            <img class="card-img" src="../images/background_login.jpeg" alt="">
          </div>
        </div>
      </div>
</div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
export default {
  data () {
    return {
      logForm: true
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    logHideShow () {
      this.logForm = !this.logForm
    }
  },
  created () {
    this.$store.commit('SET_ISLOGIN', false)
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
