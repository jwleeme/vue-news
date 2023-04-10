import ListView from './ListView.vue';
import Bus from '@/utils/bus.js';

export default function createListView(name) { // name이라는 이름을 받음
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // 컴포넌트 name 연결. (NewsView,JobsView와 같은 컴포넌트 이름이 연결된다.)
    name, 
    created() {
      
      Bus.$emit('start:spinner'); 

      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name) // 데이터 담아오고나면..

        // promise 체이닝
          .then(() => {
          // 3초 뒤에 스피너가 동작하는지 알아보기 위한 콘솔내용.
          console.log('fetched'); 
          Bus.$emit('end:spinner'); // 스피너 종료 이벤트 보냄.
        })
        .catch((error) => {
          console.log(error);
        });
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView); // 랜더함수로 컴포넌트를 만듬.
    }
  }
}