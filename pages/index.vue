<template>
  <section class="u-container">
    <app-skills class="page__skills"/>
    <app-projects class="page__projects"/>
    <div class="u-flex-row">
      <div class="u-1/2@tablet">
        <app-goodies/>
      </div>
      <div class="u-1/2@tablet">
        <app-contact/>
      </div>
    </div>
  </section>
</template>

<script>

  import AppSkills from '../components/AppSkills'
  import AppProjects from '../components/AppProjects'
  import AppGoodies from '../components/AppGoodies'
  import AppContact from '../components/AppContact'
  export default {
    components: { AppContact, AppGoodies, AppProjects, AppSkills },
    data () {
      return {
        dummy: ['a', 'b', 'c'],
      }
    },
  }
</script>

<style scoped>
  .page {
    &__skills {
      margin-bottom: var(--gutter-section);
    }
    &__projects {
      margin-bottom: var(--gutter-section);
    }
  }
</style>
