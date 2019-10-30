<template>
  <section class="page">
    <app-skills class="page__skills u-container"/>
    <app-projects class="page__projects"/>
  </section>
</template>

<script>

  import AppSkills from '../components/AppSkills'
  import AppProjects from '../components/AppProjects'
  export default {
    components: { AppProjects, AppSkills },
  }
</script>

<style scoped>
  .page {
    &__skills {
      padding-bottom: var(--gutter-section);
    }
    &__projects {
      padding-bottom: var(--gutter-section);
    }
  }
</style>
