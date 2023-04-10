<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile
    
  },
  computed: {
    userInfo() { 
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);

    // dispatch 하여 store에서 FETCH_USER 를 UserView에 가져오고 인자로 userName을 전달해준다. (인자가 여러개일땐 객체로 감싸서 넘겨준다.)
    this.$store.dispatch('FETCH_USER', userName); //payload 부분
    
  }
}
</script>
