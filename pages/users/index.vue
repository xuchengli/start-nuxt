<template>
  <div>
    <nuxt-link v-for="i of items" :key="i" :to="'/users/' + i">
      {{ i }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>
