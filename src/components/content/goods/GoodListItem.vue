<template>
  <div class="good-item">
    <img :src="gooditem.show.img" @load="imageLoad">
    <div>
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="favorite">{{gooditem.fav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>

</style>
