import { defineStore } from 'pinia'

export const useMihoyoStore = defineStore('mihoyo', {
  state: () => {
    return {
      p_name: 'R酱',
      p_phone: '+86 188xxxx1890',
      p_contact: 'Rjiang@mihoyi.com',
      p_img: 'src/assets/baizhi958216.png',
      edu: {
        name: '阿米基尼学院',
        time: '2020年09月-2024年07月',
        desc: `项目管理 本科
GPA: 3.76/4.00(专业前5%)
`
      },
      inter: [
        {
          name: '筷徕阿米公司',
          time: '2022年07月-2023年01月',
          desc: `运营实习生
* 负责xxx工作, 通过xxx、xxx, 实现xxx增长;
* 协助xxx工作, 拓展xxx资源, 获得xxx;
* `
        },
        {
          name: 'xxxx公司',
          time: '2022年01月-2023年06月',
          desc: `项目管理实习生
* 作为xxx角色, 协助xxxx工作, 达成xxx;
* 参与xxx项目, 完成xx`
        }
      ],
      project: [
        {
          name: '"旋米杯"游戏设计大赛',
          time: '2022年03月-2022年11月',
          desc: `* 在xx人的团队中担任xx角色, 负责xxx、xxx工作;
* 负责xxx游戏文案策划工作, 负责游戏xxx情节、xxx剧情的设计, 完成xxx版本
* 项目最终获得xxx成绩。`
        }
      ],
      campus: [
        {
          name: '学生会 副主席',
          time: '2021年07月-2022年07月',
          desc: `* 负责xxx工作, 分管xx部门, 协调xxx;
* 组织校级xx规模的xxx活动, 主要负责xxx工作`
        }
      ],
      skill: `* 技能: Office, 数据分析  
* 语言: 普通话(母语), 英语(流利)
* 兴趣爱好: 打游戏、读书
      `,
      reward: `2021-2022两年获得国家奖学金、三好学生荣誉称号`,
      hobby: `游戏名称、游戏品类、游玩时长、段位/等级等信息。`
    }
  },
  actions: {},
  persist: {
    enabled: true
  }
})
