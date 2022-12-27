import { PositionRequest } from "@/common";
import { reactive } from "vue";

/**
 * 持仓
 */
export function usePosition() {
  const positionStroe = reactive({
    position: [],
  });
  const getPosition = async () => {
    try {
      const { data } = await PositionRequest();
    } catch {}
  };

  return { positionStroe, getPosition };
}
