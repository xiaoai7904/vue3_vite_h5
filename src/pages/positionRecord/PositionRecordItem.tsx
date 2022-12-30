import { defineComponent, PropType } from "vue";
import { Image, Button } from "vant";
import { PositionItemType } from "@/common";
import TestIcon from "@/assets/image/user_bg.png";
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<PositionItemType>,
      default: () => ({} as PositionItemType),
    },
  },
  setup() {
    return () => (
      <div class="position-record-item ">
        <div class="position-record-item-content flex-start">
          <Image src={TestIcon} />
          <div class="position-record-item-right">
            <h1>基金名称：华夏基金移动互联混合</h1>
            <div class="flex-between">
              <p>[持仓]收益：￥9531.7</p>
              <Button type="danger">回购</Button>
            </div>
            <div>结束</div>
          </div>
        </div>
      </div>
    );
  },
});
