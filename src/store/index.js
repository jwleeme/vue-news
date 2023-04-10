import Vue from 'vue';
import Vuex from 'vuex'; // vuex 라이브러리 로딩 (모듈화)
import mutations from './mutations.js';
import actions from './actions.js';

//플러그인 형태로 제공되므로 Vue.use로 vue를 사용해주자!
Vue.use(Vuex);

// 인스턴스를 내보내기 위해 변수에 담고 기본내보내기(export)한다.
export const store = new Vuex.Store({
  state: {
    // 안쓰는것들은 정리한다.
    // news: [],
    // jobs: [],
    // ask: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  // 모듈화를 위해 별도 파일생성!
  mutations,
  actions 

});