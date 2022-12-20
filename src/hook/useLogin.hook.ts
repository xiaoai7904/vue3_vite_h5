import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import {
  LoginRequest,
  LogoutRequest,
  RouterNameEnum,
  XA_PASSWORD,
  XA_TOKEN,
  XA_USERINFO,
  LoginStoreType,
  LoginResultType,
  UserInfoType,
} from "@/common";
import { useLocalStorage } from "@/hook";

export function useLogin() {
  const loginStore = reactive<LoginStoreType>({
    loading: false,
    form: {
      username: "",
      password: "",
    },
    rememberPassword: false,
    welcomeCheckBox: false,
    welcomeCheckError: false,
  });
  const router = useRouter();
  const { localStore } = useLocalStorage();

  const checkField = (errorInfo: any[]) => {
    console.log(errorInfo);
  };
  const login = async () => {
    try {
      loginStore.loading = true;
      const { data } = await LoginRequest<any, LoginResultType>(
        loginStore.form
      );
      setLocalStore(data);
      router.push({ name: RouterNameEnum.WELCOME });
    } finally {
      loginStore.loading = false;
    }
  };

  const logout = async () => {
    try {
      loginStore.loading = true;
      await LogoutRequest();
      setLocalStore({ token: "", userInfo: {} as UserInfoType });
      router.replace({ name: RouterNameEnum.LOGIN });
    } finally {
      loginStore.loading = false;
    }
  };

  const setLocalStore = (data: LoginResultType) => {
    localStore.set(XA_TOKEN, data.token);
    localStore.set(XA_USERINFO, data.userInfo);
  };

  const goHome = () => {
    if (!loginStore.welcomeCheckBox) {
      loginStore.welcomeCheckError = true;
      setTimeout(() => {
        loginStore.welcomeCheckError = false;
      }, 500);
      return;
    }
    router.push({ name: RouterNameEnum.HOME });
  };

  watch(
    () => loginStore.rememberPassword,
    (newValue) => {
      if (newValue) {
        localStore.set(XA_PASSWORD, JSON.stringify(loginStore.form), 604800000);
      } else {
        localStore.remove(XA_PASSWORD);
      }
    }
  );
  return { loginStore, login, logout, checkField, goHome };
}
