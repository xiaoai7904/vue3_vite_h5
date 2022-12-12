import { reactive } from "vue";
import { useRouter } from "vue-router";
import { LoginRequest, RouterNameEnum } from "@/common";

export type LoginFormType = {
  Username: string;
  Password: string;
};

export type LoginStoreType = {
  loginLoading: boolean;
  form: LoginFormType;
};

const loginStore = reactive<LoginStoreType>({
  loginLoading: false,
  form: {
    Username: "",
    Password: "",
  },
});

export function useLogin() {
  const router = useRouter();
  const login = async () => {
    try {
      loginStore.loginLoading = true;
      await LoginRequest(loginStore.form);
      router.push({ name: RouterNameEnum.WELCOME });
    } finally {
      loginStore.loginLoading = false;
    }
  };

  return { loginStore, login };
}
