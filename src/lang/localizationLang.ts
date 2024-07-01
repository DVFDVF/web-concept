import IcoEn from '@/assets/icon/head/ico-en.vue';
import IcoPt from '@/assets/icon/head/flag/ico-zh.vue';
import IcoEs from '@/assets/icon/head/flag/ico-es.vue';
import IcoPtbr from '@/assets/icon/head/flag/ico-pt_br.vue';
import IcoIna from '@/assets/icon/head/flag/ico-ina.vue';
import Icovn from '@/assets/icon/head/flag/ico-vn.vue';
import { markRaw } from 'vue';
import { lang } from '.';
const IcoEnt = markRaw(IcoEn);
const IcoPtRef = markRaw(IcoPt);
const IcoEsRef = markRaw(IcoEs);
const IcoPtbrRef = markRaw(IcoPtbr);
const IcoInaRef = markRaw(IcoIna);
const IcovnRef = markRaw(Icovn);

export const IconMapping: Record<string, any> = {
  en: IcoEnt,
  zh: IcoPtRef,
  es: IcoEsRef,
  ina: IcoInaRef,
  pt_br: IcoPtbrRef,
  vn: IcovnRef,
};
export const NameMapping: Record<string, string> = {
  en: 'English',
  zh: '中文',
  es: 'Spanish',
  ina: 'Indonesian',
  pt_br: 'Português (BR)',
  vn: 'Vietnamese',
};

export function getLangeIcon() {
  const langName = lang.m;
  const icon = IconMapping[langName];
  const name = NameMapping[langName];
  return { icon, name, lan: langName };
}

interface LanguageItem {
  icon: any;
  key: string;
  name: string;
}

// 定义语言列表
export const LanguageList: LanguageItem[] = [
  {
    icon: IcoEnt,
    key: 'en',
    name: 'English',
  },
  {
    icon: IcoPtRef,
    key: 'zh',
    name: '中文',
  },
  {
    icon: IcoEsRef,
    key: 'es',
    name: 'Spanish',
  },
  {
    icon: IcoPtbrRef,
    key: 'pt_br',
    name: 'Português (BR)',
  },
  {
    icon: IcoInaRef,
    key: 'ina',
    name: 'Indonesian',
  },
  {
    icon: IcovnRef,
    key: 'vn',
    name: 'Vietnamese',
  },
];
