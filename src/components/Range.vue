<template>
  <div class="range">
    <mt-range :value="rangeValue" @input="handleInput" :min="10" :max="90" :step="10" :bar-height="5">
      <div slot="start">10</div>
      <div slot="end">90</div>
    </mt-range>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeValue: 50
    }
  },
  methods: {
    handleInput(e) {
      console.log(e)
      this.rangeValue = e
    }
  }
}
</script>

