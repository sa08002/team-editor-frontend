export const state = () => ({
  articles: {},
})

export const getters = {
  articles: (state) => state.articles,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
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
}