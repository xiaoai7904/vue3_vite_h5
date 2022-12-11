import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Field, Button } from "vant";
import "./PersonalInformation.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    return () => (
      <div class="personal-info personal-info-update-name">
        <NavBar
          title={t("personalInfo.updateUserNameTitle" /**个人信息 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="personal-info-content">
          <p class="update-title">请修改您的名称</p>
          <div class="update-form">
          <Field label="名称" />
          <Button block type="primary">
            确定修改
          </Button>
          </div>
         
        </div>
      </div>
    );
  },
});
