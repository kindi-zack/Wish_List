<template>
  <div id="login">
    <form @submit.prevent="login" id='loginForm' class="my-4">
      <div class="form-group">
        <label for="email-login">Email</label>
        <input
          v-model="email"
          type="text"
          class="form-control"
          name="email-login"
          required
        />
      </div>
      <div class="form-group">
        <label for="password-login">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          name="password-login"
          required
        />
      </div>
      <button id="btn-login" type="submit" class="btn btn-dark">
        Submit
      </button>
    </form>
    <a @click.prevent="$emit('toggle-reg')" href="#" id='show-reg'>Register</a>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
