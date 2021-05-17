<template>
  <section class="goodies">
    <div class="u-container">
      <title-section theme="dark">
        Goodies
      </title-section>
      <div class="u-masonry">
        <app-card
          v-for="(goodie, id) in goodies"
          :key="id"
          :image="goodie.image"
          :title="goodie.title"
          :link="goodie.link">
          <div v-html="goodie.description"/>
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
            title: 'Webdesign checklist',
            image: 'checklist.jpg',
            description: 'When I am collaborating with designers I need to make sure all formal requirements on design sketches are met. Otherwise would be pure waste of our times.',
            link: '/webdesign-checklist',
          },
          {
            title: 'Frontendisti meetup',
            image: 'frontendisti.jpg',
            description: 'Local informal meetings of Frontendisti community I really dig for. I have attended many of them, always full valuable presentations <app-link to="https://www.meetup.com/frontendisti/">Meetups</app-link>',
            link: '/',
          },
          {
            title: 'Weekly Tech Feed',
            image: 'janmichek.jpg',
            description: 'List of tech, dev & frontend related links I am going through on weekly basis. Mostly on sundays.',
            link: '/tech-links',
          },
          {
            title: 'Un-stuck checklist',
            image: 'checklist.jpg',
            description: 'Problem solving checklist for those "I have no idea what i am doing" moments.',
            link: '/unstuck-checklist',
          },
          {
            title: 'CRUD animations',
            image: 'crud_actions.png',
            description: 'These simple but effective icon animations are vital for every CRUD. Intuitive, elegant copy-pasteble solution. Just hover around.',
            link: 'https://codepen.io/janmichek/pen/bGEoozW',
          },
          {
            title: 'Photos Gallery',
            image: 'k6.jpg',
            description: 'I like shooting photography too. Especially flowers. Here is a small presentation of my esthetics skills. I using them as placeholder images when building new app',
            link: '/gallery',
          },
          {
            title: 'Vue File Template By Styleguide',
            image: 'janmichek.jpg',
            description: 'A template for new .vue file creation in IntelliJ family editors. This template creates new file according to official styleguide so there is need to manually write code anymore.',
            link: 'https://gist.github.com/janmichek/9a40c8e481a1f8d3fa3a07fe79733e27',
          },
          {
            title: 'Code Review Checklist',
            image: 'checklist.jpg',
            description: 'I always say that developing a project alone is the same as to rise child as a single parent.',
            link: '/code-review-checklist',
          },
          {
            title: 'Source Code',
            image: 'janmichek.jpg',
            description: 'Source code of this personal page. This web is hosted on Firebase.',
            link: 'https://github.com/janmichek/janmichek',
          },
          {
            title: 'Music Production',
            image: 'honeytcz.jpg',
            description: 'I invest most of my free time into music production. Take a listen.',
            link: 'https://soundcloud.com/honeytcz',
          },
          {
            title: 'Frontend Developer Manifesto',
            image: 'janmichek.jpg',
            description: 'The set of evergreen rules, best practices, commonly mistaken concepts and personal preferences in structured form',
            link: 'https://github.com/janmichek/frontend-developer-manifesto/blob/main/README.md',
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
