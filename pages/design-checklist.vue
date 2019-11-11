<template>
  <article>
    <title-slug
      title="Webdesign checklist"
      description="This is a set of requirements on design sketches.
      These are frequently requested additions to final design sketches so it applies to 95% of projects.
      These requirements needs to be met before design sketches handoff. Or vice versa - when
      I am passing graphic sketches to developers. Otherwise would be pure waste of time for both sides."/>
    <app-checklist :list="checklist"/>
  </article>
</template>

<script>
  import AppChecklist from '../components/AppChecklist'
  import TitleSlug from '../components/TitleSlug'

  export default {
    name: 'DesignChecklist',
    components: { TitleSlug, AppChecklist },
    layout: 'slug',
    data () {
      return {
        checklist: [
          'hover state',
          'active / selected state',
          'error state',
          'disabled state',
          'loading state',
          'million of items',
          'empty state',
          'veeeeeeeeeery long inputs',
          'error page style',
          'scrolled viewport into half of the page',
          'touch controlled elements are at least 45px width',
          'pass variables as most parametrically as possible',
          'try to think of desktop & touch controls',
          'try to reuse existing components first (if previous UI available)',
          'Mobile first design (project specific, but mostly yes)',
        ],
      }
    },
  }
</script>
