<template>
  <div class="notfound">
    <h1>404</h1>
    <h1>PAGE IS NOT FOUND</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_OUTBTN', true)
  }
}
</script>

<style>

</style>
