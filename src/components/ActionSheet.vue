<template>
  <div class="action-sheet">
    <mt-button @click="sheetVisible = !sheetVisible">show action sheet</mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sheetVisible: false,
      actions: [
        {
          name: 'name1',
          method(item, index) {
            console.log(this.name)
            console.log(item, index)
          }
        },
        {
          name: 'name2',
          method() {
            console.log(this.name)
          }
        }
      ]
    }
  }
}
</script>
