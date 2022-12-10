import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Field, Button, Cell, NavBar } from "vant";
import { RouterNameEnum } from "@/common";
import cardIcon from "@/assets/image/card.png";

import "./recharge.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { t } = useI18n();
    const store = reactive({
      rechargeAmount: "",
      setp: 1,
    });
    const amountList = [
      "200",
      "500",
      "1000",
      "3000",
      "5000",
      "10000",
      "20000",
      "30000",
    ];
    return () => (
      <div class="recharge">
        <NavBar
          title={t("recharge.title" /**充值 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="recharge-content">
          {store.setp === 1 && (
            <div class="recharge-content-card">
              <h1>{t("recharge.rechargeAmount" /**充值金额 */)}</h1>
              <Field
                v-model={store.rechargeAmount}
                label="¥"
                label-width="0.37rem"
                placeholder={t("recharge.rechargeTips" /**请输入充值金额 */)}
              />
              <h3>{t("recharge.rechargeIllustrate" /**充值说明 */)}</h3>
              <div class="recharge-amount-list">
                {amountList.map((item) => (
                  <div onClick={() => (store.rechargeAmount = item)}>
                    {item}
                    {t("recharge.unit")}
                  </div>
                ))}
              </div>
            </div>
          )}
          {store.setp === 2 && (
            <div class="recharge-content-card">
              <h1>{t("recharge.selectRechargeType" /**请选择支付通道 */)}</h1>
              <Cell
                is-link
                onClick={() =>
                  router.push({ name: RouterNameEnum.RECHARGEDETAILS })
                }
                v-slots={{
                  title: () => (
                    <div class="recharge-content-card-icon flex-start">
                      <img src={cardIcon} alt="" />
                      <div>
                        <p class="card-title">
                          {t("recharge.bankCardTransfer" /**银行卡转账 */)}
                          <span>{t("recharge.recommend" /**推荐 */)}</span>
                        </p>
                        <span class="card-subtitle">
                          {t("recharge.bankCardTransfer" /**银行卡转账 */)}
                        </span>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
          )}
          {store.setp === 1 && (
            <Button block type="primary" onClick={() => store.setp++}>
              {t("recharge.next" /**下一步 */)}
            </Button>
          )}
        </div>
      </div>
    );
  },
});
