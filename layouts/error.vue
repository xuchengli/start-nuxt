<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      404错误，
      页面不存在！
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      500错误，
      {{ error.message }}
    </h1>
    <h1 v-else>
      应用发生未知的错误，
      {{ error.message }}
    </h1>
    <nuxt-link to="/">
      首 页
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: 404,
        message: '页面不存在！'
      })
    }
  }
  // layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
