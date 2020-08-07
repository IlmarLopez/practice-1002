<template>
  <section class="login">
    <div class="row">
      <div class="col-xl-12">
        <form class="form w-50 m-auto p-3" @submit.prevent="onLogin">
          <h2 class="title">Login</h2>
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" class="form-control" id="username">
          </div>
          <div class="form-group">
            <label for="pasword">Password</label>
            <inputv-model="password" type="password" class="form-control" id="pasword">
          </div>
          <small
            v-if="errMessage"
            class="d-block mb-1 text-danger text-left"
          >
            {{ errMessage }}
          </small>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      username: null,
      password: null,
      errMessage: null,
    };
  },
  methods: {
    onLogin() {
      this.errMessage = null;
      const { username, password } = this;
      this.login({ username, password }).then(() => {
        this.$router.replace({ path: '/' });
      }).catch((err) => {
        this.errMessage = err.data.errorMessage;
        console.log('err', err);
      });
    },
    ...mapActions({
      login: 'auth/AUTH_REQUEST',
    }),
  },
};
</script>

<style lang="sass" scoped>
.login
  overflow: hidden
  min-height: 100vh
  display: flex
  align-items: center
.form
  border-radius: 10px 10px 10px 10px
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3)
.title
  text-align: start
</style>
