import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/index.less';
import * as Sentry from '@sentry/vue';
const hostName = window.location.hostname;

if (
  hostName.includes('localhost') ||
  hostName.includes('127.0.0.1') ||
  hostName.includes('192.168.')
) {
  console.log('本地调试，不上报sentry');
} else {
  //除了 localhost、127.0.0.1 和 192.168.. 外的所有请求都上报
  // sentry上报
  Sentry.init({
    dsn: 'https://ded71a3abcdbf3ec8aae437c14567b23@o4506793688104960.ingest.us.sentry.io/4506982704414720',
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    tracePropagationTargets: [hostName],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}
createApp(App).use(router).component('Image', Image).mount('#app');
