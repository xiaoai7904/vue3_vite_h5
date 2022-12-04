import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RouterNameEnum } from "@/common";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home"),
    meta: {
      title: "首页",
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, form, next) => {
  next();
});
export default router;
