import { AutoLoginResp } from '@/api/protocol';
import conn, { ConnModal, IConnectionListener } from '@/manager/conn';
import { reactive } from 'vue';
import dataCenter from '.';
export interface UserExperienceData {
  // todo 定义数据结构
  cashBack: number;
  exp: number;
  level: number;
  userId: number;
}
type UserState = Omit<AutoLoginResp, 'token'>;
class User implements IConnectionListener<UserExperienceData> {
  data?: UserState;
  userExperienceData?: UserExperienceData;
  update(user?: UserState) {
    this.data = user;
  }
  startListen() {
    conn.addListener(ConnModal.S2C_EXPERIENCE, this);
  }
  stopListen() {
    conn.removeListener(ConnModal.S2C_EXPERIENCE, this);
  }

  /**经验广播 */
  onData(experienceData: UserExperienceData) {
    this.userExperienceData = experienceData;
    if (this.data) {
      this.data.exp = this.userExperienceData.exp;
    }
    //获取经验后更新等级
    this.updataLevel();
  }
  /**获取等级 */
  updataLevel() {
    if (this.data) {
      const levelConfigs = dataCenter.webConfig.levelConfigs;
      for (const levelData of levelConfigs) {
        if (this.data.exp < levelData.chip) {
          this.data.level = levelData.level - 1;
        }
      }
      // 如果经验值高于数组中的最高值，返回数组中的最后一个等级
      this.data.level = levelConfigs[levelConfigs.length - 1].level;
    }
  }
  /**添加经验 */
  addExperience(experience: number) {
    if (this.data) {
      this.data.exp += experience;
      //获取添加经验后更新等级
      this.updataLevel();
    }
  }
}

export const user = reactive(new User());
// user.startListen();
