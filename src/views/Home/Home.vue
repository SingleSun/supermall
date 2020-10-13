<template>
  <div id="home">
    <navigation-bar id="home-nav">
      <div slot="center">购物车</div>
    </navigation-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @upScroll="upload">
      <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link"><img :src="item.image"></a>
        </swiper-item>
      </swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tag-view :titles="titles" class="tag-view" @tagClick="tagClick"></tag-view>
      <good-list :goods="goods['pop'].list"></good-list>
    </scroll>
    <back-top class="back-top" @click.native="backClick"></back-top>

  </div>
</template>

<script>
  import TagView from "@/components/common/tagview/TagView";
  import NavigationBar from "@/components/common/navigation/NavigationBar";

  import {Swiper, SwiperItem} from "@/components/common/swiper"
  import RecommendView from "@/views/Home/childComps/RecommendView";
  import FeatureView from "@/views/Home/childComps/FeatureView";
  import GoodList from "@/components/content/goods/GoodList";
  import Scroll from "@/components/common/scroll/Scroll"
  import BackTop from "@/components/content/BackTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "@/network/home";

  export default {
    name: "Home",
    components: {
      GoodList,
      NavigationBar,
      Swiper,
      SwiperItem,
      RecommendView,
      FeatureView,
      TagView,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        currentType: 'pop',
        titles: ['流行','新款','精选'],
        goods: {
          'pop':{page:0, list:[]},
          'news':{page:0, list:[]},
          'sell':{page:0, list:[]}
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    methods: {
      //防抖函数
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      },
      tagClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
                break
          case 1:
            this.currentType = 'news'
                break
          case 2:
            this.currentType = 'sell'
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // this.goods[type].list.push(...res.data.list)
          // this.goods[type].page += 1
          this.$refs.scroll.scroll.finishPullUp()
        })
      },
      //上拉加载
      upload(){
        this.getHomeGoods(this.currentType)
        console.log('加载成功');
      },
      //回到顶部
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      }
    },
    mounted() {

      //监听图片加载
      const refresh = this.debounce(this.$refs.scroll.scroll.refresh,500)
      this.$bus.$on('imageLoad',() => {
        console.log('图片加载')
        refresh()
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  #home-nav {
    background-color:var(--color-tint) ;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
  }

  .tag-view {
    position: sticky;
    top: 44px;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
</style>
