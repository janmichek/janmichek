<template>
  <div class="layout layout--default">
    <the-header/>
    <main class="layout__content u-flex-row u-center">
      <div class="u-2/3@tablet">
        <div class="u-container">
          <slot/>
        </div>
      </div>
    </main>
    <the-footer
      theme="primary"
      class="layout__footer"/>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--brand-secondary);

  &__content {
    padding: var(--gutter-xxl) 0;
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
