export const state = () => ({
  articles: {},
  article: {},
})

export const getters = {
  articles: (state) => state.articles,
  article: (state) => state.article,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setArticle(state, article) {
    state.article = article
  },
}

export const actions = {
  async getArticles({ commit }) {
    await this.$axios.get('/v1/articles').then((response) => {
      const articles = response.data
      commit('setArticles', articles)
    })
  },
  async articleNew({ commit }, params) {
    await this.$axios.post('/v1/articles', params).then(() => {})
  },
  async updateArticle({ commit }, params) {
    await this.$axios.patch(`/v1/articles/${params.id}`, params).then(() => {})
  },
  async deleteArticle({ commit }, id) {
    await this.$axios.delete(`/v1/articles/${id}`)
  },
  async fetchArticle({ commit }, id) {
    await this.$axios.get(`/v1/articles/${id}`, id).then((response) => {
      const article = response.data
      commit('setArticle', article)
    })
  },
}
