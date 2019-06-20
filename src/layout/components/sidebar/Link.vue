
<template>
  <router-link :to="to"></router-link>
</template>

<script>

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
  // methods: {
  //   linkProps(url) {
  //     return {
  //       is: 'router-link',
  //       to: url
  //     }
  //   }
  // }
}
</script>
