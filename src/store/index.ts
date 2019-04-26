import Vue from 'vue';
import Vuex from 'vuex';
import {ITorontoState} from './modules/toronto';
import {IMontrealState} from './modules/montreal';
import {IPhotoState} from './modules/photo';

Vue.use(Vuex);

export interface IRootState {
  toronto: ITorontoState;
  montreal: IMontrealState;
  photo: IPhotoState;
}

// Declare empty store first, dynamically registering all modules later.
export default new Vuex.Store<IRootState>({});
