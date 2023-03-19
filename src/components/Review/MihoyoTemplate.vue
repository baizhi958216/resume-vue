<template>
  <div class="container">
    <div class="main">
      <!-- 个人信息 -->
      <div class="r_person_info">
        <div class="r_p_1">
          <div class="r_person_name">{{ mihoyo.p_name }}</div>
          <div class="r_person_contact">{{ mihoyo.p_phone }} | {{ mihoyo.p_contact }}</div>
        </div>
        <div
          class="r_p_2"
          :style="{
            'background-image': `url(${mihoyo.p_img})`
          }"
        ></div>
      </div>
      <!-- 教育经历 -->
      <div class="r_person_common r_person_edu">
        <div class="card">
          <div class="card_1">教育经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <div style="display: flex; justify-content: space-between">
          <div style="font-weight: bold">{{ mihoyo.edu.name }}</div>
          <div>{{ mihoyo.edu.time }}</div>
        </div>
        <div v-html="mdi.render(mihoyo.edu.desc)"></div>
      </div>
      <!-- 实习经历 -->
      <div class="r_person_common r_person_inter">
        <div class="card">
          <div class="card_1">实习经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <template v-for="(inter, index) in mihoyo.inter" :key="index">
          <div style="display: flex; justify-content: space-between">
            <div style="font-weight: bold">{{ inter.name }}</div>
            <div>{{ inter.time }}</div>
          </div>
          <div v-html="mdi.render(inter.desc)"></div>
        </template>
      </div>
      <!-- 项目经历 -->
      <div class="r_person_common r_person_project">
        <div class="card">
          <div class="card_1">项目经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <template v-for="(project, index) in mihoyo.project" :key="index">
          <div style="display: flex; justify-content: space-between">
            <div style="font-weight: bold">{{ project.name }}</div>
            <div>{{ project.time }}</div>
          </div>
          <div v-html="mdi.render(project.desc)"></div>
        </template>
      </div>
      <!-- 校园经历 -->
      <div class="r_person_common r_person_campus">
        <div class="card">
          <div class="card_1">校园经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <template v-for="(campus, index) in mihoyo.campus" :key="index">
          <div style="display: flex; justify-content: space-between">
            <div>{{ campus.name }}</div>
            <div>{{ campus.time }}</div>
          </div>
          <div v-html="mdi.render(campus.desc)"></div>
        </template>
      </div>
      <!-- 技能/证书及其它 -->
      <div class="r_person_common r_person_skill">
        <div class="card">
          <div class="card_1">技能/证书及其它</div>
          <div class="card_2" style="left: -8px"></div>
        </div>
        <hr class="r_hr" />
        <div v-html="mdi.render(mihoyo.skill)"></div>
      </div>
      <!-- 获奖经历 -->
      <div class="r_person_common r_person_reward">
        <div class="card">
          <div class="card_1">获奖经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <div v-html="mdi.render(mihoyo.reward)"></div>
      </div>
      <!-- 游戏经历 -->
      <div class="r_person_common r_person_hobby">
        <div class="card">
          <div class="card_1">游戏经历</div>
          <div class="card_2"></div>
        </div>
        <hr class="r_hr" />
        <div v-html="mdi.render(mihoyo.hobby)"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMihoyoStore } from '@/stores/mihoyo'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css' //导入代码高亮样式

const mdi = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str, true).value
      } catch (__) {
        console.log(__)
      }
    }
    return ''
  }
})
const mihoyo = useMihoyoStore()
</script>

<style scoped>
.container {
  width: 80%;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 15px;
  background: linear-gradient(90deg, rgba(24, 191, 246, 1), rgba(24, 114, 246, 1));
  max-width: 21cm;
  max-height: 29.7cm;
  overflow: scroll;
}
.main {
  width: 100%;
  border-radius: 15px;
  background: #fff;
}
.card {
  display: flex;
  align-items: end;
}
.card_1 {
  position: relative;
  background-color: black;
  width: fit-content;
  padding: 5px 40px 7px 10px;
  color: white;
  clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%);
}
.card_2 {
  position: relative;
  background-color: #e0e0e0;
  clip-path: polygon(0 0, 50% 0, 90% 100%, 40% 100%);
  left: -6px;
  width: 20px;
  height: 25px;
}
.r_person_common {
  padding: 15px 30px;
}
.r_hr {
  color: #cccccc46;
}
.r_person_info {
  height: 15%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
}
.r_p_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.r_person_name {
  font-weight: bold;
  margin: 10px;
  width: fit-content;
}
.r_person_contact {
  width: fit-content;
}
.r_p_2 {
  width: 70px;
  height: 10%;
  left: 72%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
</style>
