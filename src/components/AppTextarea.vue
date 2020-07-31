<template>
  <div>
    <textarea
      :cols="cols"
      :readonly="readonly"
      :rows="rows"
      :value="value"
      @keyup="$emit('update', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    cols: Number,
    readonly: Boolean,
    rows: Number,
    value: String
  }
}
</script>

<style scoped>
</style>
