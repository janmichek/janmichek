<template>
  <div class="title-slug">
    <h2 class="h3 title-slug__title">
      {{ title }}
    </h2>
    <p
      class="title-slug__description"
      v-html="description"/>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.title-slug {
  margin-bottom: var(--gutter-xxl);

  &__title {
    color: var(--brand-primary);
    margin-bottom: var(--gutter);
    text-align: center;

    @media (--tablet) {
      text-align: left;
    }
  }

  &__description {
    font-size: 22px;
  }
}
</style>
