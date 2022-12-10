import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Field, Button, NavBar, CellGroup, Cell } from "vant";
import "./Withdraw.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { t } = useI18n();
    const store = reactive({
      amount: "",
    });
    return () => (
      <div class="withdraw">
        <NavBar
          title={t("withdraw.title" /**提现 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="withdraw-content">
          <div class="withdraw-content-card">
            <h1>
              {t("withdraw.subTitle" /**提现金额 */)}
              <span>提现费率0.01%</span>
            </h1>
            <Field
              v-model={store.amount}
              label="¥"
              label-width="0.32rem"
              placeholder={t("withdraw.withdrawTips" /**输入提现金额 */)}
            />
            <div class="withdraw-content-balance flex-start">
              <p>
                <span>余额：</span>
                <span>1000</span>
              </p>
              <span>全部提现</span>
            </div>
          </div>

          <div class="withdraw-content-card">
            <CellGroup>
              <Field label="手机号" placeholder="请输入手机号"></Field>
              <Field label="银行卡号" placeholder="请输入银行卡号"></Field>
              <Field label="所属银行" placeholder="请输入所属银行"></Field>
              <Field label="开户名" placeholder="请输入开户名"></Field>
              <Field label="资金密码" placeholder="请输入资金密码"></Field>
            </CellGroup>
          </div>

          <div class="withdraw-content-card withdraw-content-tips">
            <p>请仔细核对收款信息</p>
            <p>本次提现扣除手续费 0.01%</p>
          </div>

          <div class="withdraw-content-btns">
            <Button block type="primary">
              {t("withdraw.withdrawBtn" /**立刻提现 */)}
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
