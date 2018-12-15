<template>
  <div>
    <h2>News page</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <ul>
       <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
       <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'新闻详情'}}">news-1</nuxt-link></li>
       <li><nuxt-link :to="{name:'news-id',params:{id:456,title:'新闻详情'}}">news-2</nuxt-link></li>
    </ul>
  </div>
</template>
