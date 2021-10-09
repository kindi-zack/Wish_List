<template>
      <nav class="navbar navbar-light bg-dark justify-content-between">
        <a class="navbar-brand text-white">My Wishlist</a>
        <button @click="logout" id="btn-logout" class="btn btn-danger">Logout</button>
    </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
