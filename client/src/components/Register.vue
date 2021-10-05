<template>
              <form id='registerForm' class="my-4">
              <div class="form-group">
                <label for="email-login">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email-login"
                  id="email-reg"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password-login">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password-login"
                  id="password-reg"
                  required
                />
              </div>
              <button id="btn-reg" type="submit" class="btn btn-dark">
                Register
              </button>
            </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
