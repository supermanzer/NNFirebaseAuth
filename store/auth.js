// Getting authenticated user info from Firebase and Firestore

export const state = () => ({
  user: {
    uid: '',
    email: '',
    emailVerified: false,
    bio: ''
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
      // console.log(claims)
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
  },

  /**
   * USE THIS APPROACH ONLY FOR SMALL AMOUNTS OF DATA !!!!!!!!!!!!!!
   * It is very possible that the data stored in a users FireStore collectioin
   * could grow to include many different elements.  In these cases bundling 
   * the authentication mechanism with fetching this data can negatively impact
   * the performance and cause the loading of data into memory that is not 
   * being used.
   */
  ADD_USER_BIO: (state, payload) => {
    if (payload.bio) {
      state.user.bio = payload.bio
    }
  }
}


export const actions = {
  async onAuthStateChangedAction(context, auth) {
    if (auth.authUser) {
      const uid = auth.authUser.uid
      console.log(uid);
      const dRef = await this.$fireStore.collection('users').doc(uid).get()
      context.commit('ADD_USER_BIO', dRef.data());
    }
  }
}
