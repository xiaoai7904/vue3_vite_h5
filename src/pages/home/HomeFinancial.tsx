import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { Button } from "vant";
export default defineComponent({
  setup() {
    return () => (
      <div class="home-financial">
        <h1 class="home-title">
          <span>理财宝</span>
          <span>零钱账户 随存随取</span>
        </h1>
        <Swiper
         slidesPerView={1.5}
         slidesPerGroup={1}
         spaceBetween={0}
         threshold={1}
         watchOverflow={true}
         initialSlide={0}
         modules={[Autoplay]}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div class="home-financial-item">
              <h2>活期通新成员</h2>
              <p>
                七日年化<span>+2.326%</span>
              </p>
              <p>分散存入，快赎每日额度最高5万</p>
              <Button type="danger">转入</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home-financial-item">
              <h2>活期通新成员</h2>
              <p>
                七日年化<span>+2.326%</span>
              </p>
              <p>分散存入，快赎每日额度最高5万</p>
              <Button type="danger">转入</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  },
});
