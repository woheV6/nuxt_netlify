<template>
  <div>
    <h1>{{$route.params.stitle}}</h1>
    <ul><li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li></ul>
    <pre>
      {{$route.params.content}}
    </pre>
  <div>

    </div>
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

