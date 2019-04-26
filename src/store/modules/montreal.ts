import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { MontrealWeatherInfo } from '../models';
import * as api from '@/store/api';

export interface IMontrealState {
  weatherInfo: [];
}

@Module({
  dynamic: true,
  namespaced: true,
  name: 'montreal',
  store,
})
class MontrealModule extends VuexModule {
  public weatherInfo: MontrealWeatherInfo | null = null;

  @Action({commit: 'setWeatherInfo'})
  public async refreshWeatherInfo() {
    const weatherInfo = await api.getMontrealWeatherInfo();
    return weatherInfo;
  }

  @Mutation
  private setWeatherInfo(weatherInfo: MontrealWeatherInfo) {
    this.weatherInfo = weatherInfo;
  }
}

export default getModule(MontrealModule);


