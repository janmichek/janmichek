<template>
  <article>
    <title-slug
      title="Code Review Checklist"
      description="I like this team attitude in many ways. I always say that developing a project alone is the same as to rise child as a single parent.
      No matter how objective you try to be as possible you are always stuck in your past experience and your own best practices. This is the checklist which works the best for me"/>
    <app-checklist :list="checklist"/>
  </article>
</template>

<script>
  import AppChecklist from '../components/AppChecklist'
  import TitleSlug from '../components/TitleSlug'

  export default {
    components: { TitleSlug, AppChecklist },
    layout: 'slug',
    data () {
      return {
        checklist: [
          'Think how would I solve it',
          'Validate if MR fully solves initial issue',
          'Go through the code and comment your contradictions per line',
          'Checkout branch and run the scenario as you were user',
          'Watch for console logs',
          'Run with empty values',
          'Run with invalid values',
          'Think about edge cases, try to break it',
          'Try in more devices',
          'Reply to author with checklist of task',
        ],
      }
    },
  }
</script>
