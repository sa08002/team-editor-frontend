<template>
  <div>
    <ul v-for="article in articles" :key="article">
      <li>タイトル : {{ articles.title }}</li>
      <hr>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  @Component
  export default class Articles extends Vue {
    articles = [
      {
        title: ""
      }
    ]

    get articles() {
      return this.$store.getters['article/articles']
    }
  }
</script>
