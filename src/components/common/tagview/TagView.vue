<template>
  <div class="tag-view">
    <div v-for="(item,index) in titles" class="tag-item" :class="{active:currentIndex===index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TagView",
    props: {
      titles: {
        type:Array,
        default() {
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('tagClick',index)
      }
    }
  }
</script>

<style scoped>

  .tag-view {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
  .tag-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding-bottom: 2px;
  }

</style>
