<template>
  <div>
    <h5>asdasda{{ item.title }}</h5>
    <p>{{ item.content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  item: Array,
});
</script>

<style lang="scss" scoped>

</style>