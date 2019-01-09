<template>
  <div class="lazy-load">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img v-lazy="item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=2b0bac1f8e2890233f88a2d471666733&imgtype=0&src=http%3A%2F%2Fimage5.92bizhi.com%2Funclassified_unclassified--286_35-1280x1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=660bc93f29c0692090027667cc92605d&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fimg13%2Fc3%2F54%2Fd%2F36.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=105aea4c5d3800d14fcee61ad5afd4aa&imgtype=0&src=http%3A%2F%2Fi0.qhimg.com%2Ft019bba87b04f0a8c24.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=b084f78de78dacea2c55ec01dcfe6a9b&imgtype=0&src=http%3A%2F%2Fimg2.xiazaizhijia.com%2Fwalls%2F20151102%2F1024x768_d456e16f11e43d4.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=6037949cd8562e04db7c7871dbca8630&imgtype=0&src=http%3A%2F%2Fimage1.92bizhi.com%2Fanimal_kitten-cat--02_33-1024x768.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005234678&di=3a94fc3d085e15f23f8c592485b98fa0&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Forignal%2F561ddc5b194d120b46ba2',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3702888265,1329234095&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005581817&di=9b76b8d3c835a30763b6b15f9edf962c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F54252f43dd71c.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005581817&di=8ff0768b7fd352a7b032c938bd1c378c&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F180614%2F12-1P614140Z6.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544005581817&di=ea342354de69123b6d74b964634cb8db&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1309%2F29%2Fc0%2F26600200_1380425742856.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.lazy-load {
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    li {
      img {
        width: 100%;
        display: block;
      }
    }
  }
}

img[lazy=loading] {
  background: #ccc;
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>

