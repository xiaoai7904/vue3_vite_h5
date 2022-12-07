import { defineComponent, ref, reactive } from "vue";
import { NavBar } from "vant";
import { useI18n } from "vue-i18n";
import { PageList, PageListRefType } from "@/components/PageList";
import PurchaseItem from "./PurchaseItem";
import "./Purchase.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const pageListRef = ref<PageListRefType | null>(null);

    const store = reactive({
      list: [1, 2, 3, 4, 56, 7, 8, 9],
      total: 0,
      pages: 1,
      current: 1,
    });
    const getListApi = () => {};

    return () => (
      <div class="position-record">
        <NavBar
          fixed
          safe-area-inset-top
          title={t("purchase.title" /**申购列表 */)}
        />
        <div class="position-record-content">
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
                    <PurchaseItem />
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
