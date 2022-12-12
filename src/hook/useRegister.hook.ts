import { reactive } from "vue";
import { RegisterRequest } from "@/common";

export type RegisterFormType = {
  UserName: string;
  Mobile: string;
  Password: string;
  UserSalt: string;
  Email: string;
  NickName: string;
  InviteCode: string;
  Remark: string;
};
export type RegisterStoreType = {
  registerLoading: boolean;
  form: RegisterFormType;
};

const registerStore = reactive<RegisterStoreType>({
  registerLoading: false,
  form: {
    UserName: "",
    Mobile: "",
    Password: "",
    UserSalt: "",
    Email: "",
    NickName: "",
    InviteCode: "",
    Remark: "",
  },
});

/**
 * 注册逻辑
 */
export function useRegister() {
  const register = async () => {
    try {
      registerStore.registerLoading = true;
      await RegisterRequest(registerStore.form);
    } finally {
      registerStore.registerLoading = false;
    }
  };

  return { registerStore, register };
}
