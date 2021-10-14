<template>
      <nav class="navbar navbar-light bg-dark justify-content-between">
        <a class="navbar-brand text-white">My Wishlist</a>
        <button @click="logout" v-show="showLogOut" id="btn-logout" class="btn btn-danger">Logout</button>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      // showLogOut: false
    }
  },
  computed: {
    showLogOut () {
      return this.$store.state.showLogOut
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('SET_SHOWLOGOUT', false)
    }
  },
  created () {
    if (localStorage.access_token) this.$store.commit('SET_SHOWLOGOUT', true)
  }
}
</script>

<style>

</style>
