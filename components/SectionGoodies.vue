<template>
  <section class="goodies">
    <div class="u-container">
      <title-section theme="dark">Goodies</title-section>
      <div class="u-masonry">
        <app-card
          v-for="(goodie, id) in goodies"
          :key="id"
          :image="goodie.image"
          :title="goodie.title"
          :link="goodie.link">
          <div v-html="goodie.description "></div>
        </app-card>
      </div>
    </div>
  </section>
</template>

<script>
  import AppCard from '../components/AppCard'
  import TitleSection from '../components/TitleSection'

  export default {
    name: 'SectionGoodies',
    components: { TitleSection, AppCard },
    data () {
      return {
        goodies: [
          {
            title: 'Pull Request Checklist',
            image: 'checklist.jpg',
            description: 'With empathy you can grow strong codebase. Here is what I have learned.',
            link: '/pull-request-checklist',
          },
          {
            title: 'Github Tools',
            image: 'github-tools.jpg',
            description: 'Awesome Github tools and standards I hold in my Git workflow. I use them to make collaboration joy for everyone.',
            link: '/github-tools',
          },
          {
            title: 'Blog posts',
            image: 'medium.jpg',
            description: 'Two of my blog posts from my mission in Keboola company describing redesigning of UI. ' +
              '<a target="_blank" rel="noopener noreferrer" href="https://500.keboola.com/redesign-keboola-connection-ux-part-1-kick-off-eng-cb81d5f7994c">POST 1</a>, ' +
              '<a target="_blank" rel="noopener noreferrer" href="https://500.keboola.com/redesign-keboola-connection-ux-part-2-ready-to-go-22a96aa38bfe">POST 2</a>.',
          },
          {
            title: 'Design quality checklist',
            image: 'checklist.jpg',
            description: 'When I am collaborating with designers I need to make sure all formal requirements on design sketches are met. Otherwise would be pure waste of our times.',
            link: '/design-checklist',
          },
          {
            title: 'Frontendisti meetup',
            image: 'frontendisti.jpg',
            description: 'Local informal meetings of Frontendisti community I really dig for. I have attended many of them, always full valuable presentations <app-link to="https://www.meetup.com/frontendisti/">Meetups</app-link>',
            link: '/',
          },
          {
            title: 'Un-stuck checklist',
            image: 'checklist.jpg',
            description: 'Problem solving checklist for those "I have no idea what i am doing" moments.',
            link: '/unstuck-checklist',
          },
          {
            title: 'Invision Mock',
            image: 'invision.jpg',
            description: 'Just to show my skillsw with this tool to build interactive mockups.',
            link: 'https://invis.io/RGPAXGIM4W2',
          },
          {
            title: 'Weekly Tech Feed',
            image: 'janmichek.jpg',
            description: 'List of tech, dev & frontend related links I am going through on weekly basis. Mostly on sundays.',
            link: '/tech-links',
          },
          {
            title: 'Code Review Checklist',
            image: 'checklist.jpg',
            description: 'I always say that developing a project alone is the same as to rise child as a single parent.',
            link: '/code-review-checklist',
          },
          {
            title: 'Music Production',
            image: 'honeytcz.jpg',
            description: 'I invest most of my free time into music production. Take a listen.',
            link: 'https://soundcloud.com/honeytcz',
          },
          {
            title: 'Source Code',
            image: 'janmichek.jpg',
            description: 'Source code of this personal page. This web is hosted on zeit.co.',
            link: 'https://github.com/janmichek/janmichek',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .goodies {
    background: var(--brand-primary);
  }
</style>
