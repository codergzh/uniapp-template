import Vue from 'vue'
import Vuex from 'vuex'
import systemInfo from '@/store/modules/systemInfo.js'
import user from '@/store/modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    systemInfo,
    user
  }
})

export default store
