<template>
  <div class="button">
    <mt-button>default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button>normal</mt-button>

    <mt-button disabled>disabled</mt-button>

    <mt-button plain>plain</mt-button>

    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">more</mt-button>

    <mt-button>
      <img src="http://placehold.it/100x100" height="20" width="20" slot="icon">
      icon
    </mt-button>
  </div>
</template>

<script>
export default {
  
}
</script>
