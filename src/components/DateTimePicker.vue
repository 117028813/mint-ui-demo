<template>
  <div class="date-time-picker">
    <mt-button @click="showDateTimePicker">DateTimePicker</mt-button>
    <mt-datetime-picker ref="dateTime" v-model="dateTimeValue" @confirm="handleConfirm" :startDate="startDate"></mt-datetime-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTimeValue: '',
      startDate: new Date()
    }
  },
  methods: {
    showDateTimePicker() {
      this.$refs.dateTime.open()
    },
    handleConfirm(value) {
      console.log(value)
    }
  }
}
</script>
