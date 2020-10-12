<template>
  <tab-bar>
    <tabbar-item path="/home" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbar/category.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.png">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components:{
    TabBar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
