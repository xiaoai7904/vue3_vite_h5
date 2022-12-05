import { defineComponent } from "vue";
import { NoticeBar, Swipe, SwipeItem } from "vant";

export default defineComponent({
  setup() {
    return () => (
      <div class="home-new flex-start">
        <div class="home-new-title">最新资讯</div>
        <div class="home-new-notice">
          <NoticeBar scrollable={false}>
            <Swipe
              class="notice-swipe"
              vertical
              autoplay={3000}
              touchable={false}
              show-indicators={false}
            >
              <SwipeItem>
                华夏基金客欢迎您！现已推出代理商模式，代理商可以获得更高的佣金哦！如有疑问可咨询平台在线客服！
              </SwipeItem>
              <SwipeItem>
                华夏基金客欢迎您！现已推出代理商模式，代理商可以获得更高的佣金哦！如有疑问可咨询平台在线客服！
              </SwipeItem>
              <SwipeItem>
                华夏基金客欢迎您！现已推出代理商模式，代理商可以获得更高的佣金哦！如有疑问可咨询平台在线客服！
              </SwipeItem>
            </Swipe>
          </NoticeBar>
        </div>
      </div>
    );
  },
});
