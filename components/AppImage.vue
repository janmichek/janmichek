<template>
  <picture>
    <source
      :srcset="require(`../assets/images/${image}?webp`)"
      :width="width"
      :alt="alt"
      type="image/webp">
    <source
      :srcset="require(`../assets/images/${image}`)"
      :width="width"
      :alt="alt"
      type="image/jpeg">
    <img
      :src="require(`../assets/images/${image}`)"
      :width="width"
      :alt="alt">
  </picture>
</template>

<script>
  export default {
    name: 'AppImage',
    props: {
      image: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      width: {
        type: Number,
        default: null,
      },
    },
  }
</script>
