import { reactive } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import {
  RegisterRequest,
  RouterNameEnum,
  RegisterStoreType,
} from "@/common";

/**
 * 注册逻辑
 */
export function useRegister() {
  const registerStore = reactive<RegisterStoreType>({
    registerLoading: false,
    form: {
      userName: "",
      mobile: "",
      password: "",
      userSalt: "",
      email: "",
      nickName: "",
      inviteCode: "",
      remark: "",
    },
    check: false,
    checkError: false,
  });
  const { t } = useI18n();
  const router = useRouter();
  const checkField = (errorInfo: any[]) => {
    console.log(errorInfo);
  };
  const register = async () => {
    try {
      if (!registerStore.check) {
        registerStore.checkError = true;
        setTimeout(() => {
          registerStore.checkError = false;
        }, 500);
        return;
      }
      registerStore.registerLoading = true;
      await RegisterRequest(registerStore.form);
      showToast(t("register.registerSuccess" /**注册成功 */));
      setTimeout(() => router.push({ name: RouterNameEnum.LOGIN }), 500);
    } finally {
      registerStore.registerLoading = false;
    }
  };

  return { registerStore, register, checkField };
}
