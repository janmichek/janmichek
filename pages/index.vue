<template>
  <article class="page">
    <section-skills class="page__section"/>
    <section-projects class="page__section"/>
    <section-goodies class="page__section"/>
  </article>
</template>
<script>

  import SectionSkills from '../components/SectionSkills'
  import SectionProjects from '../components/SectionProjects'
  import SectionGoodies from '../components/SectionGoodies'

  export default {
    components: { SectionGoodies, SectionProjects, SectionSkills },
  }
</script>

<style scoped>
  .page {
    &__section {
      padding: var(--gutter-xxl) 0;
    }
  }
</style>
