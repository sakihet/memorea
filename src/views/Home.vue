<template>
  <div class="home">
    <AppTextarea
      :cols="80"
      :rows="24"
      :value="text"
      @update="onUpdate($event)"
    />
    <div class="buttons-container">
      <div class="button-cell">
        <AppButton
          text="clear"
          @onClick="clear()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import AppTextarea from '@/components/AppTextarea.vue'

export default {
  name: 'Home',
  components: {
    AppButton,
    AppTextarea
  },
  data: function () {
    return {
    }
  },
  created () {
    this.$store.dispatch('init')
  },
  computed: {
    text () {
      return this.$store.state.text
    }
  },
  methods: {
    clear: function () {
      this.$store.dispatch('update', '')
    },
    onUpdate: function (value) {
      this.$store.dispatch('update', value)
    }
  }
}
</script>

<style scoped>
.buttons-container {
  display: flex;
  flex-direction: row;
}
.button-cell {
  flex: 1;
}
</style>
