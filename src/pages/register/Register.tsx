import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, Button, Checkbox, NavBar, Icon } from "vant";
import { useI18n } from "vue-i18n";
import { RouterNameEnum } from "@/common";
import { useRegister } from "@/hook";
import "./Register.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { registerStore, register } = useRegister();

    return () => (
      <div class="register">
        <NavBar
          title={t("register.title" /**注册 */)}
          fixed
          safe-area-inset-top
          v-slots={{
            left: () => (
              <Icon
                name="cross"
                size="20"
                onClick={() => router.push({ name: RouterNameEnum.LOGIN })}
              />
            ),
          }}
        />
        <div class="register-form">
          <Form>
            <Field
              v-model={registerStore.form.UserName}
              placeholder={t("register.nameTips" /**请输入真实姓名 */)}
              rules={[
                {
                  required: true,
                  message: t("register.nameTips" /**请输入真实姓名 */),
                },
              ]}
            />
            <Field
              v-model={registerStore.form.Mobile}
              type="tel"
              placeholder={t("forgetPassword.phoneTips" /**请输入手机号 */)}
              rules={[
                {
                  required: true,
                  message: t("forgetPassword.phoneTips" /**请输入手机号 */),
                },
              ]}
              v-slots={{
                button: (
                  <Button round block type="primary" size="mini">
                    {t("forgetPassword.sendCode" /**发送验证码 */)}
                  </Button>
                ),
              }}
            />
            <Field
              type="number"
              placeholder={t(
                "forgetPassword.verificationCodeTips" /**请输入短信验证码 */
              )}
              rules={[
                {
                  required: true,
                  message: t(
                    "forgetPassword.verificationCodeTips" /**请输入短信验证码 */
                  ),
                },
              ]}
            />
            <Field
              v-model={registerStore.form.Password}
              type="password"
              placeholder={t("login.passwordTips" /**请输入密码 */)}
              rules={[
                {
                  required: true,
                  message: t("login.passwordTips" /**请输入密码 */),
                },
              ]}
            />
            <Field
              type="password"
              placeholder="请确认交易密码"
              rules={[{ required: true, message: "请确认交易密码" }]}
            />
            <Field
              placeholder={t("register.请输入推荐码" /**请输入密码 */)}
              rules={[
                {
                  required: true,
                  message: t("register.请输入推荐码" /**请输入密码 */),
                },
              ]}
            />
            <Checkbox icon-size="14">
              {/**我已知晓并同意“开户协议”各项条约 */}
              <i18n-t
                keypath="register.tips1"
                scope="global"
                v-slots={{
                  open: () => (
                    <span class="agreement">{t("welcome.tips2")}</span>
                  ),
                }}
              />
            </Checkbox>
            <div class="register-footer">
              <Button
                round
                block
                type="primary"
                size="small"
                onClick={register}
              >
                {t("register.title" /**注册 */)}
              </Button>
              <Button
                round
                block
                plain
                type="primary"
                size="small"
                onClick={() => router.push({ name: RouterNameEnum.LOGIN })}
              >
                {t("register.gotoLogin" /**  已有账号, 马上登录 */)}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  },
});
