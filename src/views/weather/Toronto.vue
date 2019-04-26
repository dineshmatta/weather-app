<template>
  <div>
    <WeatherCard :data="weatherData" title="Toronto"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WeatherCard from '@/components/WeatherCard.vue';
import torontoWeather from '@/store/modules/toronto';
import { TorontoWeatherInfo } from '@/store/models';

@Component({
  components: {
    WeatherCard,
  },
})
export default class Toronto extends Vue {
  public weatherData: TorontoWeatherInfo[] = [];

  public async created() {
    const data = await torontoWeather.refreshWeatherInfo();
    this.weatherData = data;
  }

}
</script>

