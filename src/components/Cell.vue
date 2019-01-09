<template>
  <div class="cell">
    <mt-cell title="title" />
    <mt-cell value="value" />
    <mt-cell to="/home" />
    <mt-cell is-link />
    <mt-cell icon="more" />
    <mt-cell label="label" />
    <mt-cell>
      <i slot="icon" class="iconfont icon-zhuanqujine"></i>
    </mt-cell>
    <mt-cell>
      <span slot="title">slot title</span>
    </mt-cell>
    <mt-cell>
      slot value
    </mt-cell>

    <mt-cell title="title" icon="success" value="with icon" />
    <mt-cell title="title">
      <span>slot value</span>
      <img slot="icon" src="http://placehold.it/100x100" width="24" height="24">
    </mt-cell>
    <mt-cell title="title" is-link>
      <span style="color: green">slot value</span>
    </mt-cell>
    <mt-cell title="title" label="label" is-link />
    <mt-cell label="label" title="如果使用slot title，就不能用label了" is-link>
      <i slot="icon" class="iconfont icon-zhuanqujine"></i>
      <span>slot value</span>
    </mt-cell>

    <mt-cell-swipe 
      title="title"
      icon="more"
      label="label"
      is-link
      :left="[
        {
          content: 'left button',
          style: { background: 'blue', color: '#fff' },
          handler: () => this.$messagebox('left button')
        }
      ]"
      :right="[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ]"
    >
      slot value
    </mt-cell-swipe>
  </div>
</template>

<script>
export default {
  created() {
    
  }
}
</script>
