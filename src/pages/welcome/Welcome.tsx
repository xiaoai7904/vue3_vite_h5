import { defineComponent } from "vue";
import { ActionBar, ActionBarButton, Checkbox } from "vant";
import { useI18n } from "vue-i18n";
import "./Welcome.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return () => (
      <div class="welcome">
        <h1>{t("welcome.title" /**感谢您使用华夏财富APP */)}</h1>
        <p>
          {t("welcome.content1" /** 我们非常重视您的个人信息和隐私保护。 */)}
        </p>
        <i18n-t
          keypath="welcome.content2"
          tag="p"
          scope="global"
          v-slots={{
            privacyPolicy: () => (
              <span class="privacy-policy">{t("welcome.privacyPolicy")}</span>
            ),
          }}
        />
        <p>{t("welcome.content3" /**请点击“同意”开始接受我们的服务。 */)} </p>
        <ActionBar placeholder>
          <ActionBarButton>
            <Checkbox>{t("welcome.protocol" /**我同意以上协议 */)}</Checkbox>
          </ActionBarButton>
          <ActionBarButton type="danger">
            {t("welcome.join" /**进入 */)}
          </ActionBarButton>
        </ActionBar>
      </div>
    );
  },
});
