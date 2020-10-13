<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    methods: {

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll,{
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType
      })
      //监听滚动
      this.scroll.on("scroll",(position) => {
        // console.log(position);
      })
      //上拉加载
      this.scroll.on("pullingUp",() => {
        console.log('上拉加载更多');
        this.$emit('upScroll')
      })
    }
  }
</script>

<style scoped>

</style>
