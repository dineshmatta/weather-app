<template>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <v-subheader>
              {{cardTtitle}}
          </v-subheader>
          <v-list-tile>
            <v-list-tile-avatar>
              <i class="wi wi-night-sleet"></i>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{data.updatetime}}, {{data.wxcondition}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- <v-card-text>
            <v-layout align-center>
              <v-flex xs6 display-3>
                {{data.temperature}}&deg;C
              </v-flex>
              <v-flex xs6>
                <v-img
                  src="http://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="50"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-card-text> -->
          <v-list>
            <v-list-tile>
                <v-list-tile-content>Temperature</v-list-tile-content>
                <v-list-tile-content>{{data.temperature}}&deg;{{data.temperature_unit}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Feels like</v-list-tile-content>
                <v-list-tile-content>{{data.feels_like}}&deg;{{data.temperature_unit}}</v-list-tile-content>
              </v-list-tile>
          </v-list>
        </v-list>
      </v-card>
    </v-flex>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TorontoWeatherInfo, MontrealWeatherInfo } from '@/store/models';

@Component
export default class WeatherCard extends Vue {
  @Prop() public data!: TorontoWeatherInfo | MontrealWeatherInfo;
  @Prop() public title!: string;

  public get cardTtitle() {
    return `${this.title} weather info`;
  }
}
</script>

