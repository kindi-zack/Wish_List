<template>
        <div id="add-container" class="">
        <h1>Add Wishlist</h1>
        <form @submit.prevent="addWl" id="add-form" class="my-4">
          <div class="form-group">
            <label for="wl-name">Name</label>
            <input v-model="name" id="wl-name" type="text" class="form-control" name="wl-name" placeholder="Wishlist Name" />
          </div>
          <div class="form-group">
            <label for="price">Image</label>
            <input type="text" v-model="image_url" class="form-control" name="wl-price" id="wl-image" placeholder="Wishlist image url"/>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" v-model="price" name="wl-price" id="wl-price" placeholder="Wishlist price"/>
          </div>
          <div class="form-group">
            <label for="imageUrl">Description</label>
            <input type="text" class="form-control" name="wl-desc" v-model="description" id="wl-desc" placeholder="Description"/>
          </div>
          <button id="btn-add" type="submit" class="btn btn-dark">
            Submit
          </button>
          <button id="btn-cancel" type="" class="btn btn-dark">
            Cancel
          </button>
        </form>
      </div>
</template>

<script>
export default {
  name: 'add-form',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      description: ''
    }
  },
  methods: {
    addWl () {
      this.$store.dispatch('addWl', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        description: this.description
      })

      this.name = ''
      this.image_url = ''
      this.price = ''
      this.description = ''
    }
  }
}
</script>

<style>

</style>
