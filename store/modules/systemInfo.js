const syetemInfo = {
  state: {
    navBarConf: {},
    navBarHeightRpx: 0
  },
  mutations: {
    setNavBarConf(state) { // 获取标题栏高度
      uni.getSystemInfo({
        success: function(res) {
          const titleBarHeight = 44
          state.navBarConf = Object.assign({ titleBarHeight }, res)
          state.navBarHeightRpx = 750 / res.screenWidth * (titleBarHeight + res.statusBarHeight)
        }
      })
    }
  },
  actions: {},
  getters: {
    getNavBarConf: (state) => state.navBarConf
  }
}

export default syetemInfo

