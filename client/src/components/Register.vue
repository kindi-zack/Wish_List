<template>
  <div>
    <form @submit.prevent="register" id='registerForm' class="my-4">
        <div class="form-group">
          <label for="email-login">Email</label>
          <input
            v-model='email'
            type="email"
            class="form-control"
            name="email-login"
            id="email-reg"
            required
          />
        </div>
        <div class="form-group">
          <label for="password-login">Password</label>
          <input
            v-model='password'
            type="password"
            class="form-control"
            name="password-login"
            id="password-reg"
            required
          />
        </div>
        <button id="btn-reg" type="submit" class="btn btn-dark">
          Register
        </button>
    </form>
    <a @click.prevent="showLogin" href="">Login</a>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    showLogin () {
      this.$emit('show-hide')
    },
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })

      this.email = ''
      this.password = ''
    }
  }

}
</script>

<style>

</style>
