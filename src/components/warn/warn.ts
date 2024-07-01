import dataCenter from '@/dataCenter';
import { notification } from 'ant-design-vue';
import warnVue from './warn.vue';
import { h } from 'vue';
export const tip = {
  success: (text: string) => openNotification('success', text),
  info: (text: string) => openNotification('info', text),
  warning: (text: string) => openNotification('warning', text),
  error: (text: string) => openNotification('error', text),
};
const openNotification = (status: string, text: string) => {
  const key = `open${Date.now()}`;

  notification.config({
    duration: 3,
    maxCount: dataCenter.layout.isMobile ? 1 : 10,
  });
  notification.open({
    message: null,
    description: h(warnVue, {
      status: status,
      text: text,
    }),
    placement: 'top',
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
