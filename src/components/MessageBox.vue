<template>
  <div class="message-box">
    <mt-button @click="basicMessage">BasicMessage</mt-button>
    <mt-button @click="objectMessage">Object Message</mt-button>
    <mt-button @click="alert">Alert</mt-button>
    <mt-button @click="confirm">Confirm</mt-button>
    <mt-button @click="prompt">Prompt</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    basicMessage() {
      this.$messagebox('title', 'message')
    },
    objectMessage() {
      this.$messagebox({
        title: 'title',
        message: 'message',
        showCancelButton: true,
        showInput: true,
        inputValue: 1,
        inputPlaceholder: 'please input...'
      }).then(val => {
        console.log(val)
      }).catch(err => {
        console.log(err)
      })
    },
    alert() {
      this.$messagebox.alert('message', 'title').then(val => {
        console.log(val)
      })
    },
    confirm() {
      this.$messagebox.confirm('message', 'title').then(val => {
        console.log(val)
      }).catch(err => {
        console.log(err)
      })
    },
    prompt() {
      this.$messagebox.prompt('message', {
        title: 'title',
        inputPlaceholder: 'placeholder',
        inputValue: 1
      }).then(val => {
        console.log(val)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

