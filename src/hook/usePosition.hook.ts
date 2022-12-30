import {
  PositionRequest,
  PositionHisRequest,
  ListType,
  PositionItemType,
} from "@/common";
import { reactive } from "vue";

const positionStroe = reactive({
  positionList: [] as PositionItemType[],
  positionHisList: [] as PositionItemType[],

  positionPageNum: 1,
  positionPageSize: 10,
  positionTotal: 0,
  positionPages: 0,

  positionHisPageNum: 1,
  positionHisPageSize: 10,
  positionHisTotal: 0,
  positionHisPages: 0,
});

/**
 * 持仓
 */
export function usePosition() {
  // 持仓列表
  const getPosition = async () => {
    try {
      const { data } = await PositionRequest<any, ListType<PositionItemType>>({
        pageNum: positionStroe.positionPageNum,
        pageSize: positionStroe.positionPageSize,
      });
      positionStroe.positionPageNum = data.currentPage;
      positionStroe.positionTotal = data.total;
      positionStroe.positionPages = Math.ceil(
        data.total / positionStroe.positionPageSize
      );
      positionStroe.positionList = data.list;
    } catch {}
  };

  // 历史持仓
  const getPositionHis = async () => {
    try {
      const { data } = await PositionHisRequest<
        any,
        ListType<PositionItemType>
      >({
        pageNum: positionStroe.positionHisPageNum,
        pageSize: positionStroe.positionHisPageSize,
      });
      positionStroe.positionHisPageNum = data.currentPage;
      positionStroe.positionHisTotal = data.total;
      positionStroe.positionHisPages = Math.ceil(
        data.total / positionStroe.positionHisPageSize
      );
      positionStroe.positionHisList = data.list;
    } catch {}
  };

  return { positionStroe, getPosition, getPositionHis };
}
