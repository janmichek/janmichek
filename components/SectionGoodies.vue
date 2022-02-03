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
            title: 'Blockchain learning Dapps',
            image: 'book.jpg',
            description: 'Set of guided dapps tutorials I made as an entry work to crypto space before my first real experience.',
            link: '/blockchain-dapps',
          },
          {
            title: 'Git Flow',
            image: 'checklist.jpg',
            description: 'No worry if our company does not have solid workflow yet. We can iterate from here.',
            link: '/git-flow',
          },
          {
            title: 'Weekly News Feed',
            image: 'news.jpg',
            description: 'List of tech, frontend & crypto related links I am going through every Sunday.',
            link: '/tech-links',
          },
          {
            title: 'Webdesign checklist',
            image: 'checklist.jpg',
            description: 'When I am working with designers I want to make sure all formal requirements on design handoff are met.',
            link: '/webdesign-checklist',
          },
          {
            title: 'Source Code',
            image: 'sourcecode.jpg',
            description: 'Source code of this personal page. This web is hosted on Firebase.',
            link: 'https://github.com/janmichek/janmichek',
          },
          {
            title: 'Vue 2 File Template By Styleguide',
            image: 'vue-logo.jpg',
            description: 'A template for new .vue file creation in IntelliJ family editors. This template creates new file according to official styleguide so we can save some time.',
            link: 'https://gist.github.com/janmichek/9a40c8e481a1f8d3fa3a07fe79733e27',
          },
          {
            title: 'CRUD animations',
            image: 'crud_actions.png',
            description: 'These simple but effective icon animations are vital for every CRUD. Intuitive, elegant copy-pasteble solution. Just hover around.',
            link: 'https://codepen.io/janmichek/pen/bGEoozW',
          },

          {
            title: 'Frontend Developer Manifesto',
            image: 'janmichek.jpg',
            description: 'The set of evergreen rules, best practices, commonly mistaken concepts and personal preferences in structured form.',
            link: 'https://github.com/janmichek/frontend-developer-manifesto/blob/main/README.md',
          },
          {
            title: 'Photos Gallery',
            image: 'k6.jpg',
            description: 'I like shooting photos too. Especially flowers. Here is a small presentation of my esthetics skills. Or just for nice placeholder.',
            link: '/gallery',
          },

          {
            title: 'Blog posts',
            image: 'medium.jpg',
            description: 'Two of my older blog posts from my mission in Keboola company describing redesigning of UI. ' +
              '<a target="_blank" rel="noopener noreferrer" href="https://500.keboola.com/redesign-keboola-connection-ux-part-1-kick-off-eng-cb81d5f7994c">POST 1</a>, ' +
              '<a target="_blank" rel="noopener noreferrer" href="https://500.keboola.com/redesign-keboola-connection-ux-part-2-ready-to-go-22a96aa38bfe">POST 2</a>.',
          },

          {
            title: 'Music Production',
            image: 'honeytcz.jpg',
            description: 'I invest most of my free time into music production. Take a listen.',
            link: 'https://soundcloud.com/honeytcz',
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
