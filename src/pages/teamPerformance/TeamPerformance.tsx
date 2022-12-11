import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { NavBar, Field, Button, Popup, DatePicker, Tabs, Tab } from "vant";
import { PageList, PageListRefType } from "@/components/PageList";
import defaultUserIcon from "@/assets/image/head.png";
import "./TeamPerformance.style.less";

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
    const getListApi = () => {};
    const timeConfirm = () => {};
    return () => (
      <div class="team-performance">
        <NavBar
          title={t("teamPerformance.title" /**团队业绩 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="team-performance-content">
          <div class="flex-between search-wrap">
            <Field
              v-model={store.time}
              readonly
              name="datePicker"
              label="时间选择"
              placeholder="点击选择时间"
              onClick={() => (store.showPicker = true)}
            />
            <Button type="primary" icon="search">
              搜索
            </Button>
          </div>
          <div class="card-list">
            <div>
              <h2>团队余额(元)</h2>
              <span>¥ 12384.00</span>
            </div>
            <div>
              <h2>团队流水(元)</h2>
              <span>¥ 12384.00</span>
            </div>
            <div>
              <h2>团队总充值(元)</h2>
              <span>¥ 12384.00</span>
            </div>
            <div>
              <h2>团队总提现(元)</h2>
              <span>¥ 12384.00</span>
            </div>
            <div>
              <h2>团队订单佣金(元)</h2>
              <span>¥ 12384.00</span>
            </div>
            <div>
              <h2>首充人数</h2>
              <span>1</span>
            </div>
            <div>
              <h2>直推人数</h2>
              <span>1</span>
            </div>
            <div>
              <h2>团队人数</h2>
              <span>1</span>
            </div>
            <div>
              <h2>新增人数</h2>
              <span>1</span>
            </div>
            <div>
              <h2>活跃人数</h2>
              <span>1</span>
            </div>
          </div>
        </div>
        <Tabs v-model:active={store.tabActive}>
          <Tab title="一级">
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
                      <div class="team-performance-content-item flex-between">
                        <img src={defaultUserIcon} alt="" />
                        <div class="user-info">
                          <p>姓名: xiaoai</p>
                          <p class="blue">充值: 2000.88</p>
                          <p class="blue">提现: 100</p>
                        </div>
                        <div class="user-info">
                          <p class="blue">电话: 187****1111</p>
                          <p class="blue">推荐人数: 0</p>
                          <p>注册时间: 2022-12-12 12:12:12</p>
                        </div>
                      </div>
                    ))}
                  </>
                ),
              }}
            />
          </Tab>
          <Tab title="二级">
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
                      <div class="team-performance-content-item flex-between">
                        <img src={defaultUserIcon} alt="" />
                        <div class="user-info">
                          <p>姓名: xiaoai</p>
                          <p class="blue">充值: 2000.88</p>
                          <p class="blue">提现: 100</p>
                        </div>
                        <div class="user-info">
                          <p class="blue">电话: 187****1111</p>
                          <p class="blue">推荐人数: 0</p>
                          <p>注册时间: 2022-12-12 12:12:12</p>
                        </div>
                      </div>
                    ))}
                  </>
                ),
              }}
            />
          </Tab>
          <Tab title="三级">
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
                      <div class="team-performance-content-item flex-between">
                        <img src={defaultUserIcon} alt="" />
                        <div class="user-info">
                          <p>姓名: xiaoai</p>
                          <p class="blue">充值: 2000.88</p>
                          <p class="blue">提现: 100</p>
                        </div>
                        <div class="user-info">
                          <p class="blue">电话: 187****1111</p>
                          <p class="blue">推荐人数: 0</p>
                          <p>注册时间: 2022-12-12 12:12:12</p>
                        </div>
                      </div>
                    ))}
                  </>
                ),
              }}
            />
          </Tab>
        </Tabs>
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
