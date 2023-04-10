import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
} from '@/api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(res => {
        
        context.commit('SET_NEWS', res.data); //api 기능을 이용해 mutations 의 데이터를 넘길수있음 , SET_NEWS 를 실행할때 response.data를 같이 넘겨주면 되겠죠?
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_JOBS({commit}) { // destructuring으로 commit도 인자에서 바로 꺼내와서 쓸수있다.
    return fetchJobsList()
      // destructuring(구조분해문법) 사용
      .then(({ data }) => { // 성공 시 then
        commit('SET_JOBS', data);
      })
      .catch(error => { // 실패 시 에러 콘솔찍힘.
        console.log(error)
      })
  },
  FETCH_ASK({commit}) {
    return fetchAskList() 
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(err => {
        console.log(err)
      });
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemID) {
    return fetchItemInfo(itemID)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName)
     .then(response => {
       // #4
       console.log(4)
       commit('SET_LIST', response.data)
       return response;
     })
      .catch(error => console.log(error));
  },
}