<template>
  <div v-if="device">
    <h6 class="name text-white text-left px-1 py-3">{{ device.name }}</h6>
    <div class="info d-flex align-items-center mb-1">
      <img class="mr-2" :src="device.type.icon" height="50">
      <p class="type mb-0 text-white">{{ device.type.description }}</p>
    </div>
    <div class="chart">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

export default {
  name: 'DeviceChart',
  components: {
    highcharts: Chart,
  },
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      values: [],
      categories: [],
      chartOptions: null,
    };
  },
  watch: {
    device: {
      handler() {
        this.categories = [];
        this.values = [];
        this.device.readings.forEach((r) => {
          this.categories.push(r.dateTime);
          this.values.push(r.value);
        });

        this.chartOptions = {
          chart: {
            type: 'column',
            backgroundColor: '#333',
          },
          title: {
            text: this.device.type.description,
            style: {
              'font-size': '14pt',
              color: '#FFF',
            },
          },
          yAxis: {
            // eje de las y
            min: this.device.type.minValue,
            max: this.device.type.maxValue,
            title: {
              text: this.device.type.unitOfMeasurement,
            },
            style: {
              'font-size': '10pt',
              color: this.device.type.chartColor,
            },
          }, // eje de las x
          xAxis: {
            categories: this.categories,
            title: 'Hour',
            style: {
              'font-size': '10pt',
              color: '#AAA',
            },
          },
          series: [
            {
              data: this.values,
              color: this.device.type.chartColor,
            },
          ],
          legend: {
            enabled: false,
          },
        };
      },
      immediate: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.name,
.info
  background-color: #333
  height: 50px
</style>
