import { reactive } from "vue";
import { showToast, showSuccessToast } from "vant";
import { useRouter } from "vue-router";
import {
  BuyRequest,
  RechargeRequest,
  SellRequest,
  WithdrawRequest,
  PositionRequest,
  CreateRechargeOrderRequest,
  RechargeListRequest,
  WithdrawListRequest,
  PayStoreType,
  RechargeCreateResType,
  RechargeListItemType,
  WhithdrawListItemType,
  ObjType,
  RouterNameEnum,
  ListType,
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

  rechargeList: [],
  withdrawList: [],

  rechargePageNum: 1,
  rechargePageSize: 10,
  rechargeTotal: 0,
  rechargePages: 0,

  withdrawPageNum: 1,
  withdrawPageSize: 10,
  withdrawTotal: 0,
  withdrawPages: 0,
});

const rechargeStatus: ObjType<string> = {
  1: "下单成功",
  2: "成功",
  3: "失败",
  4: "待审核",
};

const withdrawStatus: ObjType<string> = {
  1: "待处理",
  2: "审核通过",
  3: "审核不通过",
};

/**
 * 充值提现持仓购买相关
 */
export function usePay() {
  const router = useRouter();
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
      showSuccessToast("充值成功");
      router.replace({ name: RouterNameEnum.MY });
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

  // 充值列表
  const getRechargeList = async () => {
    try {
      const { data } = await RechargeListRequest<
        ObjType<any>,
        ListType<RechargeListItemType>
      >({
        pageNum: payStore.rechargePageNum,
        pageSize: payStore.rechargePageSize,
      });
      payStore.rechargePageNum = data.currentPage;
      payStore.rechargeTotal = data.total;
      payStore.rechargePages = Math.ceil(
        data.total / payStore.rechargePageSize
      );
      payStore.rechargeList = data.list;
    } catch (error) {}
  };

  // 提现列表
  const getWithdrawList = async () => {
    try {
      const { data } = await WithdrawListRequest<
        ObjType<any>,
        ListType<WhithdrawListItemType>
      >({
        pageNum: payStore.withdrawPageNum,
        pageSize: payStore.withdrawPageSize,
      });
      payStore.withdrawPageNum = data.currentPage;
      payStore.withdrawTotal = data.total;
      payStore.withdrawPages = Math.ceil(
        data.total / payStore.withdrawPageSize
      );
      payStore.withdrawList = data.list;
    } catch (error) {}
  };

  const checkField = () => {};
  return {
    payStore,
    rechargeStatus,
    withdrawStatus,
    createRechargeOrder,
    recahrge,
    withdraw,
    sell,
    postion,
    checkField,
    getRechargeList,
    getWithdrawList,
  };
}
