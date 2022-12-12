import { createApp } from "vue";
import router from "./router";
import 'vant/lib/index.css';
import "./style/index.less"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from "./App";
import i18n from "./i18n";
import {Observer} from '@/common'

window.xaCustomEvent = new Observer();

const app = createApp(App);
app.use(router);
app.use(i18n);

router.isReady().then(() => {
  app.mount("#app");
});
