export const strict = false
export const state = () => ({
  headers: {},
  isSignIn: false,
})

export const getters = {
  headers: (state) => state.headers,
  isSignIn: (state) => state.isSignIn,
}

export const mutations = {
  setHeaders(state, headers) {
    state.headers = headers
  },

  setIsSignIn(state, isSignIn) {
    state.isSignIn = isSignIn
  },
}

export const actions = {
  async signUp({ commit }, params) {
    await this.$axios.post('/v1/auth', params).then((response) => {
      const headers = response.headers

      const loginInfoHeaders = {
        'access-token': headers['access-token'],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
        'token-type': headers['token-type'],
      }

      commit('setHeaders', loginInfoHeaders)
      commit('setIsSignIn', true)
    })
  },
  async signIn({ commit }, params) {
    await this.$axios.post('/v1/auth/sign_in', params).then((response) => {
      const headers = response.headers

      const loginInfoHeaders = {
        'access-token': headers['access-token'],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
        'token-type': headers['token-type'],
      }

      commit('setHeaders', loginInfoHeaders)
      commit('setIsSignIn', true)
    })
  },
}
