<template>
  <div id="app">
  <ToolBar></ToolBar>
  <transition name="page">
    <router-view></router-view>
  </transition>
  <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // 언제 시작시키고 끝낼지 정해야함. off 필요!
    // 한번 이벤트가 실행되고 나면 이벤트객체가 계속 쌓이기때문!
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);

  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>
