<template>
  <div class="home container">
          <div id="home-container" class="">
          <div class="row">
              <div class="col-md-4">
                  <!-- This is Saldo container  -->
                    <div id="saldo-container" class="card" >
                        <img src="../images/balance.jpeg" class="img-thumbnail" alt="...">
                        <div class="card-body">
                        <p class="card-text" id="user">{{ user.email }}</p>
                        <h5 class="card-title">Current Saldo</h5>
                        <p class="card-text" id="current_saldo">Rp {{ saldo }}</p>
                        </div>
                    </div>
              </div>
              <div class="col-md-8">
                <!-- This is Wishlists -->
                <div id="wishlists-container">
                    <h1 class="bg-dark p-2 rounded-sm text-center text-white">My Wishlists</h1>
                    <h3 class="text-center" id="empty-wishlist">You don't have any wishlist</h3>
                    <div id="wishlists" class="row my-4 px-4">
                    <!-- Each of comic will have one of this card -->
                      <div v-for="item in wishlists" :key="item.id" class="col-md-4">
                        <h4>{{ item.name }}</h4>
                        <img :src="item.image_url" alt="">
                        <p>price {{ item.price}}</p>
                        <p>desc {{ item.description}}</p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="row justify-content-end my-4">
              <button @click="toggleAdd" class="btn btn-dark" id="btn-show-add">Add Wishlist</button>
          </div>
      </div>
      <!-- This is form page to update a comic -->
      <AddForm v-show="showAddForm" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from '../components/AddForm.vue'
export default {
  name: 'Home',
  data () {
    return {
      showAddForm: false
    }
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    },
    user () {
      return this.$store.state.user
    },
    saldo () {
      return this.$store.state.saldo
    }
  },
  methods: {
    toggleAdd () {
      this.showAddForm = !this.showAddForm
    }
  },
  components: {
    AddForm
  },
  beforeRouteEnter (from, to, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next('/login')
    }
  },
  created () {
    this.$store.dispatch('fetchWishlist')
  }
}
</script>

<style>
  #wishlists-container img {
    width: 200px;
  }
</style>
