import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Button } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import "./BalanceBao.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { t } = useI18n();
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
      <div class="balance-bao">
        <NavBar
          title={t("balanceBao.recordTitle" /**余额宝存取记录 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="balance-bao-content balance-bao-record">
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
                    <div class="balance-bao-record-item">
                      <div class="header">
                        <span>转入利息宝</span>
                        <span>七天收益(7天)0.08%</span>
                      </div>
                      <div class="flex-between">
                        <div>
                          <div class="item">
                            <span>存入金额:</span>
                            <span>100.00</span>
                          </div>
                          <div class="item">
                            <span>存入时间:</span>
                            <span>2022-12-12 12:12:12</span>
                          </div>
                        </div>
                        <Button>取出</Button>
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
