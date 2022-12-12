import Utils from "./utils/Utils";
import Observer from "./observer/Observer";
import Http from "./http/Http";

export { Utils, Observer, Http };
export enum RouterNameEnum {
  // 首页
  HOME = "home",
  // 登录
  LOGIN = "login",
  // 注册
  REGISTER = "register",
  // 找回密码
  FORGETPASSWORD = "forgetPassword",
  // 欢迎页
  WELCOME = "welcome",
  // 持仓记录
  POSITIONRECORD = "positionRecord",
  // 申购列表
  PURCHASE = "purchase",
  // 申购详情
  PURCHASEDETAILS = "purchaseDetails",
  // 我的
  MY = "my",
  // 充值
  RECHARGE = "recharge",
  // 充值详情
  RECHARGEDETAILS = "rechargeDetails",
  // 充值记录
  RECHARGERECORD = "rechargeRecord",
  // 提现
  WITHDRAW = "withdraw",
  // 提现记录
  WITHDRAWRECORD = "withdrawRecord",
  // 余额宝
  BALANCEBAO = "balanceBao",
  // 余额宝转入转出记录
  BALANCEBAORECORD = "balanceBaoRecord",
  // 我的佣金
  COMMISSION = "commission",
  // 账户明显
  ACCOUNTDETAILS = "accountDetails",
  // 团队业绩
  TEAMPERFORMANCE = "teamPerformance",
  // 个人信息
  PERSONALINFO = "personalInfor",
  // 个人信息-修改名称
  PERSONALINFOUPDATENAME = "personalInforUpdateName",
  // 个人信息-修改密码
  PERSONALINFOUPDATEPASSWORD = "personalInforUpdatePassword",
}

// 语言标识
export const XA_LANG = `XA_LANG`;
// 登陆状态
export const XA_LOGIN_STATUS = "XA_LOGIN_STATUS";
// Token
export const XA_TOKEN = "XA_TOKEN";
// loginExpired
export const XA_LOGIN_EXPIRED = "XA_LOGIN_EXPIRED";
