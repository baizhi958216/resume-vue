<template>
  <div class="line" @mousedown="down" @mouseup="up"></div>
</template>

<script setup lang="ts">
const emit = defineEmits(['move'])
// 鼠标移动设置两页百分比
const move = (e: MouseEvent) => {
  emit('move', {
    info: (e.clientX / document.querySelector('.main')!.clientWidth) * 100,
    review: 100 - (e.clientX / document.querySelector('.main')!.clientWidth) * 100
  })
}

// 鼠标按下
const down = () => {
  addEventListener('mousemove', move)
}

// 鼠标抬起
const up = () => {
  removeEventListener('mousemove', move)
}

defineExpose({ up })
</script>

<style scoped>
.line {
  position: relative;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(163, 163, 163, 0.486),
    rgba(0, 0, 0, 0)
  );
  cursor: e-resize;
}
</style>
