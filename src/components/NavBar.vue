<template>
  <nav>
    <v-toolbar light app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"></span>
        <span>WEATHER APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down toolbar-items">
        <v-btn flat to="/weather/toronto">Toronto</v-btn>
        <v-btn flat to="/weather/montreal">Montreal</v-btn>
        <v-btn flat to="/gallery">Gallery</v-btn>
        <v-btn flat to="/contact">Contact Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>
