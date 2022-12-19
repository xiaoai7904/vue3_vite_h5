import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { Image, Button } from "vant";
import { RouterNameEnum, ProductItemType } from "@/common";
import TestIcon from "@/assets/image/user_bg.png";
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<ProductItemType>,
      default: () => ({} as ProductItemType),
    },
  },
  setup(props) {
    const router = useRouter();
    return () => (
      <div
        class="position-record-item"
        onClick={() =>
          router.push({
            name: RouterNameEnum.PURCHASEDETAILS,
            query: { id: props.data.id },
          })
        }
      >
        <div class="position-record-item-content flex-start">
          <Image src={TestIcon} />
          <div class="position-record-item-right">
            <h1>基金名称：{props.data.goodsName}</h1>
            <div class="flex-between">
              <p>
                产品跌幅：<span class="value up">{props.data.rate}%</span>
              </p>
              {/* <Button type="danger">回购</Button> */}
            </div>
            <div class="flex-between">
              <p>
                单位净值：<span class="value">{props.data.goodsPrice}</span>
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
