<template>
  <div class="spinner">
    <mt-cell title="default is snake">
      <mt-spinner></mt-spinner>
    </mt-cell>
    <mt-cell title="double-bounce">
      <mt-spinner type="double-bounce"></mt-spinner>
    </mt-cell>
    <mt-cell title="triple-bounce">
      <mt-spinner type="triple-bounce"></mt-spinner>
    </mt-cell>
    <mt-cell title="fading-circle">
      <mt-spinner type="fading-circle"></mt-spinner>
    </mt-cell>
    
    <mt-cell title="type 0">
      <mt-spinner :type="0"></mt-spinner>
    </mt-cell>
    <mt-cell  title="type 1">
      <mt-spinner :type="1"></mt-spinner>
    </mt-cell>
    <mt-cell  title="type 2">
      <mt-spinner :type="2"></mt-spinner>
    </mt-cell>
    <mt-cell  title="type 3">
      <mt-spinner :type="3"></mt-spinner>
    </mt-cell>

    <mt-cell title="custom color">
      <mt-spinner color="#26a2ff"></mt-spinner>
    </mt-cell>
    <mt-cell title="custom color">
      <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
    </mt-cell>
    <mt-cell title="custom color">
      <mt-spinner color="yellow"></mt-spinner>
    </mt-cell>

    <mt-cell title="size unit is px">
      <mt-spinner :size="60"></mt-spinner>
    </mt-cell>
    
  </div>
</template>
