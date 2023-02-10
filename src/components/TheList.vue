<template>
  <div v-for="(item, index) in items" :key="index">
    <h5 @click="router.push(`/detail/${item.id}`)">{{ item.title }}</h5>
    <p>{{ item.content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  items: Array,
});

const router = useRouter();
</script>

<style lang="scss" scoped>

</style>