<template>
  <view>
    <view class="header" :style="{'height':`${navBarConf.titleBarHeight}px`,'padding-top':`${navBarConf.statusBarHeight}px`,'background': bg }">
      <view v-if="isBack" class="iconfont leftArrow header-back weight extend-click" @click.stop="back">
        <span class="iconfont iconfanhui" :style="{ 'color': backColor }"></span>
      </view>
      <view v-if="title" class="header-title weight" :style="{ 'color': titleColor }">{{ title }}</view>
    </view>
  </view>
</template>
<script>

export default {
  name: 'NavBarIndex',
  props: {
    title: { // 标题栏文字
      type: String,
      default: ''
    },
    titleColor: { // 标题栏文字颜色
      type: String,
      default: '#fff'
    },
    bg: { // 标题栏背景色
      type: String,
      default: 'linear-gradient(90deg, rgb(71,245,173), rgb(0,205,207)'
    },
    isBack: { // 返回按钮是否展示
      type: Boolean,
      default: true
    },
    backColor: { // 返回按钮颜色
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    navBarConf() { return this.$store.getters.getNavBarConf }
  },
  methods: {
    // 回到上一页
    back: function() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
	display: flex;
	align-items: center;
	top: 0;
	position: fixed;
	width: 100%;
	z-index: 100;
	left:0;
  }

  .header .header-title {
	position: absolute;
	left: 50%;
	font-size: 38rpx;
	transform: translateX(-50%);
  }
	.header .tmjdwy{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.header .tmjdwy image{
		display: block;
	}
	.header-back{
		position: absolute;
		left:15rpx;
		font-size:30rpx;
		padding: 10rpx;
		border-radius: 50%;
		span {
			font-size: 40rpx;
			color: #fff;
		}
	}
	.right, .btn {
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}
	.btn {
		justify-content: flex-end;
		background-color: #fff;
		button {
			color: #222;
			padding: 0 20rpx;
			font-size: 30rpx;
		}
	}
	.right {
		position: absolute;
		right: 0;
		justify-content: space-between;
		button {
			padding: 24rpx;
			color: #fff;
			line-height: 30rpx;
			background-color: rgba(0,0,0,0);
		}
	}
	/* #ifdef MP-WEIXIN */
	.right {
		display: none;
	}
	/* #endif */
	/* #ifdef APP-PLUS */
	.btn {
		display: none;
	}
	/* #endif */
</style>
