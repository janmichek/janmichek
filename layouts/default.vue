<template>
  <div class="layout layout--default">
    <the-navigation/>
    <main class="layout__content">
      <nuxt/>
    </main>
    <the-footer class="layout__footer"/>
  </div>
</template>

<script>
  import TheNavigation from '../components/TheNavigation'
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'DefaultLayout',
    components: {
      TheFooter,
      TheNavigation,
    },
  }
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__content {
      margin-top: var(--header-height);
    }

    &__footer {
      margin-top: auto;
    }
  }
</style>
