import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        musicInfo: {
            url: ''
        }
    },
    mutations: {
        changeMusicUrl(state, payload) {
            state.musicInfo.url = payload.url
        }
    },
    actions: {}
})
