import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { PhotoApiResponse } from '../models';
import * as api from '@/store/api';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'photo',
  store,
})
class PhotoModule extends VuexModule {
  public images: PhotoApiResponse | null = null;

  @Action({commit: 'setImages'})
  public async fetchImages() {
    const images = await api.getPhotos();
    return images;
  }

  @Mutation
  private setImages(images: PhotoApiResponse) {
    this.images = images;
  }
}

export default getModule(PhotoModule);


