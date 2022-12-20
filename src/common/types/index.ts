export type RequestResponse<T> = {
  code: number;
  data: T;
  message: string;
};

export type ListType<T> = {
  list: T[];
  total: number;
  currentPage: number;
};

export type LoginFormType = {
  username: string;
  password: string;
};

export type LoginStoreType = {
  loading: boolean;
  form: LoginFormType;
  rememberPassword: boolean;
  // 欢迎页面checkbox值
  welcomeCheckBox: boolean;
  // 欢迎页面checkerror
  welcomeCheckError: boolean;
};

export type UserInfoType = {
  avatar: string;
  id: number;
  userName: string;
  userNickname: string;
  userPassword: string;
  userSalt: string;
  userStatus: number;
};

export type LoginResultType = {
  token: string;
  userInfo: UserInfoType;
};

export type RegisterFormType = {
  userName: string;
  mobile: string;
  password: string;
  userSalt: string;
  email: string;
  nickName: string;
  inviteCode: string;
  remark: string;
};

export type RegisterStoreType = {
  registerLoading: boolean;
  form: RegisterFormType;
  check: boolean;
  checkError: boolean;
};

// 产品列表
export type ProductItemType = {
  cid: number;
  createdDate: string;
  deletedDate: string;
  duration: number;
  fid: number;
  goodsInfo: string;
  goodsName: string;
  goodsPic: string;
  goodsPrice: number;
  id: number;
  isTj: number;
  rate: number;
  status: number;
  updatedDate: string;
};

// 产品hook store
export type ProductStoreType = {
  productList: ProductItemType[];
  productPageNum: number;
  productPageSize: number;
  productTotal: number;
  productPages: number;
  productDetails: ProductItemType;
};

export type MyCommissionStoreType = {
  // 任务佣金
  direct: number;
  // 下级总佣金
  down: number;
  // 总佣金
  total: number;
};

// 用户数据hook
export type UserStoreType = {
  myCommission: MyCommissionStoreType;
};

// 创建充值订单返回数据
export type RechargeCreateResType = {
  orderId: string;
  payment: RechargeInfoType;
};

export type RechargeInfoType = {
  // 充值金额
  amount: number;
  // 银行卡
  bankName: string;
  // 分行
  branch: string;
  // 银行卡
  cardNo: string;
  // 名字
  holder: string;
};

export type PayStoreType = {
  // 充值类型(1: 银行卡)
  recahrgeType: number;
  // 充值金额
  recahrgeNumber: string;
  // 充值订单
  recahrgeOrderId: string;
  // 充值图片
  recahrgePic: string;
  // 充值loading
  rehcargeLoading: boolean;
  // 充值创建订单信息
  rechargeInfo: RechargeInfoType;
  // 提现金额
  whithdrawAmount: number;
  // 提现手机号
  whithdrawPhone: string;
  // 提现银行卡号
  whithdrawCardNo: string;
  // 提现银行
  whithdrawBank: string;
  // 提现密码
  withdrawPwd: string;
  // 提现loading
  withdrawLoading: boolean;
};
