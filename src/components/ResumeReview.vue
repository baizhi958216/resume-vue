<template>
  <div class="review">
    <component :is="props.template" />
  </div>
</template>

<script setup lang="ts">
import MihoyoTemplate from '@/components/Review/MihoyoTemplate.vue'
import type { Component } from 'vue'

interface IResume {
  template?: Component
  data?: any
}

const props = withDefaults(defineProps<IResume>(), {
  template: MihoyoTemplate,
  data: {}
})
</script>

<style scoped>
.review {
  user-select: none;
}
</style>
