import { reactive } from "vue";
import {
  AccountDetailRequest,
  CommissionRequest,
  XA_TOKEN,
  MyCommissionStoreType,
  UserStoreType,
} from "@/common";
import { computed } from "@vue/reactivity";
import { useLocalStorage } from "@/hook";
const userStore = reactive({
  userInfo: null,
});

/**
 * 用户相关
 */
export function useUser() {
  const { localStore } = useLocalStorage();
  const isLogin = computed(() => !!localStore.get(XA_TOKEN));
  const userStore = reactive<UserStoreType>({
    myCommission: {
      direct: 0,
      down: 0,
      total: 0,
    },
  });

  const myCommissionInfo = computed<MyCommissionStoreType>(
    () => userStore.myCommission
  );
  /**
   *获取用户信息
   */
  const getUserInfo = async () => {
    try {
      if (!isLogin.value) return;
      const { data } = await AccountDetailRequest();
      console.log(data)
      //   userStore.userInfo = data;
    } catch (error) {}
  };

  /**
   * 获取用户佣金
   */
  const getMyCommission = async () => {
    try {
      const { data } = await CommissionRequest<any, MyCommissionStoreType>();
      userStore.myCommission = { ...data };
    } catch (error) {}
  };

  return { userStore, isLogin, myCommissionInfo, getUserInfo, getMyCommission };
}
