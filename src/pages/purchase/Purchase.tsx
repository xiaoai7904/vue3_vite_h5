import { defineComponent, ref, reactive } from "vue";
import { NavBar } from "vant";
import { useI18n } from "vue-i18n";
import { PageList, PageListRefType } from "@/components/PageList";
import { ProductItemType } from "@/common";
import { useProduct } from "@/hook";
import PurchaseItem from "./PurchaseItem";
import "./Purchase.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { productStore, getProductList } = useProduct();
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
            requestApi={getProductList}
            list={productStore.productList}
            total={productStore.productTotal}
            pages={productStore.productPages}
            v-model:current={productStore.productPageNum}
            v-slots={{
              default: (list: ProductItemType[]) => (
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
