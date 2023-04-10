import Vue from 'vue'; // npm 설치 시 vue가 라이브러리로 이미 로딩되어있음.
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false;


// 4) 생성자 Vue 함수에서 app화면이 mount되기전에 router 사용 (앞선 1,2,3번 내용은 router의 index.js 파일로 내용이전.)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
