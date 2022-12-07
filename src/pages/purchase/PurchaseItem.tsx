import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Image, Button } from "vant";
import { RouterNameEnum } from "@/common";
import TestIcon from "@/assets/image/user_bg.png";
export default defineComponent({
  setup() {
    const router = useRouter();
    return () => (
      <div
        class="position-record-item"
        onClick={() => router.push({ name: RouterNameEnum.PURCHASEDETAILS })}
      >
        <div class="position-record-item-content flex-start">
          <Image src={TestIcon} />
          <div class="position-record-item-right">
            <h1>基金名称：华夏基金移动互联混合</h1>
            <div class="flex-between">
              <p>
                产品跌幅：<span class="value up">+2.482%</span>
              </p>
              {/* <Button type="danger">回购</Button> */}
            </div>
            <div class="flex-between">
              <p>
                单位净值：<span class="value">2.134</span>
              </p>
              {/* <Button type="danger">回购</Button> */}
            </div>
            {/* <div>结束</div> */}
          </div>
        </div>
      </div>
    );
  },
});
