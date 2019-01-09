<template>
  <div class="toast-indicator">
    <mt-button @click="basicToast">Basic Toast</mt-button>
    <mt-button @click="iconToast">Icon Toast</mt-button>
    <mt-button @click="basicIndicator">Basic Indicator</mt-button>
    <mt-button @click="textIndicator">Text Indicator</mt-button>
    <mt-button @click="typeIndicator">Type Indicator</mt-button>
  </div>
</template>

<script>
export default {
  name: 'toast-indicator',
  methods: {
    basicToast() {
      this.$toast('basic toast')
    },
    iconToast() {
      this.$toast({
        iconClass: 'iconfont icon-shuju',
        message: 'icon toast'
      })
    },
    timer(ms=1000) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    basicIndicator() {
      this.$indicator.open()
      this.timer().then(() => {
        this.$indicator.close()
      })
    },
    textIndicator() {
      this.$indicator.open('text indicator')
      this.timer().then(() => {
        this.$indicator.close()
      })
    },
    typeIndicator() {
      this.$indicator.open({
        text: 'type indicator',
        spinnerType: 'fading-circle'
      })
      this.timer().then(() => {
        this.$indicator.close()
      })
    }
  }
}
</script>

