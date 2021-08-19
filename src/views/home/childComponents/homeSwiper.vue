<template>
  <div class="homeSwiper">
    <swiper>
      <swiper-item v-for="item in banner" :key="item.id">
        <template #default>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </template>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'homeSwiper',
  data () {
    return {

    }
  },
  props: {
    banner: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style >

</style>
