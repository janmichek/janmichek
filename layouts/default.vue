<template>
  <div class="layout layout--default">
    <the-header/>
    <main class="layout__content">
      <slot/>
    </main>
    <the-footer class="layout__footer"/>
  </div>
</template>

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
