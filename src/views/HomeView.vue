<template>
  <div class="main" @mouseup="up.up()">
    <resume-info
      :style="{
        width: `${info}px`
      }"
      :template="infotemplate"
    />
    <catch-line @move="calwidth" ref="up" />
    <resume-review :template="reviewtemplate" />
  </div>
</template>

<script setup lang="ts">
import ResumeInfo from '@/components/ResumeInfo.vue'
import CatchLine from '@/components/CatchLine.vue'
import ResumeReview from '@/components/ResumeReview.vue'
import { ref, shallowRef } from 'vue'
import MihoyoTemplateInfo from '@/components/Info/MihoyoTemplate.vue'
import MihoyoTemplateReview from '@/components/Review/MihoyoTemplate.vue'
import type { IResumeSize } from './home.interface'

const infotemplate = shallowRef(MihoyoTemplateInfo)
const reviewtemplate = shallowRef(MihoyoTemplateReview)
const info = ref<number>(600)
const up = ref()
const calwidth = (line: IResumeSize) => {
  info.value = line.info
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
