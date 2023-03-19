<template>
  <div class="info">
    <div class="baizhi958216">
      <a class="via" target="_blank" href="https://github.com/baizhi958216"></a>
      <a class="title" target="_blank" href="https://github.com/baizhi958216/resume-vue">
        Resume-Vue
      </a>
      <div class="select" @click="toggleSelect">选择模板</div>
      <div
        class="templates"
        :style="{
          display: tempstyle
        }"
      >
        <div @click="toggleTemp(index)" v-for="(temp, index) in templateList" :key="index">
          {{ temp }}
        </div>
      </div>
      <div class="pdfexport" @click="toPdf">导出pdf</div>
    </div>
    <component :is="props.template" />
  </div>
</template>

<script setup lang="ts">
import MihoyoTemplate from '@/components/Info/MihoyoTemplate.vue'
import { ref, type Component } from 'vue'
import { toPdf } from '@/utils/toPdf.util'
interface IResume {
  template?: Component
  data?: any
}

const props = withDefaults(defineProps<IResume>(), {
  template: MihoyoTemplate,
  data: {}
})
const templateList = ['mihoyo']

const tempstyle = ref('none')
const toggleSelect = () => {
  tempstyle.value = tempstyle.value === 'none' ? 'flex' : 'none'
}
const toggleTemp = (index: number) => {
  console.log(index)
  toggleSelect()
}
</script>

<style scoped>
.info {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 600px;
  user-select: none;
}
.baizhi958216 {
  display: flex;
  align-items: center;
  width: fit-content;
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
  color: black;
  text-decoration: none;
}
.select,
.pdfexport {
  border: 1px sodivd black;
  border-radius: 10px;
  padding: 5px 10px;
  margin-left: 15px;
  cursor: pointer;
  background-color: black;
  color: white;
}
.templates {
  display: flex;
}
.templates div {
  margin-left: 10px;
  color: rgb(170, 170, 170);
  cursor: pointer;
}
</style>
