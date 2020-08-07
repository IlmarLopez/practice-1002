<template>
  <div class="device py-2" @click="handleSelectedDevice">
    <h6 class="name text-white text-left">{{ device.name }}</h6>
    <div class="d-flex align-items-center mb-1">
      <img class="mr-2" :src="device.type.icon" alt="">
      <p class="type mb-0">{{ device.type.description }}</p>
    </div>
    <div class="ip-adress text-left">{{ device.ipAddress }}</div>
  </div>
</template>

<script>
export default {
  name: 'DeviceItem',
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleSelectedDevice() {
      this.$http.get(`devices/${this.device.id}`)
        .then((res) => {
          this.$emit('selected-device', res.data.device);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.device
  color: #aaa
  border-bottom: 1px solid #555
  cursor: pointer
  background-color: #333
  padding: .5em
  &:hover
    background-color: #444
</style>
