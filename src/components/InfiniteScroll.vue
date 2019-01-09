<template>
  <div class="infinite-scroll">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul
        v-infinite-scroll="loadmore"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="item in list" :key="item">{{item}}</li>
      </ul>
    </mt-loadmore>
    <div v-if="loading" class="loading">
      <mt-spinner></mt-spinner>
    </div>
    <div v-if="allLoaded" class="allLoaded">All Loaded</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false,
      disabled: false
    };
  },
  computed: {
    allLoaded() {
      return this.list.length >= 50;
    }
  },
  methods: {
    timer(ms=1000) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    loadTop() {
      this.timer().then(() => {
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadmore() {
      this.loading = true;
      this.disabled = true;
      this.timer().then(() => {
        const last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
        if (!this.allLoaded) {
          this.disabled = false;
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.loading {
  display: flex;
  justify-content: center;
}
</style>
