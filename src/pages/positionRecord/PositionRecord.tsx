import { defineComponent, ref, reactive } from "vue";
import { NavBar, Tab, Tabs, Image } from "vant";
import { useI18n } from "vue-i18n";
import { PageList, PageListRefType } from "@/components/PageList";
import PositionRecordItem from "./PositionRecordItem";
import BannerIcon from "@/assets/image/banner4.png";
import "./PositionRecord.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const tabActive = ref(0);
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
          title={t("positionRecord.title" /**持仓记录 */)}
        />
        <div class="position-record-content">
          <Tabs v-model:active={tabActive.value}>
            <Tab title={t("positionRecord.my" /**我的持仓 */)}>
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
                      <Image class="position-record-banner" src={BannerIcon} />
                      {list.map((item, index) => (
                        <PositionRecordItem />
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
            <Tab title={t("positionRecord.history" /**历史记录 */)}>
              <Image src={BannerIcon} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  },
});
