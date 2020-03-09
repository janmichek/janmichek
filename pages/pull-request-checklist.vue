<template>
  <article>
    <title-slug
      title="Pull Request Checklist"
      description="Code review can be nightmare or it can be platform to grow strong codebase. Only depends how you
      hand off your prepare Pull Request. With empathy you can make the collaboration super-smooth. For me, empathy is a skill and here is what I have learned"/>
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
          'Try to be as most helpful to reviewer as possible. Use Markdown, links, lists, ...',
          '1 PR should solve 1 issue ideally. Tag the initial issue `Fixes #99`.',
          'Validate with initial issue.',
          'Describe previous and new status.',
          'Doublecheck the diff of changes.',
          'Resolve conflicts.',
          'Comment important part of code per line.',
          'Prove that the changes are working by screen capture or pair of screenshots.',
          'Assign the prepare changes to reviewer. No need to use WIP anymore.',
          'Ideal count of reviewers is 1 or 2.',
        ],
      }
    },
  }
</script>
