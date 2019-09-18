export const state = () => ({
  authenticated: false
})

export const mutations = {
  auth (state) {
    state.authenticated = true
  }
}
