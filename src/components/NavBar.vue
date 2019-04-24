<template>
  <nav>
    <v-toolbar light app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"></span>
        <span>WEATHER APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><router-link to="/weather/toronto">Toronto</router-link></v-btn>
        <v-btn flat><router-link to="/weather/montreal">Montreal</router-link></v-btn>
        <v-btn flat><router-link to="/gallery">Gallery</router-link></v-btn>
        <v-btn flat><router-link to="/contact">Contact Us</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>
