import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { TorontoWeatherInfo } from '../models';
import * as api from '@/store/api';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'toronto',
  store,
})
class TorontoModule extends VuexModule {
  public weatherInfo: TorontoWeatherInfo | null = null;

  @Action({commit: 'setWeatherInfo'})
  public async refreshWeatherInfo() {
    const weatherInfo = await api.getTorontoWeatherInfo();
    return weatherInfo;
  }

  @Mutation
  private setWeatherInfo(weatherInfo: TorontoWeatherInfo) {
    this.weatherInfo = weatherInfo;
  }
}

export default getModule(TorontoModule);


