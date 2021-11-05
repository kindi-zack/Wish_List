<template>
  <div id="register">
    <form id='registerForm' class="my-4">
      <div class="form-group">
        <label for="email-login">Email</label>
        <input
          type="email"
          class="form-control"
          name="email-login"
          id="email-reg"
          v-model="regEmail"
          required
        />
      </div>
      <div class="form-group">
        <label for="email-login">Username</label>
        <input
          type="text"
          v-model="regUsername"
          class="form-control"
          name="user-login"
          required
        />
      </div>
      <div class="form-group">
        <label for="password-login">Password</label>
        <input
          type="password"
          v-model="regPassword"
          class="form-control"
          name="password-login"
          id="password-reg"
          required
        />
      </div>
      <button @click.prevent="register" id="btn-reg" type="submit" class="btn btn-dark">
        Register
      </button>
    </form>
    <a href="" @click.prevent="$emit('toggle-login')">Login</a>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      regEmail: '',
      regUsername: '',
      regPassword: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        email: this.regEmail,
        username: this.regUsername,
        password: this.regPassword
      })
      this.regEmail = ''
      this.regUsername = ''
      this.regPassword = ''

      this.$emit('toggle-login')
    }
  }
}
</script>

<style>

</style>
