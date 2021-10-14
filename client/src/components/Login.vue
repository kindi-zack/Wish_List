<template>
    <div>
        <form @submit.prevent="login" id='loginForm' class="my-4">
            <div class="form-group">
              <label for="email-login">Email</label>
              <input
                v-model='email'
                type="email"
                class="form-control"
                name="email-login"
                id="email-login"
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
                id="password-login"
                required
              />
            </div>
            <button id="btn-login" type="submit" class="btn btn-dark">
              Submit
            </button>
        </form>
        <a @click.prevent="$emit('show-hide')" href="#" id='show-reg'>Register</a>
    </div>
</template>

<script>
export default {
  name: 'Logiin',
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
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
