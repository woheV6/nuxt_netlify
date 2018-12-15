<template>
  <div>
    <h1 v-if="error.statusCode==404">404资源找不到</h1>
    <h1 v-else>500服务器错误</h1>
  </div>
</template>
<script>
export default {
  props:['error']
}
</script>

