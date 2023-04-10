 <template>
   <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-descripition">
          
          <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          <!-- <div>username : {{ info.id }}</div> -->
          <!-- 
            ItemView -> info.user
            UserView -> info.id 였다.
            이처럼 페이지마다 접근하는 속성이 다르기때문에 <template의 v-if> 디렉티브로
            한것이 아닌 slot 방식으로 정의해준것이다.
           -->

          <div class="time">  
            <slot name="time">
             <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            
            <slot name="karma">
              <!-- 상위 컴포넌트에서 정의할 영역 (karma 슬롯 생성!)-->
            </slot>
          </div>

            
        </div>
      </div>
 </template>
 
 <script>
    
   export default {
   props: {
     // 타입명시
      info : Object
   },
  //  computed: {
  //    userInfo() { 
  //      return this.$store.state.user;
  //    }
  //  },
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