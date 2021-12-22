<template>
      <div class="container">
      <!-- Logout button and notification for success / error event -->

      <div id="alert" class="alert alert-dismissible fade" role="alert">
        Your notification goes here
      </div>

      <!-- This is Login Form  -->
      <div id="login-container" class="bg-light p-3 rounded mb-5">
        <div class="row d-flex">
          <div class="col-md-4">
            <h2 class="text-dark">Welcome to</h2>
            <h2 class="text-dark">Shopping WishList</h2>
            <p v-show="showLog" id='loginNotif' class="text-dark">Please Login first</p>
            <p v-show="!showLog" id='regNotif' class="text-dark">Please Register Your Account</p>

            <Login @toggle-reg="changeShowLog" v-if="showLog" />

            <Register @toggle-login="changeShowLog" v-else />

          </div>
          <div class="col-md-8">
            <img class="card-img" src="../../images/background_login.jpeg" alt="">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
export default {
  name: 'Log-page',
  data () {
    return {
      showLog: true
    }
  },
  methods: {
    changeShowLog () {
      this.showLog = !this.showLog
    }
  },
  components: {
    Login,
    Register
  },
  beforeRouteEnter (from, to, next) {
    if (!localStorage.access_token) next()
    next('/')
  }
}
</script>

<style>

</style>
