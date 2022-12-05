import { defineComponent } from "vue";
import HomeBanner from "./HomeBanner";
import HomeNav from "./HomeNav";
import HomeNew from "./HomeNew";
import HomePopularity from "./HomePopularity";
import HomeFinancial from "./HomeFinancial";
import "./Home.style.less";

export default defineComponent({
  setup() {
    return () => (
      <div class="home">
        <HomeBanner />
        <HomeNav />
        <HomeNew />
        <HomePopularity />
        <HomeFinancial />
      </div>
    );
  },
});
