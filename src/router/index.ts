import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import Home from '../views/home/home.vue';
import { tokenController } from '@/manager/token';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
function checkLoginStatus(
  to: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  if (!tokenController.freshToken) {
    next(false);
  } else {
    next();
  }
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    checkLoginStatus(to, next);
  } else {
    next();
  }
});
router.afterEach((to, from, next) => {
  const divElement = document.getElementById('main-content');
  // 将 div 滚动到顶部
  if (divElement) {
    divElement.scrollTop = 0;
  }
});

export default router;
