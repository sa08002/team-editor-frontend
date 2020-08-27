<template>
  <v-layout justify-center :class="$style.layout">
    <v-flex :class="$style.container">
      <h2 :class="$style.title">詳細画面</h2>
      <!-- <div> -->
      <p>タイトル：{{ article.title }}</p>
      <h2>本文</h2>
      <p>{{ article.content }}</p>
      <p>投稿者：{{ article.user.name }}</p>
      <div v-if="contributor == currentUser">
        <v-btn
          elevation="4"
          ripple
          depressed
          class="white--text font-weight-bold"
          :class="[$style.button, $style.register]"
          color="cyan"
          :to="`/articles/${$route.params.id}/edit`"
          nuxt
          >編集</v-btn
        >
        <v-btn
          color="red"
          elevation="4"
          ripple
          depressed
          :loading="loading"
          class="white--text font-weight-bold"
          :class="[$style.button, $style.register]"
          @click="submit"
          >削除</v-btn
        >
      </div>
      <!-- </div> -->
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  async fetch(context: Context) {
    const { store, error, route } = context
    const id = route.params.id
    try {
      await store.dispatch('article/fetchArticle', id)
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
})
export default class ArticleDetailPage extends Vue {
  title = ''
  content = ''
  loading = false
  async submit(): Promise<void> {
    this.loading = true
    const params = {
      title: this.title,
      content: this.content,
      id: this.$route.params.id,
    }
    await this.$store
      .dispatch('article/deleteArticle', params)
      .then(() => {
        this.$router.push('/')
      })
      .finally(() => {
        this.loading = false
      })
  }

  get article() {
    return this.$store.getters['article/article']
  }

  get contributor() {
    return this.$store.getters['article/article'].user.uid
  }

  get currentUser() {
    return this.$store.getters['user/headers'].uid
  }
}
</script>
<style lang="scss" module>
.layout {
  background: #f7f9f9;
  .container {
    height: 100%;
    max-width: 360px;
    padding: 20px 20px 60px;
    background: white;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .button {
    margin-bottom: 14px;
  }
}
</style>
