<template>  
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container v-bind="{ [`grid-list-sm`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="image in images.slice(0,10)"
              :key="image.id"
              xs4
            >
              <ImageCard :data="image"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageCard from '@/components/ImageCard.vue';
import photoModule from '@/store/modules/photo';
import { PhotoApiResponse } from '@/store/models';

@Component({
  components: {
    ImageCard,
  },
})
export default class Gallery extends Vue {
  public images: PhotoApiResponse[] = [];

  public async created() {
    const data = await photoModule.fetchImages();
    this.images = data;
  }

}
</script>