<template>
  <list-item></list-item>
</template>

<script>
// 하이오더 컴포넌트 적용, ListView에선 data를 불러와 뿌려주는 역할을 한다.(각 페이지 적용)
import ListItem from '@/components/ListItem.vue'
export default {
  components: {
    ListItem,
  }
}
</script>

<style>

</style>