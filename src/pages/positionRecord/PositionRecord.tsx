import { defineComponent, ref } from "vue";
import { NavBar, Tab, Tabs, Image } from "vant";
import { useI18n } from "vue-i18n";
import { usePosition } from "@/hook";
import { PositionItemType } from "@/common";
import { PageList, PageListRefType } from "@/components/PageList";
import PositionRecordItem from "./PositionRecordItem";
import BannerIcon from "@/assets/image/banner4.png";
import "./PositionRecord.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const tabActive = ref(0);
    const pageList1Ref = ref<PageListRefType | null>(null);
    const pageList2Ref = ref<PageListRefType | null>(null);
    const { positionStroe, getPosition, getPositionHis } = usePosition();

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
                ref={pageList1Ref}
                isInit
                requestApi={getPosition}
                list={positionStroe.positionList}
                total={positionStroe.positionTotal}
                pages={positionStroe.positionPages}
                v-model:current={positionStroe.positionPageNum}
                v-slots={{
                  default: (list: PositionItemType[]) => (
                    <>
                      <Image class="position-record-banner" src={BannerIcon} />
                      {list.map((item, index) => (
                        <PositionRecordItem key={index} data={item} />
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
            <Tab title={t("positionRecord.history" /**历史记录 */)}>
              <Image src={BannerIcon} />
              <PageList
                ref={pageList2Ref}
                isInit
                requestApi={getPositionHis}
                list={positionStroe.positionHisList}
                total={positionStroe.positionHisTotal}
                pages={positionStroe.positionHisPages}
                v-model:current={positionStroe.positionHisPageNum}
                v-slots={{
                  default: (list: PositionItemType[]) => (
                    <>
                      <Image class="position-record-banner" src={BannerIcon} />
                      {list.map((item, index) => (
                        <PositionRecordItem key={index} data={item} />
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  },
});
