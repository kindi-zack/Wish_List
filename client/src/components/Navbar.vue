<template>
      <nav class="navbar navbar-light bg-dark justify-content-between">
        <a class="navbar-brand text-white">My Wishlist</a>
        <button v-show="outBtn" @click="logout" id="btn-logout" class="btn btn-danger">Logout</button>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  computed: {
    outBtn () {
      return this.$store.state.outBtn
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_OUTBTN', false)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
nav {
  padding: 5px;
}
</style>
