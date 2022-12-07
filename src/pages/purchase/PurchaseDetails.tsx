import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  NavBar,
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
} from "vant";
import { useI18n } from "vue-i18n";
import TestIcon from "@/assets/image/user_bg.png";
export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    return () => (
      <div class="purchase-details">
        <NavBar
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
          title={t("purchase.title" /**申购列表 */)}
        />
        <div class="purchase-details-content">
          <div class="purchase-details-header flex-around">
            <div>
              <p>产品跌幅</p>
              <p class="value up">
                <span>+2.8723</span>
                <span class="unit">%</span>
              </p>
            </div>
            <div>
              <p>单位净值</p>
              <p class="value">2.134</p>
            </div>
            <div>
              <p>累计净值</p>
              <p class="value">2.983</p>
            </div>
          </div>
          <div class="purchase-details-tag flex-between">
            <div class="purchase-details-type">
              <span>混合型</span>
              <span>中风险R3</span>
            </div>
            <div class="purchase-details-rank">近一个月收益率同类排名1/24</div>
          </div>
          <div class="line" />
          <div class="purchase-details-title">
            <h1>华夏移动互联混合（QDII）</h1>
            <div class="purchase-details-chart"></div>
          </div>
          <div class="line" />
          <h2 class="purchase-details-histroy flex-center">最新成交记录</h2>
          <div class="purchase-details-histroy-item flex-between">
            <span>137****0345</span>
            <span>购买华夏移动互联混合（QDII）</span>
            <span class="money">赚取1111元</span>
          </div>
          <div class="purchase-details-histroy-item flex-between">
            <span>137****0345</span>
            <span>购买华夏移动互联混合（QDII）</span>
            <span class="money">赚取1111元</span>
          </div>
          <div class="purchase-details-histroy-item flex-between">
            <span>137****0345</span>
            <span>购买华夏移动互联混合（QDII）</span>
            <span class="money">赚取1111元</span>
          </div>
        </div>

        <ActionBar placeholder>
          <ActionBarIcon icon="like-o" text="申购记录" />
          <ActionBarIcon icon="chat-o" text="在线客服" />
          <ActionBarButton type="danger">一键申购</ActionBarButton>
        </ActionBar>
      </div>
    );
  },
});
