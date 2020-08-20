export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async articleNew({ commit }, params) {
    await this.$axios.post('/v1/articles', params).then(() => {})
  },
}
