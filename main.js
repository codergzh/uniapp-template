import Vue from 'vue'
import App from './App'
import api from '@/service/api'
import tools from '@/common/tools'
import utils from '@/common/utils'
import reuni from '@/common/reuni'
import config from '@/common/config'
import consts from '@/common/consts'
import store from './store'

Vue.config.productionTip = false

// 全局注册应用配置
Vue.prototype.api = api
Vue.prototype.tools = tools
Vue.prototype.utils = utils
Vue.prototype.$config = config
Vue.prototype.consts = consts
Vue.prototype.$store = store

// 初始化执行
// 初始化标题栏样式
store.commit('setNavBarConf')
// 重写uni-app Api
reuni.init()

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
