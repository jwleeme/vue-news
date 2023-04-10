// 라우터 인스턴스 생성을 위한 vue와 vue-router 가져오기
import Vue from 'vue'; 
import VueRouter from 'vue-router';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView';
import JobsView from '@/views/JobsView';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus';
import { store } from '@/store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      // path: url에 대한 정보가 담기는곳 (url 주소)
      path: '/news',
      name: 'news',
      component: NewsView,
      // 라우터 네비게이션(Router Navigation)
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
      store.dispatch('FETCH_LIST', to.name)
      .then(() => {
        console.log('fetched');
        next();
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
       
      }
      /* 
      ** 기존 방식 **
      component: url 주소로 갔을 때 표시될 컴포넌트 (=page로 간주)*/

      // 하이오더 컴포넌트를 활용한 재사용할 구간 컴포넌트에 CreateListView 컴포넌트 지정.
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask', // path 로 데이터 분기를 위해 라우트 정보에 name 속성을 지정해준다.
      component: AskView,
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});
