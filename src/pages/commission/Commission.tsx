import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar } from "vant";
import { useUser } from "@/hook";
import "./Commission.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { myCommissionInfo, getMyCommission } = useUser();
    onMounted(() => {
      getMyCommission();
    });
    return () => (
      <div class="commission">
        <NavBar
          title={t("commission.title" /**我的佣金 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="commission-content">
          <div>
            <h2>佣金总数(元)</h2>
            <span>¥ {myCommissionInfo.value.total}</span>
          </div>
          <div>
            <h2>下级总佣金(元)</h2>
            <span>¥ {myCommissionInfo.value.down}</span>
          </div>
          <div>
            <h2>任务佣金(自身) (元)</h2>
            <span>¥ {myCommissionInfo.value.direct}</span>
          </div>
        </div>
      </div>
    );
  },
});
