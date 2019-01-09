<template>
  <div class="popup">
    <mt-button @click="showPopup">Show Popup</mt-button>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="content">Hello Popup</div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false
    }
  },
  methods: {
    showPopup() {
      this.popupVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: bold;
}
</style>
