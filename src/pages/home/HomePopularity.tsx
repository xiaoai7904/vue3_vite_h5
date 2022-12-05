import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { NoticeBar, Swipe, SwipeItem } from "vant";

export default defineComponent({
  setup() {
    return () => (
      <div class="home-popularity">
        <h1 class="flex-start home-title">
          <span>人气推荐</span>
          <span>大家都爱买</span>
        </h1>
        <div class="home-popularity-swiper">
          <Swiper
            slidesPerView={"auto"}
            slidesPerGroup={1}
            spaceBetween={10}
            threshold={1}
            watchOverflow={true}
            initialSlide={0}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div class="home-popularity-item">
                <div class="home-popularity-item-header">
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
                <div class="home-popularity-item-content flex-between">
                  <div class="home-popularity-item-left">
                    <p class="value">+71.99%</p>
                    <p class="text">近一年收益率</p>
                  </div>
                  <div class="home-popularity-item-right flex-center">
                    <div class="title">中风险R3/全球TMT/排名领先</div>
                    <div class="tag">聚集全球TMT优质龙头</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home-popularity-item">
                <div class="home-popularity-item-header">
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
                <div class="home-popularity-item-content flex-between">
                  <div class="home-popularity-item-left">
                    <p class="value">+71.99%</p>
                    <p class="text">近一年收益率</p>
                  </div>
                  <div class="home-popularity-item-right">
                    <div class="title">中风险R3/全球TMT/排名领先</div>
                    <div class="tag">聚集全球TMT优质龙头</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  },
});
