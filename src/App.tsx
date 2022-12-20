import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { BaseRouterView } from "@/components/BaseRouterView";
import { XA_LOGIN_EXPIRED, RouterNameEnum } from "@/common";
export default defineComponent({
  setup() {
    const router = useRouter();
    onMounted(() => {
      window.xaCustomEvent.on(XA_LOGIN_EXPIRED, () => {
        router.push({ name: RouterNameEnum.LOGIN });
      });
    });
    return () => <BaseRouterView />;
  },
});
