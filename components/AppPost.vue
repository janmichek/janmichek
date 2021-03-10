<template>
  <div class="projects__project">
    <h4 class="post__heading">
      <slot name="heading"/>
    </h4>
    <div class="post__body u-flex-row">
      <div class="post__image u-1/3@tablet">
        <slot name="image"/>
      </div>
      <div class="post__description u-2/3@tablet">
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AppPost',
  }
</script>
<style>
  .post {
    &__heading {
      margin-bottom: var(--gutter-sm);
    }

    &__description {
      margin-left: var(--gutter-lg);
    }
  }
</style>
