<template>
  <div class="home">
    <header class="header d-flex justify-content-between mb-3">
      <div class="d-flex">
        <div class="menu d-flex px-2 align-items-center">
          <i class="fas fa-bars"></i>
        </div>
        <div class="logo d-flex align-items-center">
          <img src="@/assets/images/logo_white.png" height="50" />
        </div>
      </div>
      <div class="d-flex">
        <div class="user-photo d-flex align-items-center mr-2">
          <img class="rounded" src="@/assets/users/nouser.jpg" height="35" alt="" />
        </div>
        <div class="wrench d-flex align-items-center mr-2">
          <i class="fas fa-wrench large-icon dark-icon"></i>
        </div>
        <div class="signout d-flex align-items-center mr-2">
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </header>
    <DeviceList />
  </div>
</template>

<script>
import DeviceList from './components/DeviceList.vue';

export default {
  name: 'home',
  components: {
    DeviceList,
  },
};
</script>

<style lang="sass" scoped>
.home
  background-color: #000
  height: 100vh
  width: 100%
.header
  width: 100%
  height: 70px
  color: #fff
  background: #333
  position: relative
.menu i,
.signout i,
.wrench i
  font-size: 35px
</style>
