import { defineComponent } from "vue";
import { Swipe, SwipeItem, Image } from "vant";
import BannerImage1 from "@/assets/image/banner1.jpeg";
import BannerImage2 from "@/assets/image/banner2.jpeg";
import BannerImage3 from "@/assets/image/banner3.jpeg";
export default defineComponent({
  setup() {
    const bannerList = [BannerImage1, BannerImage2, BannerImage3];
    return () => (
      <div class="home-banner">
        <Swipe autoplay={3000} indicator-color="white">
          {bannerList.map((item) => (
            <SwipeItem key={item}>
              <Image src={item} />
            </SwipeItem>
          ))}
        </Swipe>
      </div>
    );
  },
});
