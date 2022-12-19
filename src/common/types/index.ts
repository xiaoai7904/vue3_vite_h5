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
  loginLoading: boolean;
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
