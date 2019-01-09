<template>
  <div class="radio">
    <mt-radio title="radio title" v-model="value" :options="options"></mt-radio>
    <mt-cell :title="value"></mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'b',
      options: [
        {
          label: "A",
          value: "a",
          disabled: true
        },
        {
          label: "B",
          value: "b"
        },
        {
          label: "C",
          value: "c"
        }
      ]
    };
  }
};
</script>
