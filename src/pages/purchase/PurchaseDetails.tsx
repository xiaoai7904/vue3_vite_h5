import { defineComponent, onMounted, reactive, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NavBar, ActionBar, ActionBarButton, ActionBarIcon } from "vant";
import { useI18n } from "vue-i18n";
import { RouterNameEnum } from "@/common";
import { useProduct } from "@/hook";
import Chart from "@/components/Chart";
// import TestIcon from "@/assets/image/user_bg.png";
// import Canvas from "@antv/f2-vue";
// import { Chart, Axis, Line } from "@antv/f2";
import "./Purchase.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { query } = useRoute();
    const {
      fundsNetValuesChart,
      productDetails,
      getFundDetails,
      getFundsNetValues,
    } = useProduct();
    const store = reactive<Record<string, any>>({});

    onMounted(async () => {
      if (query?.id) {
        await getFundDetails(Number(query.id));
        await getFundsNetValues(Number(query.id));
      }
    });
    return () => (
      <div class="purchase-details">
        <NavBar
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
          title={productDetails.value.name}
        />
        <div class="purchase-details-content">
          <div class="purchase-details-header flex-around">
            <div>
              <p>产品跌幅</p>
              <p class="value up">
                <span>{productDetails.value.ratio}</span>
                <span class="unit">%</span>
              </p>
            </div>
            <div>
              <p>单位净值</p>
              <p class="value">{productDetails.value.price}</p>
            </div>
            <div>
              <p>累计净值</p>
              <p class="value">{productDetails.value.realPrice}</p>
            </div>
          </div>
          <div class="purchase-details-tag flex-between">
            <div class="purchase-details-type">
              <span>{productDetails.value.info}</span>
              <span>{productDetails.value.risk}</span>
            </div>
            <div class="purchase-details-rank">
              近一个月收益率同类排名{productDetails.value.rank}
            </div>
          </div>
          <div class="line" />
          <div class="purchase-details-title">
            <h1>{productDetails.value.name}</h1>
            <div class="purchase-details-chart">
              <Chart data={fundsNetValuesChart.value} />
            </div>
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
          <ActionBarIcon
            icon="like-o"
            text="申购记录"
            onClick={() => router.push({ name: RouterNameEnum.POSITIONRECORD })}
          />
          <ActionBarIcon icon="chat-o" text="在线客服" />
          <ActionBarButton type="danger">一键申购</ActionBarButton>
        </ActionBar>
      </div>
    );
  },
});
