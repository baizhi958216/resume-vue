<template>
  <div class="main" @mouseup="up.up()">
    <resume-info
      :template="infotemplate"
      :style="{
        width: `${info}%`
      }"
    />
    <catch-line @move="resize" ref="up" />
    <resume-review
      :template="reviewtemplate"
      :style="{
        width: `${review}%`
      }"
    />
  </div>
</template>

<script setup lang="ts">
import ResumeInfo from '@/components/ResumeInfo.vue'
import CatchLine from '@/components/CatchLine.vue'
import ResumeReview from '@/components/ResumeReview.vue'
import type { IResumeSize } from '@/views/home.interface'
import { ref, shallowRef } from 'vue'
import MihoyoTemplateInfo from '@/components/Info/MihoyoTemplate.vue'
import MihoyoTemplateReview from '@/components/Review/MihoyoTemplate.vue'

const info = ref<number>(60)
const review = ref<number>(40)

const up = ref()

const resize = (line: IResumeSize) => {
  info.value = line.info
  review.value = line.review
}

const infotemplate = shallowRef(MihoyoTemplateInfo)
const reviewtemplate = shallowRef(MihoyoTemplateReview)
</script>

<style scoped>
.main {
  display: flex;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
