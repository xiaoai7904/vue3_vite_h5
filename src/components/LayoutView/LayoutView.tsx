import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { Tabbar, TabbarItem, Image } from "vant";
import { RouterNameEnum } from "@/common";
import { BaseRouterView } from "../BaseRouterView";
import homeIcon from "@/assets/image/sy1.png";
import positionIcon from "@/assets/image/ls1.png";
import purchaseIcon from "@/assets/image/pd1.png";
import customerServerIcon from "@/assets/image/kf1.png";
import myIcon from "@/assets/image/wd1.png";

export default defineComponent({
  setup() {
    const { name } = useRoute();
    const activeIndex = [RouterNameEnum.HOME, RouterNameEnum.POSITIONRECORD];
    const activeTab = ref(activeIndex.indexOf(name as RouterNameEnum))
    return () => (
      <div>
        <BaseRouterView />
        <Tabbar v-model={activeTab.value}>
          <TabbarItem
            to="/"
            v-slots={{
              icon: (props: any) => <Image src={homeIcon} />,
            }}
          >
            <span>首页</span>
          </TabbarItem>
          <TabbarItem
            to="/positionRecord"
            v-slots={{
              icon: (props: any) => <Image src={positionIcon} />,
            }}
          >
            <span>持仓</span>
          </TabbarItem>
          <TabbarItem
            to="/purchase"
            v-slots={{
              icon: (props: any) => <Image src={purchaseIcon} />,
            }}
          >
            <span>申购</span>
          </TabbarItem>
          <TabbarItem
            v-slots={{
              icon: (props: any) => <Image src={customerServerIcon} />,
            }}
          >
            <span>客服</span>
          </TabbarItem>
          <TabbarItem
            v-slots={{
              icon: (props: any) => <Image src={myIcon} />,
            }}
          >
            <span>我的资产</span>
          </TabbarItem>
        </Tabbar>
      </div>
    );
  },
});
