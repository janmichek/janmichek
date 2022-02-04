<template>
  <article>
    <title-slug
      title="Un-stuck checklist"
      description="This is a list of known problem-solving techniques right on one place in order.
      When the cause of the problem is not clear in 15 minutes, lets check this list one by one."/>

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
          'Doing much complicated stuff at once. Use partly hardcoded solution, parametrize later.',
          'Start solving the task from frontend. Start solving the task from backend.',
          'Is the problem present in the browser or on the server?',
          'Is it a problem of style or is it functional?',
          'When was the last occurrence without problem? Can I revert to this point?',
          'Is there a difference between localhost and production?',
          'Is there a syntax violation?',
          'Was the file compiled and the machine reads compiled changes?',
          'Am I editing the right file and the changes were saved?',
          'Am I editing the right branch?',
          'Could it be cached?',
          'Refactor the code at least temporarily. Rename the functions and variable to be more self-explanatory.',
          'See how did I or my colleagues were solving similar problems. Search in Github repos Issues.',
          'Google the problem with different naming. Google the problem less or more specific.',
          'Revise the issue and start again from scratch with a different approach.',
          'Reorder editor windows or change the form somehow else.',
          'Turn the computer off and on again.',
          'Tomorrow is another day.',
        ],
      }
    },
  }
</script>
