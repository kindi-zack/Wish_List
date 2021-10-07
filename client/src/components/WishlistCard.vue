<template>
<div id="wl" >
  <div v-for="wl in wishlists" :key="wl.id"  class="card" style="width: 18rem;">
  <img :src="wl.image_url" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{wl.name}}</h5>
    <p class="card-text">{{wl.price}}</p>
    <p class="card-text">{{wl.description}}</p>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
</div>
</div>
</template>

<script>
export default {
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  }
}
</script>

<style>

</style>
