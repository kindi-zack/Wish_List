<template>
  <div class="login">
      <form @submit.prevent="login" id='loginForm' class="my-4">
        <div class="form-group">
          <label for="email-login">Email</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            name="email-login"
            id="email-login"
            required
          />
        </div>
<!--
        <div class="form-group">
          <label for="username-login">username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            name="username-login"
            id="username-login"
            required
          />
        </div>
 -->
        <div class="form-group">
          <label for="password-login">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            name="password-login"
            id="password-login"
            required
          />
        </div>
        <button id="btn-login" type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
      <a href="#" id='show-reg'>Register</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
