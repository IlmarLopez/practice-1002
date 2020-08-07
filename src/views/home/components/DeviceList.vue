<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-4 list">
        <template v-for="device in list">
          <DeviceItem :device="device" :key="device.id" @selected-device="handleSelectedDevice" />
        </template>
      </div>
      <div class="col-12 col-sm-8">
        <template v-if="selectedDevice">
          <DeviceChart :device="selectedDevice" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceItem from './DeviceItem.vue';
import DeviceChart from './DeviceChart.vue';

export default {
  name: 'DeviceList',
  components: {
    DeviceItem,
    DeviceChart,
  },
  data() {
    return {
      list: [],
      selectedDevice: null,
    };
  },
  created() {
    this.fetchDevices();
  },
  methods: {
    fetchDevices() {
      this.$http.get('devices/')
        .then((res) => {
          this.list = res.data.devices;
          console.log(res);
        });
    },
    handleSelectedDevice(device) {
      this.selectedDevice = device;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
