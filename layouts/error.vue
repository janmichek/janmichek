<template>
  <div class="error u-container">
    <h1
      v-if="error.statusCode === 404"
      class="error__heading">
      Page not found
    </h1>
    <h1
      v-else
      class="error__heading">
      Error
    </h1>
    <div class="error__excerpt">
      Sorry for inconvenience
    </div>
    <div class="error__action">
      <app-link to="/">
        Back to homepage
      </app-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>

<style>
.error {
  margin: var(--gutter-xl) 0;

  &__heading {
    text-align: center;
  }

  &__excerpt {
    text-align: center;
    padding-bottom: var(--gutter-xl);
  }

  &__action {
    text-align: center;
  }
}
</style>
