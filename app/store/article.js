export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  async postArticleNew({ commit }, params) {
    await this.$axios.post('/v1/articles', params).then(() => {})
  },
}
