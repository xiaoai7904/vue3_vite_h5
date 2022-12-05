import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RouterNameEnum } from "@/common";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNameEnum.HOME,
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
