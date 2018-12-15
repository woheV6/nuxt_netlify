<template>
  <div>
    <h2>随笔</h2>
    <ul>
       <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
       <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'新闻详情',stitle:'javascript',content:s_content}}">javascript</nuxt-link></li>
       <li><nuxt-link :to="{name:'news-id',params:{id:456,title:'新闻详情',stitle:'python',content:p_content}}">python</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      s_content:`JavaScript 是世界上最流行的编程语言.
      这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。
      JavaScript 是脚本语言
      JavaScript 是一种轻量级的编程语言。

      JavaScript 是可插入 HTML 页面的编程代码。

      JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。

      JavaScript 很容易学习。`,
      p_content:'python 是世界上最好的语言不接受反驳！！！！'
    }
  }
}
</script>
