<template>
  <div>
    <app-image
      v-if="imageLInk"
      :image="imageLInk"
      alt="preview"/>
    <div
      v-else
      class="preview__loading">
      Loading preview
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imageLInk: '',
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.imageLInk = `screencaptures/preview-${this.$route.params.id}.gif`
      })
    },
  }
</script>

<style scoped>
.preview__loading {
  display: flex;
  justify-content: center;
  padding: var(--gutter-xl);
}
</style>
