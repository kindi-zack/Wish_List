<template>
  <div class="home">
          <div id="home-container" class="">
          <div class="row">
              <div class="col-md-4">
                  <!-- This is Saldo container  -->
                    <div id="saldo-container" class="card" >
                        <img src="../../images/balance.jpeg" class="img-thumbnail" alt="...">
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
                    <div id="wishlists" class="row my-4 px-4">
                    <!-- Each of comic will have one of this card -->
                    </div>
                </div>
              </div>
          </div>
          <div class="row justify-content-end my-4">
              <button class="btn btn-dark" id="btn-show-add">Add Wishlist</button>
          </div>
      </div>
      <!-- This is form page to update a comic -->
      <div id="add-container" class="">
        <h1>Add Wishlist</h1>
        <form id="add-form" class="my-4">
          <div class="form-group">
            <label for="wl-name">Name</label>
            <input id="wl-name" type="text" class="form-control" name="wl-name" placeholder="Wishlist Name" />
          </div>
          <div class="form-group">
            <label for="price">Image</label>
            <input type="text" class="form-control" name="wl-price" id="wl-image" placeholder="Wishlist image url"/>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" name="wl-price" id="wl-price" placeholder="Wishlist price"/>
          </div>
          <div class="form-group">
            <label for="imageUrl">Description</label>
            <input type="text" class="form-control" name="wl-desc" id="wl-desc" placeholder="Description"/>
          </div>
          <button id="btn-add" type="submit" class="btn btn-dark">
            Submit
          </button>
          <button id="btn-cancel" type="submit" class="btn btn-dark">
            Cancel
          </button>
        </form>
      </div>
  </div>
</template>

<script>
</script>
