<template>
  <img
    :src="require(`../assets/images/${image}?webp`)"
    :width="width"
    :alt="alt">
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
