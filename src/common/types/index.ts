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

export type ObjType<T> = Record<string, T>;

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

// 货币基金
export type FundsMItemType = {
  createdAt: string;
  day: number;
  deletedAt: string;
  fee: number;
  id: number;
  maxNum: number;
  minNum: number;
  name: string;
  ratio: number;
  status: number;
  updatedAt: string;
};

// 基金
export type FundsItemType = {
  cid: number;
  createdAt: string;
  deletedAt: string;
  id: number;
  info: string;
  name: string;
  pic: string;
  price: number;
  rank: string;
  ratio: number;
  realPrice: number;
  risk: string;
  status: number;
  updatedAt: string;
};

// 产品hook store
export type ProductStoreType = {
  productList: FundsMItemType[];
  productPageNum: number;
  productPageSize: number;
  productTotal: number;
  productPages: number;
  productDetails: FundsMItemType;

  fundsList: FundsItemType[];
  fundsPageNum: number;
  fundsPageSize: number;
  fundsTotal: number;
  fundsPages: number;
  fundsDetails: FundsItemType;

  fundsNetValuesChart: Record<string, number>[];
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

// 提现列表
export type WhithdrawListItemType = {
  id: string;
  // 提现用户id
  uid: number;
  //银行卡信息
  bkId: number;
  // 提现金额
  num: number;
  //审核时间
  endtime: string;
  //订单状态 1待处理 2审核通过 3审核不通过
  status: number;
  type: string;
  realNum: number;
  shouxu: string;
  // 创建时间
  createdDate: string;
  // 更新时间
  updatedDate: string;
  // 删除时间
  deletedDate: string;
};

// 充值列表
export type RechargeListItemType = {
  id: string;
  // 用户id
  uid: number;
  // 充值姓名
  realName: string;
  // 手机
  tel: string;
  // 充值金额
  num: number;
  // 支付方式 1微信 2支付宝 3qq
  type: number;
  // 打款凭证
  pic: string;
  // 处理时间
  endtime: string;
  // 订单状态 1下单成功 2充值成功 3充值失败 4.转账待审核
  status: number;
  // 支付名称
  payName: string;
  isVip: number;
  level: number;
  payType: number;
  // 创建时间
  createdDate: string;
  // 更新时间
  updatedDate: string;
  // 删除时间
  deletedDate: string;
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
  // 充值列表
  rechargeList: RechargeListItemType[];
  // 提现列表
  withdrawList: WhithdrawListItemType[];
  [key: string]: any;
};

export type PositionItemType = {
  id: string;
  // 会员ID
  uid: number;
  // 交易金额
  num: number;
  // 交易完成时间
  completeTime: number;
  // 订单结束时间
  endTime: number;
  // 订单状态 0待付款 1交易完成 2用户取消 3强制完成 4强制取消 5交易冻结 6.等待取出 7.订单结束
  status: number;
  // 佣金
  commission: number;
  // 代理佣金
  agentCommission: number;
  // 下级佣金
  sonCommission: number;
  // 佣金发放状态 0未发放 1已发放 2账号冻结
  cStatus: number;
  // 预计收益
  preIncome: number;
  // 商品ID
  fundId: number;
  // 商品数量
  fundCount: number;
  // 商品分类
  cid: number;
  // 创建日期
  createdAt: number;
  // 更新日期
  updatedAt: number;
  // 删除日期
  deletedAt: number;
};
