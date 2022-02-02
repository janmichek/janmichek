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
  import AppImage from '@/components/AppImage'
  export default {
    components: { AppImage },
    data () {
      return {
        imageLInk: '',
      }
    },

    mounted () {
      this.$nextTick(function () {
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
