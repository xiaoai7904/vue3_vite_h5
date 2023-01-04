import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Button } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import { usePay } from "@/hook";
import { RechargeListItemType } from "@/common";
import "./Recharge.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const pageListRef = ref<PageListRefType | null>(null);

    const { payStore, rechargeStatus, getRechargeList } = usePay();

    return () => (
      <div class="recharge-record">
        <NavBar
          title={t("recharge.recordTitle" /**充值记录 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="recharge-record-content">
          <PageList
            ref={pageListRef}
            isInit
            requestApi={getRechargeList}
            list={payStore.rechargeList}
            total={payStore.rechargeTotal}
            pages={payStore.rechargePages}
            v-model:current={payStore.rechargePageNum}
            v-slots={{
              default: (list: RechargeListItemType[]) => (
                <>
                  {list && list.map((item, index) => (
                    <div class="recharge-record-content-item">
                      <div class="header">
                        <span>充值金额(¥): </span>
                        <span>{item.num}</span>
                      </div>
                      <div class="flex-between">
                        <div>
                          <div class="item">
                            <span>订单号:</span>
                            <span>{item.id}</span>
                          </div>
                          <div class="item">
                            <span>充值状态:</span>
                            <span class="red">
                              {rechargeStatus[item.status]}
                            </span>
                          </div>
                        </div>
                        {[1, 4].includes(item.status) && (
                          <Button type="primary">撤销订单</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ),
            }}
          />
        </div>
      </div>
    );
  },
});
