<template>
  <div class="swipe">
    <mt-swipe :auto="3000" @change="handleChange">
      <mt-swipe-item>
        <div class="content content1">1</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="content">2</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="content">3</div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(index) {
      console.log(index)
    }
  }
}
</script>


<style lang="less" scoped>
.swipe {
  height: 200px;
}
.content {
  height: 100%;
  background-color: #ccc;
}
.content1 {
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
