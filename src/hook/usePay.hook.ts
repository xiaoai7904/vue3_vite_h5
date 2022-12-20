import { reactive } from "vue";
import { showToast } from "vant";
import {
  BuyRequest,
  RechargeRequest,
  SellRequest,
  WithdrawRequest,
  PositionRequest,
  CreateRechargeOrderRequest,
  PayStoreType,
  RechargeCreateResType,
} from "@/common";

const payStore = reactive<PayStoreType>({
  recahrgeType: 1,
  recahrgeNumber: "200",
  recahrgeOrderId: "",
  recahrgePic: "",
  rehcargeLoading: false,

  rechargeInfo: {
    amount: 0,
    bankName: "",
    branch: "",
    cardNo: "",
    holder: "",
  },

  whithdrawAmount: 0,
  whithdrawPhone: "",
  whithdrawCardNo: "",
  whithdrawBank: "",
  withdrawPwd: "",
  withdrawLoading: false,
});

/**
 * 充值提现持仓购买相关
 */
export function usePay() {
  // 创建充值订单
  const createRechargeOrder = async () => {
    try {
      payStore.rehcargeLoading = true;
      const { data } = await CreateRechargeOrderRequest<
        any,
        RechargeCreateResType
      >({
        number: payStore.recahrgeNumber,
        type: payStore.recahrgeType,
      });
      payStore.recahrgeOrderId = data.orderId;
      payStore.rechargeInfo = data.payment;
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject();
    } finally {
      payStore.rehcargeLoading = false;
    }
  };

  // 充值
  const recahrge = async () => {
    try {
      if (!payStore.recahrgePic) {
        showToast("请上传支付凭证图片");
        return;
      }
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

  const checkField = () => {};
  return {
    payStore,
    createRechargeOrder,
    recahrge,
    withdraw,
    sell,
    postion,
    checkField,
  };
}
