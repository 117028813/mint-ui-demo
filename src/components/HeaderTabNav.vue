<template>
  <div class="header-tab-nav">
    <mt-header fixed title="HeaderHeaderHeaderHeaderHeaderHeader">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="space"></div>

    <mt-navbar :value="selected" @input="onInput">
      <mt-tab-item id="take-out">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        我的
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container :value="selected">
      <mt-tab-container-item id="take-out">
        <mt-cell v-for="n in 10" :key="n" title="take-out"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="order">
        <mt-cell v-for="n in 10" :key="n" title="order"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="find">
        <mt-cell v-for="n in 10" :key="n" title="find"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="my">
        <mt-cell v-for="n in 10" :key="n" title="my"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar fixed @input="onInput" :value="selected">
      <mt-tab-item id="take-out">
        <img slot="icon" src="http://placehold.it/100x100">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="http://placehold.it/100x100">
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="http://placehold.it/100x100">
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="http://placehold.it/100x100">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'order'
    }
  },
  methods: {
    onInput($event) {
      this.selected = $event
    }
  }
}
</script>

<style lang="less" scoped>
.space {
  margin-top: 40px;
}
.mint-tab-container {
  margin-top: 8px;
}
</style>
