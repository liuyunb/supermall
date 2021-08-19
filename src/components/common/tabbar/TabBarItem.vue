<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive: true,
    }
  },
  props: {
    path:String,
  },
  components: {},
  watch: {},
  computed: {
    isActive(){
      return this.$route.path.includes(this.path);

      // return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path).catch(err => err);
    }
  },
  created () {},
  mounted () {}
}
</script>

<style >
  .tab-bar-item {
    flex: 1;
    text-align: center;
    background-color: #f6f6f6;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
  }
  .active{
    color: red;
  }
</style>
