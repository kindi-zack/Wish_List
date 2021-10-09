<template>
      <nav class="navbar navbar-light bg-dark justify-content-between">
        <a @click.prevent="home" class="navbar-brand text-white">My Wishlist</a>
        <button v-if="showLogout" @click="logout" id="btn-logout" class="btn btn-danger">Logout</button>
    </nav>
</template>

<script>
export default {
  computed: {
    showLogout () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login').catch(err => console.log(err))
    },
    home () {
      this.$router.push({ name: 'Home' })
        .catch(() => {
          console.log('home')
        })
    }
  }
}
</script>

<style>
nav {
  padding: 10px;
}
</style>
