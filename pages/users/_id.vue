<template>
  <div>
    用户ID「{{ id }}」
    &nbsp;&nbsp;
    <nuxt-link to="/users">
      返回
    </nuxt-link>
  </div>
</template>
<script>
export default {
  validate ({ params }) {
    const valid = /^\d+$/.test(params.id)
    if (valid) {
      if (parseInt(params.id) > 10) {
        throw new Error('用户id不能大于10!')
      } else {
        return true
      }
    } else {
      throw new Error('无效的用户id!')
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
