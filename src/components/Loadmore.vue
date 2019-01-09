<template>
  <div class="loadmore">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
      </ul>
    </mt-loadmore>
    <p v-if="allLoaded">All Loaded</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      allLoaded: false
    }
  },
  methods: {
    timer(ms=1000) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    loadTop() {
      this.timer().then(() => {this.$refs.loadmore.onTopLoaded()})
    },
    loadBottom() {
      this.timer().then(() => {
        const lastNum = this.list[this.list.length - 1]
        const arr = []
        for (let i = lastNum + 1; i <= lastNum + 5; i++) {
          arr.push(i)
        }
        this.list = [...this.list, ...arr]
        this.$refs.loadmore.onBottomLoaded()
        if (this.list.length >= 50) {
          this.allLoaded = true
        }
      })
    }
  }
}
</script>
