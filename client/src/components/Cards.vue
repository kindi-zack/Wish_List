<template>
  <div class="card col-md-4">
    <img :src="item.image_url" alt="" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">{{item.name}}</h4>
      <p class="card-text">Rp {{item.price}}</p>
      <p class="card-text">{{item.description}}</p>
      <a href="" class="btn btn-danger">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: ['item']

}
</script>

<style>

</style>
