import { createStore } from 'vuex'

export default createStore({
  state: {
    activeGroup: null,
    activeMessages: null,
  },
  mutations: {
    updateActiveGroup(state, groupName) {
      state.activeGroup = groupName;
    },
    updateActiveMessages(state, activeMessages) {
      state.activeMessages = activeMessages;
    }
  },
  actions: {
    changeActiveGroup(ctx, groupName) {
      ctx.commit('updateActiveGroup', groupName);
    },
    changeActiveMessages(ctx, groupName) {
      let activeMessages = localStorage.getItem(groupName);
      ctx.commit('updateActiveMessages', activeMessages);
    },
  },
  getters: {
    activeGroupName(state) {
      return state.activeGroup;
    },
    activeMessages(state) {
      return state.activeMessages;
    }
  },
  modules: {
  }
})
