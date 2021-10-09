<template>
 <div class="col-md-4 mb-4">
  <img :src="wl.image_url" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{wl.name}}</h5>
    <p class="card-text">{{wl.price}}</p>
    <p class="card-text">{{wl.description}}</p>
    <a href="#" class="btn btn-primary">Delete</a>
</div>
</div>
</template>

<script>
export default {
  props: ['wl'],
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  }
}
</script>

<style>

</style>
