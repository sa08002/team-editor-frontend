import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

const COOKIE_TARGET_STORE = ['user']

function filterValues(serializedJsonValue) {
  const parsed = JSON.parse(serializedJsonValue)
  const storeNames = Object.keys(parsed)

  // 削除対象の store 一覧から cookie 保存する store を除外する
  for (const storeName of COOKIE_TARGET_STORE) {
    const idx = storeNames.indexOf(storeName)
    storeNames.splice(idx, 1)
  }

  for (const key of storeNames) {
    delete parsed[key]
  }
  return JSON.stringify(parsed)
}

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'team-editor',
    storage: {
      getItem: (key) =>
        process.client
          ? Cookies.getJSON(key)
          : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) =>
        Cookies.set(key, filterValues(value), { expires: 30, secure: !isDev }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}
