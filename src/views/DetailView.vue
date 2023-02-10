<template>
  <div>
    <h4>상세보기</h4>
    <h5>{{ items[route.params.id].title }}</h5>
    <p>{{ items[route.params.id].content }}</p>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
  items: Array,
});

const route = useRoute();
console.log(route.params.id);
</script>

<style lang="scss" scoped>

</style>