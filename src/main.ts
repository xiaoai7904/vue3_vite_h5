import { createApp } from "vue";
import router from "./router";
import 'vant/lib/index.css';
import "./style/index.less"
import App from "./App";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
