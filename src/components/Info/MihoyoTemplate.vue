<template>
  <div class="container">
    <div class="notice">
      该默认模板为米哈游
      <a class="notice1" href="https://www.bilibili.com/video/BV15s4y157ns" target="_blank">
        2023春季校园招聘空中宣讲会
      </a>
      示例简历
    </div>

    <div class="container1">
      <p>个人信息</p>
      <div :style="{ width: '100%' }">
        <div class="goflex">
          <div>姓名:</div>
          <textarea type="text" class="single" v-model="mihoyo.p_name.value" />
        </div>
        <div class="goflex">
          <div>联系方式:</div>
          <textarea type="text" class="single" v-model="mihoyo.p_phone.value" />
        </div>
        <div class="goflex">
          <div>邮箱:</div>
          <textarea type="text" class="single" v-model="mihoyo.p_contact.value" />
        </div>
        <div class="goflex">
          <div>头像:</div>
          <textarea type="text" class="single" v-model="mihoyo.p_img.value" />
        </div>
      </div>
      <hr class="hr" />
      <p>教育经历</p>
      <div :style="{ width: '100%' }">
        <div class="goflex">
          <div>院校名称:</div>
          <textarea type="text" class="single" v-model="mihoyo.edu.value.name" />
        </div>
        <div class="goflex">
          <div>入学年月-毕业年月</div>
          <textarea type="text" class="single" v-model="mihoyo.edu.value.time" />
        </div>
        <div>描述</div>
        <textarea v-model="mihoyo.edu.value.desc"></textarea>
      </div>
      <hr class="hr" />
      <p>实习经历</p>
      <div :style="{ width: '100%' }">
        <template v-for="(inter, index) in mihoyo.inter.value" :key="index">
          <div class="remove" @click="removeInter(index)">❌</div>
          <div class="goflex">
            <div>公司名:</div>
            <textarea type="text" class="single" v-model="inter.name" />
          </div>
          <div class="goflex">
            <div>实习时长:</div>
            <textarea type="text" class="single" v-model="inter.time" />
          </div>
          <div>描述:</div>
          <textarea type="text" v-model="inter.desc" />
        </template>
      </div>
      <div @click="addInter" class="add">⭕</div>
      <hr class="hr" />
      <p>项目经历</p>
      <div :style="{ width: '100%' }">
        <template v-for="(project, index) in mihoyo.project.value" :key="index">
          <div class="remove" @click="removeProject(index)">❌</div>
          <div class="goflex">
            <div>项目名称:</div>
            <textarea type="text" class="single" v-model="project.name" />
          </div>
          <div class="goflex">
            <div>项目时长:</div>
            <textarea type="text" class="single" v-model="project.time" />
          </div>
          <div>描述:</div>
          <textarea type="text" v-model="project.desc" />
        </template>
      </div>
      <div @click="addProject" class="add">⭕</div>
      <hr class="hr" />
      <p>校园经历</p>
      <div :style="{ width: '100%' }">
        <template v-for="(campus, index) in mihoyo.campus.value" :key="index">
          <div class="remove" @click="removeCampus(index)">❌</div>
          <div class="goflex">
            <div>职务名:</div>
            <textarea type="text" class="single" v-model="campus.name" />
          </div>
          <div class="goflex">
            <div>任职时长:</div>
            <textarea type="text" class="single" v-model="campus.time" />
          </div>
          <div>描述:</div>
          <textarea type="text" v-model="campus.desc" />
        </template>
      </div>
      <div @click="addCampus" class="add">⭕</div>
      <hr class="hr" />
      <p>技能/证书及其它</p>
      <div :style="{ width: '100%' }">
        <textarea type="text" v-model="mihoyo.skill.value" />
      </div>
      <hr class="hr" />
      <p>获奖经历</p>
      <div :style="{ width: '100%' }">
        <textarea type="text" v-model="mihoyo.reward.value" />
      </div>
      <hr class="hr" />
      <p>游戏经历</p>
      <div :style="{ width: '100%' }">
        <textarea type="text" v-model="mihoyo.game.value" />
      </div>
      <hr class="hr" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMihoyoStore } from '@/stores/mihoyo'
import { storeToRefs } from 'pinia'
const { ...mihoyo } = storeToRefs(useMihoyoStore())
const removeInter = (i: number) => {
  mihoyo.inter.value.splice(i, 1)
}
const removeProject = (i: number) => {
  mihoyo.project.value.splice(i, 1)
}
const removeCampus = (i: number) => {
  mihoyo.campus.value.splice(i, 1)
}
const addInter = () => {
  mihoyo.inter.value.push({
    name: '',
    time: '',
    desc: ''
  })
}
const addProject = () => {
  mihoyo.project.value.push({
    name: '',
    time: '',
    desc: ''
  })
}
const addCampus = () => {
  mihoyo.campus.value.push({
    name: '',
    time: '',
    desc: ''
  })
}
</script>

<style scoped>
.notice {
  margin: 20px;
}
.notice1 {
  color: rgb(110, 190, 255);
  text-decoration: none;
  font-size: 24px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container1 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}
.remove,
.add {
  cursor: pointer;
  width: fit-content;
}
.hr {
  border: none;
  height: 2px;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(190, 190, 190, 0.637),
    rgba(0, 0, 0, 0)
  );
}
.single {
  resize: none;
  width: 200px;
  height: 20px;
}
textarea {
  padding: 5px;
  border: 1px solid #919191be;
  border-radius: 5px;
  outline: none;
  width: 100%;
  height: 120px;
}
.goflex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
