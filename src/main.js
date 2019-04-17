import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/init.css'
import '@/assets/css/common.less'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import moment from 'moment' //导入文件

Vue.config.productionTip = false
Vue.prototype.$moment = moment //赋值使用
moment.locale('zh-cn') //需要汉化
Vue.prototype.axios = axios
Vue.use(iView)

router.beforeEach((to, from, next) => {
    if (!to.meta.requireAuth) {
        next()
    } else {
        const userInfo = localStorage.getItem('MUSIC_USER_INFO')
        if (userInfo) {
            next()
        } else {
            Vue.prototype.$Message.error('没有登录！')
            next('/')
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
