import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Field, Button, NavBar } from "vant";
import "./BalanceBao.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { t } = useI18n();
    return () => (
      <div class="balance-bao">
        <NavBar
          title={t("balanceBao.title" /**余额宝 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="balance-bao-content">
          <div class="balance-bao-content-heade flex-between">
            <p>
              <span>总资产（元）</span>
              <span class="red">22100.99</span>
            </p>
            <p>
              <span>余额宝（元）</span>
              <span>22100.99</span>
            </p>
            <p>
              <span>总收益</span>
              <span class="red">22100.99</span>
            </p>
            <p>
              <span>昨日收益</span>
              <span class="red">22100.99</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
});
