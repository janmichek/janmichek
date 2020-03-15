<template>
  <component
    :is="component"
    :to="component === 'app-link' ? link : null"
    :class="['card u-link-wrap', {'card--has-link': link }]">
    <h4 class="card__title">
      {{ title }}
    </h4>
    <img
      class="card__image"
      :src="require(`../assets/images/${image}?webp`)"
      alt="Goodie image">
    <slot/>
  </component>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  /* component rendered dynamically */
  import AppLink from '../components/AppLink'
  export default {
    name: 'AppCard',
    components: { AppLink },
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        default: null,
      },
    },
    computed: {
      component () {
        return this.link ? 'app-link' : 'div'
      },
    },
  }
</script>

<style>
  .card {
    width: 100%;
    display: inline-block;
    background: #fff;
    padding: var(--gutter);
    margin-bottom: var(--gutter-sm);
    &--has-link:hover .card__title {
      color: var(--brand-primary);
      text-decoration: underline;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &__image {
      margin-bottom: var(--gutter-sm);
    }
    &__description {
      color: var(--text-color);
    }
  }
</style>
