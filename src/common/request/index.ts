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
 * @param params { }
 * @returns Promise<any>
 */
export function BuyRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/buy", params);
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
 * @param params { }
 * @returns Promise<any>
 */
export function SellRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/v1/account/sell", params);
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
