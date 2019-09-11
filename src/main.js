import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'
import './theme/index.css';
import './elememt_components'
import VueCookie from 'vue-cookie';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

// 配置生产环境与本地环境请求头

Vue.config.productionTip = false;
// 引入字体图标样式
import './assets/font/iconfont.css'
import jsClass from './assets/js/style'
import { post, fetch }  from "./axios_config/axios";
import { post_json}  from "./axios_config/axios-json-post";
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;
Vue.prototype.$jsClass = jsClass;
Vue.prototype.$cookie = VueCookie;


// 以上
// 提交数据方式都是
// headers:{
//     'Content-Type':'application/x-www-form-urlencoded'
// },
Vue.prototype.$post_json=post_json;
// 这里是headers:{
//     'Content-Type':'application/json'
// },

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
