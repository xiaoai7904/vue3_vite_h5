import { defineComponent, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Field, Button, NavBar } from "vant";
import { RouterNameEnum } from "@/common";
import { useProduct } from "@/hook";
import "./BalanceBao.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { t } = useI18n();
    const { productStore, getMonetaryFundList } = useProduct();
    const store = reactive({
      amount: "",
    });
    onMounted(() => {
      getMonetaryFundList();
    });

    return () => (
      <div class="balance-bao">
        <NavBar
          title={t("balanceBao.title" /**余额宝 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="balance-bao-content">
          <div class="balance-bao-content-heade flex-between">
            <p>
              <span>总资产（元）</span>
              <span class="red">22100.99</span>
            </p>
            <p>
              <span>余额宝（元）</span>
              <span>22100.99</span>
            </p>
            <p>
              <span>总收益</span>
              <span class="red">22100.99</span>
            </p>
            <p>
              <span>昨日收益</span>
              <span class="red">22100.99</span>
            </p>
          </div>
          <div class="balance-bao-content-input">
            <h1>{t("balanceBao.subTitle" /**余额转入 */)}</h1>
            <Field
              v-model={store.amount}
              label="¥"
              label-width="0.37rem"
              placeholder={t("balanceBao.inputTips" /**请输入转入金额 */)}
            />
            <p class="amount-tips">
              <span>预计收益</span>
              <span>11111</span>
            </p>
          </div>
          <div class="balance-bao-content-card">
            <h1>收益标准</h1>
            <div class="card-list">
              {productStore.productList.map((item) => (
                <div>
                  <p>{item.name}</p>
                  <p>+{(item.ratio * 100).toFixed(2)}%</p>
                  <p>[定]{item.day}天</p>
                </div>
              ))}
            </div>
          </div>
          <div class="balance-bao-content-btns">
            <Button
              onClick={() =>
                router.push({ name: RouterNameEnum.BALANCEBAORECORD })
              }
            >
              转出
            </Button>
            <Button type="primary">转入</Button>
          </div>
        </div>
      </div>
    );
  },
});
