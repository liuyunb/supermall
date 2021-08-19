<template>
  <div class="homeRecommend" >
    <div class="recommend_item" v-for="item in recommend" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend_title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
     
    }
  },
  props: {
     recommend: {
        type: Array,
        default(){
          return [];
        },
      }
  },
  components: {},
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style >
.homeRecommend {
  display: flex;
  border-bottom: 15px solid #eee;
}
.recommend_item {
  flex: 1;
  padding: 20px 14px 25px;
}
.recommend_item img{
  width: 100%;
  margin-bottom: 10px;
}
.recommend_title {
  font-size: 13px;
}
</style>
