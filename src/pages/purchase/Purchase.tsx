import { defineComponent, ref } from "vue";
import { NavBar, Tab, Tabs } from "vant";
import { useI18n } from "vue-i18n";
import { PageList, PageListRefType } from "@/components/PageList";
import { FundsItemType } from "@/common";
import { useProduct } from "@/hook";
import PurchaseItem from "./PurchaseItem";
import "./Purchase.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { productStore, getFundList } = useProduct();
    const pageListRef = ref<PageListRefType | null>(null);

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
            requestApi={getFundList}
            list={productStore.fundsList}
            total={productStore.fundsTotal}
            pages={productStore.fundsPages}
            v-model:current={productStore.fundsPageNum}
            v-slots={{
              default: (list: FundsItemType[]) => (
                <>
                  {list.map((item) => (
                    <PurchaseItem key={item.id} data={item} />
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
