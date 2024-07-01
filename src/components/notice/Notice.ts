import dataCenter from '@/dataCenter';
import { notification } from 'ant-design-vue';
import Notice from './Notice.vue';
import { h } from 'vue';
import { GrandPrize } from '@/dataCenter/protocol';
export const openNotification = (grandPrize: GrandPrize) => {
  const key = `open${Date.now()}`;

  notification.config({
    duration: 3,
    maxCount: dataCenter.layout.isMobile ? 1 : 10,
  });
  // 定义关闭函数
  const closeNotification = () => {
    notification.close(key);
  };
  notification.open({
    message: null,
    description: h(Notice, {
      close: closeNotification,
      grandPrize: grandPrize,
    }),
    placement: 'topRight',
    style: {
      background: 'rgba(0, 0, 0, 0)',
      padding: '0',
      margin: '0',
    },
    top: '64px',
    key,
    closeIcon: h('span', {
      style: {
        display: 'none',
      },
    }),
  });
};
