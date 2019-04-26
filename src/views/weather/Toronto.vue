<template>
  <div v-if="!isLoading">
    <WeatherCard :data="weatherData" title="Toronto"/>
  </div>
  <div v-else>
    <v-progress-circular
      :size="50"
      indeterminate
      color="primary"
    ></v-progress-circular>
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
  public isLoading: boolean = true;

  public async created() {
    const data = await torontoWeather.refreshWeatherInfo();
    this.weatherData = data;
    this.isLoading = false;
  }

}
</script>

