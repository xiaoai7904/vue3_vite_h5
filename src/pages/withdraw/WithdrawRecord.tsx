import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import { usePay } from "@/hook";
import { WhithdrawListItemType } from "@/common";
import "./Withdraw.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const pageListRef = ref<PageListRefType | null>(null);
    const { payStore, withdrawStatus, getWithdrawList } = usePay();
    return () => (
      <div class="withdraw-record">
        <NavBar
          title={t("withdraw.recordTitle" /**提现记录 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="withdraw-record-content">
          <PageList
            ref={pageListRef}
            isInit
            requestApi={getWithdrawList}
            list={payStore.withdrawList}
            total={payStore.withdrawTotal}
            pages={payStore.withdrawPages}
            v-model:current={payStore.withdrawPageNum}
            v-slots={{
              default: (list: WhithdrawListItemType[]) => (
                <>
                  {list && list.map((item) => (
                    <div key={item.id} class="withdraw-record-content-item">
                      <div class="header">
                        <span>提现金额(¥): </span>
                        <span>{item.num}</span>
                      </div>
                      <div class="flex-between">
                        <div>
                          <div class="item">
                            <span>订单号:</span>
                            <span>{item.id}</span>
                          </div>
                          <div class="item">
                            <span>提现状态:</span>
                            <span class="red">
                              {withdrawStatus[item.status]}
                            </span>
                          </div>
                        </div>
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
