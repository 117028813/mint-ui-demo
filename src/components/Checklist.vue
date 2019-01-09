<template>
  <div class="checklist">
    <mt-checklist title="chekcbox list" v-model="value" :options="options" :max="2"></mt-checklist>
    <mt-cell>
      <span slot="title" v-for="val in value" :key="val">
        {{val}}
      </span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["b"],
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
        },
        {
          label: "D",
          value: "d"
        }
      ]
    };
  }
};
</script>
