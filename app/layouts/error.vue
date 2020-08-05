<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, default: null }) error!: object
  pageNotFound: String = '404 Not Found'
  otherError: String = 'An error occurred'
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
