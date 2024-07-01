/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// custom.d.ts
declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.mp3' {
  const value: string;
  export = value;
}
