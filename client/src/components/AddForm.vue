<template>
      <div id="add-container" class="">
        <h1>Add Wishlist</h1>
        <form @submit.prevent="addWishlist" id="add-form" class="my-4">
          <div class="form-group">
            <label for="wl-name">Name</label>
            <input required v-model="name" id="wl-name" type="text" class="form-control" name="wl-name" placeholder="Wishlist Name" />
          </div>
          <div class="form-group">
            <label for="price">Image</label>
            <input v-model="image_url" type="text" class="form-control" name="wl-price" id="wl-image" placeholder="Wishlist image url"/>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input v-model="price" type="number" class="form-control" name="wl-price" id="wl-price" placeholder="Wishlist price"/>
          </div>
          <div class="form-group">
            <label for="desc">Description</label>
            <input v-model="description" type="text" class="form-control" name="wl-desc" id="wl-desc" placeholder="Description"/>
          </div>
          <button id="btn-add" type="submit" class="btn btn-dark">
            Submit
          </button>
          <button @click.prevent="$emit('show-add')" type="click" id="btn-cancel" class="btn btn-dark">
            Cancel
          </button>
        </form>
      </div>
</template>

<script>
export default {
  name: 'addForm',
  data () {
    return {
      name: '',
      image_url: '',
      description: '',
      price: ''
    }
  },
  methods: {
    addWishlist () {
      this.$store.dispatch('addWishlist', {
        name: this.name,
        image_url: this.image_url,
        description: this.description,
        price: this.price
      })
      this.name = ''
      this.image_url = ''
      this.description = ''
      this.price = ''
    }
  }
}
</script>

<style>

</style>
