<template>
<div>
  <h1 style="text-align:center">欢迎来到我的官方网站</h1>
  <ul id="menu">
    <li><nuxt-link :to="{name:'index'}">主页</nuxt-link></li>
    <li><nuxt-link :to="{name:'about'}">关于</nuxt-link></li>
    <li><nuxt-link :to="{name:'news',params:{newsId:123}}">文章</nuxt-link></li>
    <!-- <li><nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link></li> -->
  </ul>
  <div class="diss">
    <img src='~static/nizi.jpg'>
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
#menu{
  display: flex;
}
#menu li{
  padding:0;
  margin:0;
  list-style:none;
width: 100px;
}
</style>

