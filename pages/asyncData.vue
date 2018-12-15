<template>
  <div>
    <h1>{{message}}</h1>
    <h1>name:{{info.name}}</h1>
    <h1>age:{{info.age}}</h1>
    <h1>address:{{info.address}}</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      message:'你好！👋👋👋👋👋👋👋'
    }
  },
  async asyncData(){
    const {data }= await axios.get('https://api.myjson.com/bins/kxht8')
    return {info:data}
  }
}
</script>
