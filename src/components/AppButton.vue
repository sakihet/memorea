<template>
  <div>
    <button @click="$emit('onClick')">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
