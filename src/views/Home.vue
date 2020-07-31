<template>
  <div class="home">
    <AppTextarea
      :cols="80"
      :rows="24"
      :value="text"
      @update="text = $event"
    />
    <div class="buttons-container">
      <div class="button-cell">
        <AppButton
          text="save"
          @onClick="save()"
        />
      </div>
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
      text: ''
    }
  },
  methods: {
    save: function () {
      console.log('save', this.text)
    },
    clear: function () {
      console.log('clear')
      this.text = ''
    },
    update: function () {
      console.log('update')
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
