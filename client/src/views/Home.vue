<template>
  <div class="container">
    <div id="home-container" class="">
          <div class="row">
              <div class="col-md-4">
                  <!-- This is Saldo container  -->
                    <div id="saldo-container" class="card" >
                        <img src="../images/balance.jpeg" class="img-thumbnail" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Current Saldo</h5>
                        <!-- <p class="card-text" id="current_saldo"></p> -->
                        </div>
                    </div>
              </div>
              <div class="col-md-8">
                <!-- This is Wishlists -->
                <div id="wishlists-container">
                    <h1 class="bg-dark p-2 rounded-sm text-center text-white">My Wishlists</h1>
                    <h3 class="text-center" id="empty-wishlist">You don't have any wishlist</h3>
                    <div id="wishlists" class="row my-2 px-2">
                    <!-- Each of comic will have one of this card -->
                      <WishlistCard v-for="wl in wishlists" :key="wl.id" :wl="wl"/>
                    </div>
                </div>
              </div>
          </div>
          <div class="row justify-content-end my-4">
              <button class="btn btn-dark" id="btn-show-add">Add Wishlist</button>
          </div>
      </div>
      <!-- This is form page to update a comic -->
      <WishlistForm />
  </div>
</template>

<script>
// @ is an alias to /src
import WishlistForm from '../components/WishlistForm.vue'
import WishlistCard from '../components/WishlistCard.vue'
export default {
  name: 'Home',
  components: {
    WishlistForm,
    WishlistCard
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  created () {
    this.$store.dispatch('fetchWishList')
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>
