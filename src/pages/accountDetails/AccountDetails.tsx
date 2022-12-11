import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Button, Tabs, Tab, Field, DatePicker, Popup } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import "./AccountDetails.style.less";

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
      showPicker: false,
      time: "",
    });
    const timeConfirm = () => {};
    const getListApi = () => {};
    return () => (
      <div class="account-details">
        <NavBar
          title={t("accountDetails.title" /**账户明细 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="account-details-content">
          <div class="flex-between search-wrap">
            <Field
              v-model={store.time}
              readonly
              name="datePicker"
              label="时间选择"
              placeholder="点击选择时间"
              onClick={() => (store.showPicker = true)}
            />
            <Button type="primary" icon="search">搜索</Button>
          </div>

          <Tabs v-model:active={store.tabActive}>
            <Tab title="所有类型">
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
                        <div class="account-details-content-item">
                          <div class="header">
                            <span>2022-12-12 12:12:12</span>
                          </div>
                          <div class="item flex-between">
                            <span>余额宝转入</span>
                            <Button type="primary">+29939</Button>
                          </div>
                        </div>
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
            <Tab title="提现记录">
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
                        <div class="account-details-content-item">
                          <div class="header">
                            <span>2022-12-12 12:12:12</span>
                          </div>
                          <div class="item flex-between">
                            <span>余额宝转入</span>
                            <Button type="primary">+29939</Button>
                          </div>
                        </div>
                      ))}
                    </>
                  ),
                }}
              />
            </Tab>
            <Tab title="充值记录">
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
                        <div class="account-details-content-item">
                          <div class="header">
                            <span>2022-12-12 12:12:12</span>
                          </div>
                          <div class="item flex-between">
                            <span>余额宝转入</span>
                            <Button type="primary">+29939</Button>
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
        <Popup v-model:show={store.showPicker} position="bottom">
          <DatePicker
            onConfirm={timeConfirm}
            onCancel={() => (store.showPicker = false)}
          />
        </Popup>
      </div>
    );
  },
});
