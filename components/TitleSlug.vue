<template>
  <div class="title-slug">
    <h2 class="h3 title-slug__title">{{ title }}</h2>
    <p class="title-slug__description">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'TitleSlug',
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .title-slug {
    margin-bottom: var(--gutter-xxl);

    &__title {
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
