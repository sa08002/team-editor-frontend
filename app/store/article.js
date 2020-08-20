export const state = () => ({
  article: {},
})

export const getters = {
  article: (state) => state.article,
}

export const mutations = {
  setArticle(state, article) {
    state.article = article
  },
}

export const actions = {
  async postArticle({ commit }, params) {
    await this.$axios.post('/v1/articles', params).then((response) => {
      const article = response.data

      const articleInfo = {
        title: article.title,
        contetn: article.content,
        user: article.user,
      }
      commit('setArticle', articleInfo)
    })
  },
}
