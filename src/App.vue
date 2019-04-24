<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
}
</script>
