<template>
  <div class="home">
    <div class="container">
                <div id="home-container" class="">
          <div class="row">
              <div class="col-md-4">
                  <!-- This is Saldo container  -->
                    <div id="saldo-container" class="card" >
                        <img src="../../images/balance.jpeg" class="img-thumbnail" alt="...">
                        <div class="card-body">
                        <h3>{{ user.username }}</h3>
                        <h5 class="card-title">Current Saldo</h5>
                        <p class="card-text" id="current_saldo">Rp {{user.saldo}}</p>
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
                      <Cards v-for="item of wishlists" :key="item.id" :item="item" />
                    </div>
                </div>
              </div>
          </div>
          <div class="row justify-content-end my-4">
              <button @click="showAddFrom" class="btn btn-dark" id="btn-show-add">Add Wishlist</button>
          </div>
      </div>
      <!-- This is form page to update a comic -->
      <AddFrom @add-toggle="showAddFrom" @cancel-btn="showAddFrom" v-show="showForm" />
    </div>
  </div>
</template>

<script>
import AddFrom from '../components/Add-from.vue'
import Cards from '../components/Cards.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      showForm: false
    }
  },
  components: {
    AddFrom,
    Cards
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  methods: {
    showAddFrom () {
      this.showForm = !this.showForm
    }
  },
  created () {
    this.$store.dispatch('showWl')
    this.$store.commit('SET_OUTBTN', true)
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
