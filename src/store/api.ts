import axios from 'axios';
import { TorontoWeatherAPIResponse, MontrealWeatherAPIResponse, PhotoApiResponse } from './models';

export const torontoWeatherApi = axios.create({
  baseURL: 'https://www.theweathernetwork.com/api',
});

export const montrealWeatherApi = axios.create({
  baseURL: 'https://www.meteomedia.com/api',
});

export const phtoApi = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export async function getTorontoWeatherInfo() {
  try {
    const response = await torontoWeatherApi.get('/obsdata/caon0696/c?ref=rt');
    return response.data as TorontoWeatherAPIResponse;
  } catch (e) {
    return e;
  }
}

export async function getMontrealWeatherInfo() {
  try {
    const response = await montrealWeatherApi.get('/obsdata/caqc0363/c?ref=rt');
    return response.data as MontrealWeatherAPIResponse;
  } catch (e) {
    return e;
  }
}

export async function getPhotos() {
  try {
    const response = await phtoApi.get('/photo');
    return response.data as PhotoApiResponse;
  } catch (e) {
    return e;
  }
}
