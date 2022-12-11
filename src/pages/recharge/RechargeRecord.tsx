import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Button, Tabs, Tab } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import "./Recharge.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const pageListRef = ref<PageListRefType | null>(null);
    const store = reactive({
      tabActive: 0,
      amount: "",
      list: [1, 2, 3, 4, 5],
      total: 5,
      pages: 20,
      current: 1,
    });
    const getListApi = () => {};
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
          <Tabs v-model:active={store.tabActive}>
            <Tab title="线上充值">
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
                        <div class="recharge-record-content-item">
                          <div class="header">
                            <span>充值金额(¥): </span>
                            <span>200</span>
                          </div>
                          <div class="flex-between">
                            <div>
                              <div class="item">
                                <span>订单号:</span>
                                <span>SY2212092356288533</span>
                              </div>
                              <div class="item">
                                <span>充值状态:</span>
                                <span class="red">待审核</span>
                              </div>
                            </div>
                            <Button type="primary">撤销订单</Button>
                          </div>
                        </div>
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
            <Tab title="线下充值">
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
                        <div class="recharge-record-content-item">
                          <div class="header">
                            <span>充值金额(¥): </span>
                            <span>200</span>
                          </div>
                          <div class="flex-between">
                            <div>
                              <div class="item">
                                <span>订单号:</span>
                                <span>SY2212092356288533</span>
                              </div>
                              <div class="item">
                                <span>充值状态:</span>
                                <span class="red">待审核</span>
                              </div>
                            </div>
                            <Button type="primary">撤销订单</Button>
                          </div>
                        </div>
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
