import { DefineComponent, createApp } from 'vue';
import { Router } from 'vue-router';

let zIndex = 1000;
/**
 * 打开位于顶层的弹窗
 * @param app vue模块
 * @param options 传给vuem模块的参数
 * @returns {vm,close,container} vnode为vue生成的虚拟节点，
 * 可以调用函数.close为外部可以主动调用的关闭函数；
 * container是弹窗的容器，可以调用classList.add来动态增加样式
 */
export function openModal<T extends Record<string, any>>(
  app: DefineComponent<T, any, any>,
  options?: T,
) {
  // 如果已经打开了，就不重复打开了
  if (app.__isOpen) return;
  const vm = createApp(app, options);
  vm.component('Image', Image);
  const div = document.createElement('div');
  document.body.appendChild(div);
  // 补充蒙版样式，和居中效果
  div.className = 'top-layer center';
  div.style.zIndex = `${++zIndex}`;
  const container = document.createElement('div');
  container.className = 'container';
  div.appendChild(container);
  const box = document.createElement('div');
  container.appendChild(box);

  const close = (
    event?: MouseEvent | undefined,
    isanim?: boolean,
    time?: number,
    mount?: boolean,
  ) => {
    if (isanim) {
      div.style.transition = 'background 0.3s';
      div.style.background = 'rgba(0, 0, 0, 0)';
      setTimeout(() => {
        vm.unmount();
        div.remove();
        app.__isOpen = false;
      }, time);
    } else {
      div.remove();
      if (!mount) {
        vm.unmount();
      }
      app.__isOpen = false;
    }
  };
  app.__isOpen = true;
  //隐藏关闭按钮
  if (!options?.hideClose) {
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close btn center';
    closeBtn.innerHTML = `<svg class="svg-use" width="24" height="24" focusable="false" aria-hidden="true"><use xlink:href="/svg/sprite.svg#icon-close"></use></svg>`;
    container.appendChild(closeBtn);
    closeBtn.onclick = close;
  }
  vm.provide('close', close);
  const vnode = vm.mount(box) as any;
  return {
    vnode,
    close,
    container,
  };
}
export type ModalCloseFun = (
  event?: MouseEvent | undefined,
  isanim?: boolean,
  time?: number,
  mount?: boolean,
) => void | undefined;

let _router: Router;
export function registerRouter(router: Router) {
  _router = router;
}
export function getRouter() {
  return _router;
}

export function forceReload() {
  const href = location.href;
  if (href.match(/(\?|&)v=\d+/)) {
    location.href = href.replace(/(\?|&)v=\d+/, ($0, $1) => {
      return `${$1}v=${Date.now()}`;
    });
  } else {
    if (href.includes('?')) {
      location.href = `${href}&v=${Date.now()}`;
    } else {
      location.href = `${href}?v=${Date.now()}`;
    }
  }
  location.reload();
}
