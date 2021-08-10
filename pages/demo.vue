<template>
  <view class="warp">
    <nav-bar :title="pageTitle"></nav-bar>
  </view>
</template>

<script>
import NavBar from '@/components/nav-bar/index.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      pageTitle: 'demo'
    }
  },
  onLoad(option) { // 页面初次加载
    console.log(option)
  },
  onShow() { // 页面显示

  },
  onReady() { // 页面初次渲染完成

  },
  methods: {

  },
  onHide() { // 页面隐藏

  },
  onUnload() { // 页面卸载

  }
}
</script>

<style lang="scss" scoped>
	.warp {}
</style>
