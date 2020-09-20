//

export const state = () => ({
  user: {
    id: '',
    email: '',
    emailVerified: false,
  },
  loggedIn: false
})


export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, {
    authUser,
    claims
  }) => {
    if (!authUser) {
      state.user = {}
      state.loggedIn = false
    } else {
      console.log(claims)
      const {
        uid,
        email,
        emailVerified
      } = authUser
      state.user = {
        uid,
        email,
        emailVerified
      }
      state.loggedIn = true
    }
  }
}
