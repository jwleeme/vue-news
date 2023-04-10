// 기본적으로 import를 하면 package.json에 있는 라이브러리를 들고오는것!
import axios from 'axios'; 

// 1. HTTP Request & Response(요청&응답)와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리 (공통 함수)

// (1) News의 List를 받아오는 api 함수.
function fetchNewsList() {
  // 이전 문법 (플러스 기호로 변수와 문자열 연결)
  // return axios.get(config.baseUrl + 'news/1.json');

  // ES6 문법(템플릿스트링)활용. (벡틱 기호로 변수와 문자열 연결)
  return axios.get(`${config.baseUrl}news/1.json`);
}

// (2) jobs의 list 받아오기 실습!
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

// (3) ask의 list 받아오기 실습!
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
// 위 3개를 포함한 api함수를 하나 더 만들었다!
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemInfo(itemname) {
  // 여기서 itemname이라는 인자는 dynamic route의 id값(=쿼리값)이다.
  return axios.get(`${config.baseUrl}item/${itemname}.json`)
}


// 3. export로 해당 함수 꺼내주며 마무리.(기본 내보내기해야 다른곳에서 import 가능!)
export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
}

// => api나 토큰 처리할때도 이곳에서 일괄적으로 정리하여 다른 컴포넌트에서 사용하자!