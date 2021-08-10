<script>
import tools from '@/common/tools'
export default {
  onLaunch: function() {
    console.log('App Launch')
    // #ifdef H5
    let wxUserInfo = uni.getStorageSync('wxUserInfo')
    if (!wxUserInfo || !wxUserInfo.openid) {
      wxUserInfo = tools.weixinAuth()
      this.$store.commit('setWxUserInfo', wxUserInfo)
    } else {
      this.$store.commit('setWxUserInfo', wxUserInfo)
    }
    // #endif
    const userInfo = uni.getStorageSync('userInfo')
    if (!userInfo || !userInfo._id) {
      this.$store.commit('setUserInfo', null)
      uni.reLaunch({
        url: '/pages/login/login'
      })
    } else {
      this.$store.commit('setUserInfo', userInfo)
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  onResize: function() {
    console.log('App Resize')
  }
}
</script>

<style>
/*每个页面公共css */
page {
	overflow-y: scroll;
}
.in_picture .uni-video-cover-duration {
	display: none;
}
</style>
