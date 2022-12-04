import { defineComponent } from "vue";
import { BaseRouterView } from "@/components/BaseRouterView";

export default defineComponent({
  setup() {
    return () => <BaseRouterView />;
  },
});
