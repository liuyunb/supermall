<template>
  <div class="goods">
    <goods-item v-for="item in goods" :key="item" :goodsitem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue"

export default {
  name: 'Goods',
  data () {
    return {

    }
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsItem,
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style >
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
