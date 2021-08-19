<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-item-text">
      <p class="title">{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  data () {
    return {

    }
  },
  props: {
    goodsitem:{
      type: Object,
      default(){
        return {}
      }
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
.goods-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img{
  width: 100%;
}
.goods-item-text{
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  font-size: 10px;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect{
  position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>

