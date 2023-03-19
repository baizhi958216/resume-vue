<template>
  <div class="info">
    <a class="baizhi958216" target="_blank" href="https://github.com/baizhi958216/resume-vue">
      <div class="via"></div>
      <div class="title">Resume-Vue</div>
    </a>
    <div class="container">
      <component :is="props.template" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MihoyoTemplate from '@/components/Info/MihoyoTemplate.vue'
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
.info {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 500px;
}
.baizhi958216 {
  display: flex;
  align-items: center;
  width: fit-content;
  color: black;
  text-decoration: none;
  margin: 1%;
}
.via {
  width: 60px;
  height: 60px;
  background: url('@/assets/baizhi958216.png');
  background-size: 100%;
  background-position: center;
}
.title {
  font-size: 26px;
}
.container {
  width: 100%;
  height: 98%;
}
</style>
