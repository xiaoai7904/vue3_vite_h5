import { reactive } from "vue";
import {
  BuyRequest,
  RechargeRequest,
  SellRequest,
  WithdrawRequest,
  PositionRequest,
  CreateRechargeOrderRequest,
} from "@/common";

const payStore = reactive({
  recahrgeType: 1,
  recahrgeNumber: "200",
  recahrgeOrderId: "",
  recahrgePic: "",
  rehcargeLoading: false,

  whithdrawAmount: 0,
  whithdrawPhone: "",
  whithdrawCardNo: "",
  whithdrawBank: "",
  withdrawPwd: "",
  withdrawLoading: false
});

/**
 * 充值提现持仓购买相关
 */
export function usePay() {
  // 创建充值订单
  const createRechargeOrder = async () => {
    try {
      payStore.rehcargeLoading = true;
      const { data } = await CreateRechargeOrderRequest({
        number: payStore.recahrgeNumber,
        type: payStore.recahrgeType,
      });
    } catch (error) {
    } finally {
      payStore.rehcargeLoading = false;
    }
  };

  // 充值
  const recahrge = async () => {
    try {
      await RechargeRequest({
        orderId: payStore.recahrgeOrderId,
        pic: payStore.recahrgePic,
      });
    } catch (error) {}
  };

  // 提现
  const withdraw = async () => {
    try {
      await WithdrawRequest();
    } catch (error) {}
  };

  // 出售
  const sell = async () => {
    try {
      await SellRequest();
    } catch (error) {}
  };

  // 购买
  const buy = async () => {
    try {
      await BuyRequest();
    } catch (error) {}
  };

  // 持仓
  const postion = async () => {
    try {
      await PositionRequest();
    } catch (error) {}
  };

  return { payStore, createRechargeOrder, recahrge, withdraw, sell, postion };
}
