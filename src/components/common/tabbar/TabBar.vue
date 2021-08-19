<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {

    }
  },
  props: {},
  components: {},
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style >
  .tab-bar {
    position: fixed;
    transform: translate3d(0,0,0);
    left: 0;
    right: 0;
    bottom: 0;
    display :flex;
    z-index: 10;
    box-shadow: 0 -5px 1px 0 rgba(100, 100, 100, 0.2);
  }


</style>
