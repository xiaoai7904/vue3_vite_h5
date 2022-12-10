import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  Form,
  Field,
  Button,
  Cell,
  NavBar,
  Icon,
  Uploader,
  type UploaderFileListItem,
} from "vant";
import "./Recharge.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const afterRead = (
      file: UploaderFileListItem | UploaderFileListItem[]
    ) => {};

    return () => (
      <div class="recharge-details">
        <NavBar
          title={t("recharge.details" /**充值订单 待支付 */)}
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
        />
        <div class="recharge-details-content">
          <p>请向以下账户转账充值</p>
          <p>到账时间：5分钟</p>
          <div class="recharge-details-content-items">
            <div class="recharge-details-content-item flex-start">
              <span>所属银行</span>
              <span>浦发银行</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>银行卡号</span>
              <span>6217920302466623</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>姓名</span>
              <span>xxxx</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>开户行</span>
              <span>浦发银行</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>充值金额</span>
              <span>500.66</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item upload-wrap">
              <Uploader afterRead={afterRead} />
              <p>上传付款截图</p>
            </div>
            <div class="recharge-details-content-bottom">
              <p>请务必转账金额保留小数点，以免影响充值时间</p>
              <Button block type="primary">
                我已完成支付
              </Button>
              <div class="tips">
                <p>温馨提示：</p>
                <p>1.转账请复制信息，到网上银行或支付宝完成转账充值。</p>
                <p>2.APP请手动截屏或直接保存二维码到本地扫码。</p>
                <p>3.微信端可直接长按识别二维码。</p>
                <p>4.以上操作完成，可请联系客服上分。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
