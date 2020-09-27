/**
 * Vuex Store components for managing Guides
 */

const state = () => ({
  guides: []
})

const mutations = {
  ADD_NEW_GUIDES: (state, doc) => {
    // Only adding the new guide if it doesn't already exist
    if (state.guides.filter(g => g.id == doc.id).length == 0) {
      const guide = doc.data()
      guide.id = doc.id
      state.guides.push(guide)
    }
  }
}

const actions = {
  addFireStoreListener(context) {
    this.$fireStore.collection("guides").onSnapshot((resp) => {
      resp.docs.forEach((doc) => {
        context.commit('ADD_NEW_GUIDES', doc)
      })
    });
  }
}


export {
  state,
  mutations,
  actions
}
