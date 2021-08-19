<template>
  <div class="home">
    <nav-bar class="nav_bar">
      <template v-slot:left>

      </template>      
      <template v-slot:center>
        购物车
      </template>
      <template v-slot:right>
        
      </template>
    </nav-bar>
    <home-swiper :banner="banner" class="home_swiper"></home-swiper>
    <home-recommend :recommend="recommend"  ></home-recommend>
    <home-feture></home-feture>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @tab-control='tabControlClick'></tab-control>
    <goods-list :goods="goods[showGoods].list" ></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import homeSwiper from "./childComponents/homeSwiper.vue"
import homeRecommend from "./childComponents/homeRecommend.vue";
import homeFeture from "./childComponents/homeFeture.vue";

import NavBar from "components/common/NavBar/NavBar.vue";
import TabControl from "components/common/tabControl/TabControl"
import GoodsList from "components/common/goods/GoodsList.vue";


import {getHomeMultidata,getHomeGoods} from 'network/home';



export default {
  name: 'home',
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        'pop': {page: 0 ,list: []},
        'new': {page: 0 ,list: []},
        'sell': {page: 0 ,list: []},
      },
      currentType: 'pop',
    }
  },
  props: {},
  components: {
    NavBar,
    homeSwiper,
    homeRecommend,
    homeFeture,
    TabControl,
    GoodsList,
  },
  watch: {},
  computed: {
    showGoods(){
      return this.currentType;
    }
  },
  methods: {
    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res => { 
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        // console.log(res);
      },err =>{

      })

      // console.log(this.goods[type].list);
    },
    //事件点击
    tabControlClick(index){
      switch(index){
        case 0: this.currentType = 'pop';
        break;
        case 1: this.currentType = 'new';
        break;
        case 2: this.currentType = 'sell';
        break;
      }
    }
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted () {}
}
</script>

<style >
.home{
  padding-top: 44px;
}
.nav_bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 1;
  }
  .home_swiper img{
    width: 100%;
  }
  .tab-control{
    position:sticky;
    top: 44px;
    z-index: 1;
  }
</style>
