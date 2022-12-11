import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import "./Withdraw.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const pageListRef = ref<PageListRefType | null>(null);
    const store = reactive({
      amount: "",
      list: [1, 2, 3, 4, 5],
      total: 5,
      pages: 20,
      current: 1,
    });
    const getListApi = () => {};
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
            requestApi={getListApi}
            list={store.list}
            total={store.total}
            pages={store.pages}
            v-model:current={store.current}
            v-slots={{
              default: (list: any[]) => (
                <>
                  {list.map((item, index) => (
                    <div class="withdraw-record-content-item">
                      <div class="header">
                        <span>提现金额(¥): </span>
                        <span>200</span>
                      </div>
                      <div class="flex-between">
                        <div>
                          <div class="item">
                            <span>订单号:</span>
                            <span>SY2212092356288533</span>
                          </div>
                          <div class="item">
                            <span>提现状态:</span>
                            <span class="red">待审核</span>
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
