import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Field, Button } from "vant";
import "./PersonalInformation.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { query } = useRoute();
    const isLoginPassword = query.type === "login";

    return () => (
      <div class="personal-info personal-info-update-name">
        <NavBar
          title={t(
            isLoginPassword
              ? "personalInfo.loginPasswordMange" /**登录密码 */
              : "personalInfo.payPasswordMange" /**交易密码 */
          )}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="personal-info-content">
          <p class="update-title">请输入您的新密码</p>
          <div class="update-form">
            <Field label="旧密码" placeholder="请输入旧密码" />
            <Field label="新密码" placeholder="请输入新密码" />
            <Field label="确认密码" placeholder="请再次输入密码" />
            <p class="tips">请牢记密码,如忘记密码,请联系客服。</p>
            <Button block type="primary">
              确定修改
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
