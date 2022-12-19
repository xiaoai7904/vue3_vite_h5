import { defineComponent, onMounted, reactive, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NavBar, ActionBar, ActionBarButton, ActionBarIcon } from "vant";
import { useI18n } from "vue-i18n";
import { RouterNameEnum } from "@/common";
import { useProduct } from "@/hook";
import Chart from "@/components/Chart/Chart.vue";
// import TestIcon from "@/assets/image/user_bg.png";
// import Canvas from "@antv/f2-vue";
// import { Chart, Axis, Line } from "@antv/f2";
import "./Purchase.style.less";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { query } = useRoute();
    const { productDetails, getProductDetails } = useProduct();
    const store = reactive<Record<string, any>>({
      // chartData: [
      //   {
      //     time: new Date().getTime(),
      //     value: 12,
      //   },
      //   {
      //     time: new Date().getTime() * Math.random(),
      //     value: 100,
      //   },
      //   {
      //     time: new Date().getTime() * Math.random(),
      //     value: 28,
      //   },
      //   {
      //     time: new Date().getTime() * Math.random(),
      //     value: 200,
      //   },
      //   {
      //     time: new Date().getTime() * Math.random(),
      //     value: Math.random() * 2 + 10,
      //   },
      //   {
      //     time: new Date().getTime() * Math.random(),
      //     value: Math.random() * 2 + 10,
      //   },
      // ],
    });
    // const getRecord = () => {
    //   return {
    //     time: new Date().getTime(),
    //     value: Math.random() * 2 + 10,
    //   };
    // };

    // onMounted(() => {
    //   setInterval(() => {
    //     const newData = [].concat(store.chartData) as any[];
    //     store.chartData.push(getRecord());
    //     console.log(store.chartData);
    //     // store.chartData = [...newData];
    //   }, 1000);
    // });
    onMounted(async () => {
      if (query?.id) {
        await getProductDetails(Number(query.id));
      }
    });
    return () => (
      <div class="purchase-details">
        <NavBar
          fixed
          safe-area-inset-top
          left-arrow
          onClickLeft={() => router.back()}
          title={productDetails.value.goodsName}
        />
        <div class="purchase-details-content">
          <div class="purchase-details-header flex-around">
            <div>
              <p>产品跌幅</p>
              <p class="value up">
                <span>{productDetails.value.rate}</span>
                <span class="unit">%</span>
              </p>
            </div>
            <div>
              <p>单位净值</p>
              <p class="value">{productDetails.value.goodsPrice}</p>
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
            <h1>{productDetails.value.goodsName}</h1>
            <div class="purchase-details-chart">
              <Chart />
              {/* <Canvas pixelRatio={window.devicePixelRatio}>
                <Chart
                  data={store.chartData}
                  scale={{
                    value: {
                      min: 0,
                    },
                  }}
                >
                  <Axis field="value" />
                  <Axis
                    field="time"
                    type="timeCat"
                    tickCount={5}
                    mask="mm:ss"
                  />
                  <Line x="time" y="value" />
                </Chart>
              </Canvas> */}
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
