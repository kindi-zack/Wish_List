<template>
<div>
                <form id='registerForm' class="my-4">
              <div class="form-group">
                <label for="email-login">Email</label>
                <input
                  v-model="email"
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
                  v-model="password"
                  type="password"
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
          <a @click.prevent="logHideShow" href="#" id='show-login'>login</a>
</div>
</template>

<script>
export default {
  name: 'Register',
  props: ['logHideShow'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
        .then(_ => {
          this.email = ''
          this.password = ''
          this.logHideShow()
        })
    }
  }
}
</script>

<style>

</style>
