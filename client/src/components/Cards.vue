<template>
  <div class="col-md-4 mb-3">
    <h4>{{ item.name }}</h4>
    <img :src="item.image_url" alt="">
    <p>Rp {{ item.price}}</p>
    <p id="desc">{{ item.description}}</p>
    <button @click="deleteWL(item.id)" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: ['item'],
  methods: {
    deleteWL (id) {
      this.$store.dispatch('deleteWL', { id })
    }
  }
}
</script>

<style>
  #desc {
    max-height: 50px;
    overflow: scroll;
  }
</style>
