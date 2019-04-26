<template>
  <v-card flat tile>
     <v-dialog v-model="selectedImage" max-width="85vw" >
       <v-img
          :src="data.url"
          @click.stop="selectedImage=null"
        ></v-img>
    </v-dialog>
    <v-img
      :src="data.url"
      height="150px"
      @click="zoom(data.url)"
    ></v-img>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PhotoApiResponse } from '@/store/models';

@Component
export default class ImageCard extends Vue {
  @Prop() public data!: PhotoApiResponse;
  public selectedImage = null;

  public zoom(url: any) {
    this.selectedImage = url;
  }
}
</script>