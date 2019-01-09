<template>
  <div class="field">
    <mt-field label="username" placeholder="Input username" :value="username" @input="onInput"></mt-field>
    <mt-field label="email" placeholder="Input email" type="email" v-model="email" readonly></mt-field>
    <mt-field label="password" placeholder="Input password" type="password" v-model="password"></mt-field>
    <mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
    <mt-field label="website" placeholder="Input website" type="url" v-model="website"></mt-field>
    <mt-field label="number" placeholder="Input number" type="number" v-model="number"></mt-field>
    <mt-field label="birthday" placeholder="Input birthday" type="date" v-model="birthday"></mt-field>
    <mt-field label="introduction" placeholder="introduction" type="textarea" rows="4" v-model="introduction"></mt-field>

    <mt-field label="email" state="success" v-model="email"></mt-field>
    <mt-field label="email" state="error" v-model="email"></mt-field>
    <mt-field label="email" state="warning" v-model="email"></mt-field>

    <mt-field label="captcha" v-model="captcha">
      <img src="http://placehold.it/100x100" height="45px" width="100px">
    </mt-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      phone: null,
      website: null,
      number: null,
      birthday: null,
      introduction: null,
      captcha: null
    }
  },
  methods: {
    onInput(val) {
      // console.log(val)
      this.username = val
      // console.log(this.username)
    }
  }
}
</script>
