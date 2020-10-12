<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .recommend {
    display: flex;
  }
  .recommend-item {
    flex: 1;
    font-size: 13px;
    text-align: center;
    padding: 10px 0px 15px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item img {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
  }
  .recommend-item a {
    text-decoration: none;
    color: black;
  }

</style>
