import { defineComponent, onMounted } from "vue";
import { BaseRouterView } from "@/components/BaseRouterView";
import { useUser } from "@/hook";
export default defineComponent({
  setup() {
    const { getUserInfo } = useUser();
    onMounted(async () => {
      await getUserInfo();
    });
    return () => <BaseRouterView />;
  },
});
