<template>
  <div>
    <WeatherCard :data="weatherData" title="Montreal"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WeatherCard from '@/components/WeatherCard.vue';
import montrealWeather from '@/store/modules/montreal';
import { MontrealWeatherInfo } from '@/store/models';

@Component({
  components: {
    WeatherCard,
  },
})
export default class Montreal extends Vue {
  public weatherData: MontrealWeatherInfo[] = [];

  public async created() {
    const data = await montrealWeather.refreshWeatherInfo();
    this.weatherData = data;
  }

}
</script>

