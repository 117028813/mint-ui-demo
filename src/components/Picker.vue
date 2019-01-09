<template>
  <div class="picker">
    <mt-picker :slots="slots" @change="onValuesChange" showToolbar>
      <div>toolbar</div>
    </mt-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          textAlign: 'right',
        },
        {
          divider: true,
          content: '-',
        },
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07'],
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    onValuesChange(picker, values) {
      console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      console.log(picker.getSlotValues(1))
      setTimeout(() => {
        picker.setSlotValues(1, ['2018-01', '2018-02'])
        setTimeout(() => {picker.setValues(['2015-02', '2018-02'])}, 1000)
      }, 3000)
    }
  }
}
</script>

