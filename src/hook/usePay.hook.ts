import {
  BuyRequest,
  RechargeRequest,
  SellRequest,
  WithdrawRequest,
  PositionRequest,
} from "@/common";

/**
 * 充值提现持仓购买相关
 */
export function usePay() {
  // 充值
  const recahrge = async () => {
    try {
      await RechargeRequest();
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
  
  return { recahrge, withdraw, sell, postion };
}
