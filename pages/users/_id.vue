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
    return /^\d+$/.test(params.id)
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
