<template>
  <div>
    <ul v-for="article in articles" :key="article">
      <li>タイトル : {{ article.title }}</li>
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
      title: "ruby 学習方法"
    },
    {
      title: "PHP 学習方法"
    },
    {
      title: "java 学習方法"
    }]
}
</script>
