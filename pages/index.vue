<template>
<div>
  <ul>
    <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
    <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
    <li><nuxt-link :to="{name:'news',params:{newsId:123}}">NREWS</nuxt-link></li>
    <li><nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link></li>
  </ul>
  <div class="diss">
    <img src='~static/diss.jpg'>
  </div>
  <div class="img_box">

  </div>
</div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style>
.img_box{
  background: url(~static/diss.jpg);
  width: 200px;
  height:200px
}
</style>

