<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <!-- ask 상세페이지에서 뿌리고 싶은 데이터는 fetchedItem에 들어있으므로 
        info라는 props에 내려준다. -->
      <user-profile :info="fetchedItem">
        <!-- 기존 div slot 내용 대신 router-link slot 적용하여 해당 user 정보로 
          넘어갈 수 있게 처리하였다! 
          <div slot="username"> {{ fetchedItem.user }} </div> -->

        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link> 
        <template slot="time">{{ 'Posted ' +fetchedItem.time_ago }}</template>
      </user-profile>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        
      </div>
    </section>
 
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId); // payload(=itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-descripition {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>