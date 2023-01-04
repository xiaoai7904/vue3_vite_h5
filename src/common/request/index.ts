import { Http } from "@/common";

/**
 * 登录
 * @param params { "Username": "string","Password": "string" }
 * @returns Promise<any>
 */
export function LoginRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/user/login", params);
}

/**
 * 退出
 * @param params { "Authorization": "string" }
 * @returns Promise<any>
 */
export function LogoutRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/user/logout", params);
}

/**
 * 注册
 * @param params {"UserName":"string","Mobile":"string","Password":"string","UserSalt":"string","Email":"string","NickName":"string","InviteCode":"string","Remark":"string"}
 * @returns Promise<any>
 */
export function RegisterRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/user/reg", params);
}

/**
 * 上传图片
 * @param params {}
 * @returns Promise<any>
 */
export function UploadRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/singleImg", params);
}

/**
 * 重置用户密码
 * @param params {"Id": number, "Password": "string"}
 * @returns Promise<any>
 */
export function RestPasswordRequest<T, R>(params = {} as T) {
  return Http.of().put<T, R>("/api/v1/user/resetPwd", params);
}

/**
 * 我的佣金
 * @param params {}
 * @returns Promise<any>
 */
export function CommissionRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/account/commission", params);
}

/**
 * 产品列表
 * @param params {GoodsName: string, FirmId: number, CategoryId: number, PriceRange: number[], DateRange: string[], PageNum: number, PageSize: number, OrderBy: string }
 * @returns Promise<any>
 */
export function GoodsListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/goods/list", params);
}

/**
 * 产品详情
 * @param params { Id: number }
 * @returns Promise<any>
 */
export function GoodsDetailsRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/goods/get", params);
}

/**
 * 购买
 * @param params { Number, FundId }
 * @returns Promise<any>
 */
export function BuyRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/buy", params);
}

/**
 * 购买货币基金
 * @param params { Number, FundId }
 * @returns Promise<any>
 */
export function BuyMRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/mbuy", params);
}

/**
 * 账号详情
 * @param params { }
 * @returns Promise<any>
 */
export function AccountDetailRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/account/detail", params);
}

/**
 *持仓
 * @param params { }
 * @returns Promise<any>
 */
export function PositionRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/position", params);
}

/**
 * 历史持仓
 * @param params { DateRange, PageNum, PageSize, OrderBy }
 * @returns Promise<any>
 */
export function PositionHisRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/positionHis", params);
}

/**
 * 创建充值订单
 * @param params { "type": "number", "number": "number" }
 * @returns Promise<any>
 */
export function CreateRechargeOrderRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/rechargeOrder", params);
}

/**
 *充值
 * @param params { "OrderId": "string", "Pic": "string" }
 * @returns Promise<any>
 */
export function RechargeRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/recharge", params);
}

/**
 *售出
 * @param params { Number, FundId }
 * @returns Promise<any>
 */
export function SellRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/sell", params);
}

/**
 * 赎回货币基金
 * @param params { OrderId, Number, Force }
 * @returns Promise<any>
 */
export function SellMRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/msell", params);
}

/**
 *提现
 * @param params {"AMount":0,"Tel":"string","CardNo":"string","BankName":"string","Holder":"string","WithdrawPwd":"string"}
 * @returns Promise<any>
 */
export function WithdrawRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/withdraw", params);
}

/**
 * 获取分类
 * @param params {"Id":number}
 * @returns Promise<any>
 */
export function CategoryByIdRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/category/get", params);
}

/**
 * 分类列表
 * @param params {"CategoryName":string, CategoryId: number, Min: string, DateRange: string[], PageNum: number, PageSize: number, OrderBy:string}
 * @returns Promise<any>
 */
export function CategoryListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/category/list", params);
}

/**
 * 获取货币基金
 * @param params {"Id":number }
 * @returns Promise<any>
 */
export function MfundByIdRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/mfund/get", params);
}

/**
 * 获取货币基金列表
 * @param params {"Name":number, Day: 产品周期, Ratio:收益率, MinNum: 最小购买金额, MaxNum: 最大购买金额, Status, Fee: 购买费率, DateRange: string[], PageNum, PageSize, OrderBy }
 * @returns Promise<any>
 */
export function MfundListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/mfund/list", params);
}

/**
 * 获取基金
 * @param params {"Id":number }
 * @returns Promise<any>
 */
export function FundsByIdRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/funds/get", params);
}

/**
 * 获取基金列表
 * @param params {"Name":number, CategoryId, Risk:风险等级, PriceRange, DateRange: string[], PageNum, PageSize, OrderBy }
 * @returns Promise<any>
 */
export function FundsListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/funds/list", params);
}

/**
 * 获取商户
 * @param params {"Id":number }
 * @returns Promise<any>
 */
export function FirmByIdRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/firm/get", params);
}

/**
 * 获取商户列表
 * @param params {"FirmName", FirmId, Status, DateRange: string[], PageNum, PageSize, OrderBy }
 * @returns Promise<any>
 */
export function FirmListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/firm/list", params);
}

/**
 * 基金净值曲线图
 * @param params {id}
 * @returns
 */
export function FundsNetValuesRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/funds/netValues", params);
}

/**
 * 充值列表
 * @param params {type: 支付方式 1微信 2支付宝 3qq, status: 订单状态 1下单成功 2充值成功 3充值失败 4.转账待审核, PayName, PayType, DateRange, PageNum, PageSize, OrderBy}
 * @returns
 */
export function RechargeListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/recharges", params);
}

/**
 * 充值列表
 * @param params {bkId: 银行卡信息, status: 订单状态 1待处理 2审核通过 3审核不通过, type, DateRange, PageNum, PageSize, OrderBy}
 * @returns
 */
export function WithdrawListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/v1/withdraw/list", params);
}