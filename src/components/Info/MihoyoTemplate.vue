<template>
  <div>
    <div class="notice">
      该默认模板为米哈游
      <a href="https://www.bilibili.com/video/BV15s4y157ns" target="_blank">
        2023春季校园招聘空中宣讲会
      </a>
      示例简历
    </div>

    <div class="info1">
      <p>个人信息</p>
      <div>
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
      <p>教育经历</p>
      <div>
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
      <p>实习经历</p>
      <div v-for="(inter, index) in mihoyo.inter.value" :key="index">
        <div>{{ index }}</div>
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
      </div>
      <p>项目经历</p>
      <div v-for="(project, index) in mihoyo.project.value" :key="index">
        <div>{{ index }}</div>
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
      </div>
      <p>校园经历</p>
      <div v-for="(campus, index) in mihoyo.campus.value" :key="index">
        <div>{{ index }}</div>
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
      </div>
      <p>技能/证书及其它</p>
      <div>
        <textarea type="text" v-model="mihoyo.skill.value" />
      </div>
      <p>获奖经历</p>
      <div>
        <textarea type="text" v-model="mihoyo.reward.value" />
      </div>
      <p>游戏经历</p>
      <div>
        <textarea type="text" v-model="mihoyo.hobby.value" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMihoyoStore } from '@/stores/mihoyo'
import { storeToRefs } from 'pinia'
const { ...mihoyo } = storeToRefs(useMihoyoStore())
</script>

<style scoped>
.notice {
  margin: 20px;
}
.info1 {
  position: relative;
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
  width: 40%;
  height: 120px;
}
.goflex {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
}
</style>
