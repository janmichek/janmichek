<template>
  <div class="layout layout--default">
    <the-header/>
    <main class="layout__content">
      <nuxt/>
    </main>
    <the-footer class="layout__footer"/>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader'
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'DefaultLayout',
    components: {
      TheFooter,
      TheHeader,
    },
  }
</script>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__footer {
      margin-top: auto;
    }
  }
</style>
