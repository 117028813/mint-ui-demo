<template>
  <div class="search">
    <mt-search :value="value" @input="onInput" :result="result"></mt-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  computed: {
    result() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  },
  methods: {
    onInput($event) {
      this.value = $event
    }
  }
}
</script>

