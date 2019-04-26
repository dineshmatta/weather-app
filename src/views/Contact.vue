<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-form>
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="phone"
        label="Phone Number"
        required
      ></v-text-field>

      <v-btn
        @click="submit">
        Submit Form
      </v-btn>
    </v-form>
  </v-flex>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Gallery extends Vue {
  public name: string = '';
  public email: string = '';
  public phone: string = '';

  public submit() {
    const data = {name: this.name, email: this.email, phone: this.phone};
    // tslint:disable-next-line:no-console
    console.log('Form data to be submitted to mail function', data);
  }
}
</script>
