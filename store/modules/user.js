const bargain = {
  state: {
    userInfo: null,
    wxUserInfo: null
  },
  mutations: {
    setUserInfo(state, userInfo) { // 用户信息
      state.userInfo = userInfo
    },
    setWxUserInfo(state, wxUserInfo) { // 用户微信信息
      state.wxUserInfo = wxUserInfo
    }
  },
  actions: {},
  getters: {
    getUserInfo: (state) => state.userInfo,
    getWxUserInfo: (state) => state.wxUserInfo
  }
}

export default bargain
