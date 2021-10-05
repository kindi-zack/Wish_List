<template>
  <div>
                <form id='loginForm' class="my-4">
              <div class="form-group">
                <label for="email-login">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email-login"
                  id="email-login"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password-login">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password-login"
                  id="password-login"
                  required
                />
              </div>
              <button id="btn-login" type="submit" class="btn btn-dark">
                Submit
              </button>
            </form>
            <a href="#" id='show-reg'>Register</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
