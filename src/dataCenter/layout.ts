import { reactive } from 'vue';

export enum RightSideBarState {
  CLOSE,
  /**全站通知 */
  NOTICE,
  /**竞赛 */
  COMPETITION,
  /**聊天区域 */
  CHAT,
  /**搜索区域 */
  SEARCH,
}

class Layout {
  //当前状态
  currentState = RightSideBarState.CLOSE;
  /**左边的是否折叠 */
  leftMenuFold = true;
  /**客服是否显示 */
  customerRightMenuFold = false;
  /**是否是手机模式 */
  isMobile = false;

  constructor() {
    this.checkSize();
  }
  startListen() {
    window.addEventListener('resize', this.checkSize.bind(this));
  }
  checkSize() {
    this.isMobile = window.innerWidth < 768;
  }

  /**切换左边栏菜单 */
  toggleLeft() {
    this.leftMenuFold = !this.leftMenuFold;
  }
  /**关闭左边栏菜单 */
  closeLeft() {
    this.leftMenuFold = true;
  }
  /**是否打开了右边栏 */
  isRightOpen() {
    return this.currentState !== RightSideBarState.CLOSE;
  }

  /**内部使用，切换某个右边状态 */
  private toggle(state: RightSideBarState) {
    if (this.currentState === state) {
      this.currentState = RightSideBarState.CLOSE;
    } else {
      this.currentState = state;
    }
  }
  // 关闭右边状态
  closeRight(state?: RightSideBarState) {
    // 如果state为空，则关闭所有的左边状态
    if (!state) {
      this.currentState = RightSideBarState.CLOSE;
    }
    if (this.currentState === state) {
      this.currentState = RightSideBarState.CLOSE;
    }
  }
  /**打开右边栏菜单 */
  openRight(state: RightSideBarState) {
    if (this.currentState !== state) {
      this.currentState = state;
    }
  }

  /**快捷使用：竞猜是否打开 */
  isCompetitionOpen() {
    return this.currentState === RightSideBarState.COMPETITION;
  }
  /**切换竞猜 */
  toggleCompetition() {
    this.toggle(RightSideBarState.COMPETITION);
  }
  /**切换到搜索 */
  toggleSearch() {
    this.toggle(RightSideBarState.SEARCH);
  }

  /**快捷使用，通知栏是否打开 */
  isNotifyOpen() {
    return this.currentState === RightSideBarState.NOTICE;
  }
  /**切换通知栏 */
  toggleNotify() {
    this.toggle(RightSideBarState.NOTICE);
  }

  /**快捷使用，聊天窗口是否打开着 */
  isChatOpen() {
    return this.currentState === RightSideBarState.CHAT;
  }
  /**切换聊天窗口 */
  toggleChat() {
    this.toggle(RightSideBarState.CHAT);
  }

  /** 手机模式：折叠所有菜单 */
  closeAll() {
    this.leftMenuFold = true;
    this.currentState = RightSideBarState.CLOSE;
  }
  /** 手机模式：是否所有菜单都关闭了 */
  isAllClosed() {
    return this.leftMenuFold && this.currentState === RightSideBarState.CLOSE;
  }
}

export const layout = reactive(new Layout());

// layout.startListen();
