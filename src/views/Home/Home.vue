<template>
  <div id="home">
    <navigation-bar id="home-nav">
      <div slot="center">
        购物车
      </div>
    </navigation-bar>

    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>

    <recommend-view :recommends="recommends"></recommend-view>

  </div>
</template>

<script>
  import NavigationBar from "@/components/common/navigation/NavigationBar";
  import {getHomeMultidata} from "@/network/home";
  import {Swiper, SwiperItem} from "@/components/common/swiper"
  import RecommendView from "@/views/Home/childComps/RecommendView";

  export default {
    name: "Home",
    components: {
      NavigationBar,
      Swiper,
      SwiperItem,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true,
          height: 200,
          speed: 1000
        }
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home-nav {
    background-color:var(--color-tint) ;
    color: white;
  }
  .swiper-container,.swiper-slide{
    height: 200px;
  }

</style>
