<template>
  <div>
    <ul v-for="article in articles" :key="article.id">
      <li>タイトル : {{ article.title }}</li>
      <hr>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  async fetch(context: Context) {
    const { store, error } = context
    try {
      await this.$store.dispatch('article/getArticles')
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
})
export default class Articles extends Vue {
  get articles() {
    return this.$store.getters['article/articles']
  }
}
</script>
