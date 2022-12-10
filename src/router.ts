import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RouterNameEnum } from "@/common";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNameEnum.HOME,
    component: () => import("@/components/LayoutView"),
    children: [
      {
        path: "",
        name: RouterNameEnum.HOME,
        component: () => import("@/pages/home"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/positionRecord",
        name: RouterNameEnum.POSITIONRECORD,
        component: () => import("@/pages/positionRecord"),
        meta: {
          title: "持仓记录",
        },
      },
      {
        path: "/purchase",
        name: RouterNameEnum.PURCHASE,
        component: () => import("@/pages/purchase"),
        meta: {
          title: "申购列表",
        },
      },
      {
        path: "/my",
        name: RouterNameEnum.MY,
        component: () => import("@/pages/my"),
        meta: {
          title: "我的",
        },
      },
    ],
  },
  {
    path: "/purchaseDetails",
    name: RouterNameEnum.PURCHASEDETAILS,
    component: () => import("@/pages/purchase/PurchaseDetails"),
    meta: {
      title: "申购详情",
    },
  },
  {
    path: "/recharge",
    name: RouterNameEnum.RECHARGE,
    component: () => import("@/pages/recharge"),
    meta: {
      title: "充值",
    },
  },
  {
    path: "/rechargeDetails",
    name: RouterNameEnum.RECHARGEDETAILS,
    component: () => import("@/pages/recharge/RechargeDetails"),
    meta: {
      title: "充值详情",
    },
  },
  {
    path: "/withdraw",
    name: RouterNameEnum.WITHDRAW,
    component: () => import("@/pages/withdraw"),
    meta: {
      title: "提现",
    },
  },
  {
    path: "/login",
    name: RouterNameEnum.LOGIN,
    component: () => import("@/pages/login"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: RouterNameEnum.REGISTER,
    component: () => import("@/pages/register"),
    meta: {
      title: "注册",
    },
  },
  {
    path: "/forgetPassword",
    name: RouterNameEnum.FORGETPASSWORD,
    component: () => import("@/pages/forgetPassword"),
    meta: {
      title: "找回密码",
    },
  },
  {
    path: "/welcome",
    name: RouterNameEnum.WELCOME,
    component: () => import("@/pages/welcome"),
    meta: {
      title: "欢迎页",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, form, next) => {
  next();
});
export default router;
