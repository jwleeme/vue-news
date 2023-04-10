<template>
  <div>
    <ul class="news-list">
      <!-- 페이지 분기처리를 위해 ListItems 함수 생성 후 조건문으로 각 페이지 데이터 분기처리함. -->
      <li v-for="(item, index) in ListItems" 
      :key="`item-${index}`"
      class="post">

      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points || 0 }} 
        <!-- or 연산자로 points가 없을경우에는 숫자 0으로 표시해준다. -->
      </div>

      <!-- 기타 정보 영역 -->
      <div>
        <!-- title 영역 -->
        <p class="news-title">
          <!-- news에서는 domain을 기준으로! -->
          <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </template>
           <!-- ask에서는 특정id를 통한 데이터 패치하여 상세 페이지로 넘어간다. -->
          <template v-else>
            <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{item.time_ago}} by
          <!-- 방법 2 ) 분기 시 태그 내에 바로 v-if 디렉티브를 넣을 수 있다. -->
        <router-link
        v-if="item.user"
        v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
        <!-- v -else일때는.. -->
        <a :href="item.url" v-else>
            {{ item.domain }}
          </a>
        </small>
      </div>
        
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    const name = this.$route.name;
    
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASK');
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    ListItems() {
      // * 하이오더 컴포넌트 사용했으므로 여기서 데이터를 분기하여 뿌려줄 필요가없어 기존내용 주석처리 후 state list만 반환한다.
      return this.$store.state.list;
      
      // const name = this.$route.name;
    
      // if (name === 'news') { /* route의 name이 news이면.. 
      //    store의 state에 담긴 news 데이터를 해당 페이지에 뿌려준다. (아래도 동일)*/
      //   return this.$store.state.news;
      // } else if (name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs;
      // }
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>