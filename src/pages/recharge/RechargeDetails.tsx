import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Button, NavBar, Uploader, type UploaderFileListItem } from "vant";
import { usePay } from "@/hook";
import "./Recharge.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { payStore, recahrge } = usePay();
    const uploadImg = ref("");
    const afterRead = (file: UploaderFileListItem | UploaderFileListItem[]) => {
      console.log(file);
      if (!Array.isArray(file)) {
        uploadImg.value = file.content as string;
      }

      payStore.recahrgePic = "https://xxx.com";
    };

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
              <span>{payStore.rechargeInfo.bankName}</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>银行卡号</span>
              <span>{payStore.rechargeInfo.cardNo}</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>姓名</span>
              <span>{payStore.rechargeInfo.holder}</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>开户行</span>
              <span>{payStore.rechargeInfo.branch}</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item flex-start">
              <span>充值金额</span>
              <span>{payStore.rechargeInfo.amount}</span>
              <span>复制</span>
            </div>
            <div class="recharge-details-content-item upload-wrap">
              {!uploadImg.value && <Uploader afterRead={afterRead} />}
              {uploadImg.value && <img src={uploadImg.value} alt="" />}
              <p>上传付款截图</p>
            </div>
            <div class="recharge-details-content-bottom">
              <p>请务必转账金额保留小数点，以免影响充值时间</p>
              <Button
                block
                type="primary"
                loading={payStore.rehcargeLoading}
                onClick={() => recahrge()}
              >
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
