import { createI18n } from "vue-i18n";
import { XA_LANG } from "@/common";
import { zhCn } from "./zh-CN";
import { zhTw } from "./zh-TW";
import { enUs } from "./en-US";

const defaultLang = "zh-CN";
const currentLang = localStorage.getItem(XA_LANG) || defaultLang;

const i18n = createI18n({
  locale: currentLang,
  fallbackLocale: defaultLang,
  allowComposition: true,
  messages: {
    "zh-CN": { ...zhCn },
    "zh-TW": { ...zhTw },
    "en-US": { ...enUs },
  },
});

export default i18n;
