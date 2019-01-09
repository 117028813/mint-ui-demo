<template>
  <div class="switch-badge">
    <mt-switch :value="value" @input="onInput">{{value}}</mt-switch>

    <mt-badge size="small">30</mt-badge>
    <mt-badge>10</mt-badge>
    <mt-badge size="large">10</mt-badge>

    <mt-badge>30</mt-badge>
    <mt-badge type="error">10</mt-badge>
    <mt-badge type="success">10</mt-badge>
    <mt-badge type="warning">10</mt-badge>

    <mt-badge color="#888">custom color</mt-badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    onInput(val) {
      this.value = val
    } 
  }
}
</script>

