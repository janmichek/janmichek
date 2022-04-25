<template>
  <div class="project-link">
    <app-link :to="to">
      <span>{{ label }}</span>
    </app-link>
    <template v-if="!isLast">
      ,
    </template>
  </div>
</template>

<script>
  export default {
    name: 'ProjectLink',
    props: {
      to: {
        required: true,
        type: String,
      },
      label: {
        required: true,
        type: String,
      },
      isLast: {
        default: false,
        type: Boolean,
      },
    },
  }
</script>

<style scoped>
.project-link {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  }
</style>
