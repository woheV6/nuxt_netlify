<template>
  <div>
    <h1>news-content</h1>
    <h3>{{$route.params.id}}</h3>
    <ul><li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li></ul>
  </div>
</template>
<script>
export default {
  validate(params){
    const id=parseInt(params.id)
    return typeof id ==='number'
  },
  transition:'test',
  data(){
    return {
      title:this.$route.params.title
    }
  },
  head(){
    return {
      title:this.title,
      meta:[{hid:'description',name:'news',content:'This is a news'}]
    }
  }
}
</script>

