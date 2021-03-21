<template>
  <article class="tech-links">
    <title-slug
      title="Tech links"
      description="These are the main sources of my knowledge. I do open them mostly on Sundays. There are more links I read about music production and psychology. But lets stick with these 10 top links."/>
    <ul>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://www.smashingmagazine.com/">
            smashingmagazine.com
          </app-link>
        </h4>
        <div>Frontend goodies proved by time</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://www.reddit.com/r/technology/">
            reddit.com/r/technology
          </app-link>
        </h4>
        <div>Freshest community tech news</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://www.webdesignernews.com/">
            webdesignernews.com
          </app-link>
        </h4>
        <div>Cool feed of frontend related articles and tools</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="http://frontendisti.cz/">
            frontendisti.cz
          </app-link>
        </h4>
        <div>Czech frontend community also organizing meetups</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://www.morningbrew.com/emerging-tech">
            morningbrew/emerging-tech
          </app-link>
        </h4>
        <div>Future proof feed you need</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://designyoutrust.com/">
            designyoutrust.com
          </app-link>
        </h4>
        <div>Inspirational eye candies</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://www.theverge.com/">
            theverge.com
          </app-link>
        </h4>
        <div>Wider scale tech news</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://frontend.garden/">
            frontend.garden
          </app-link>
        </h4>
        <div>Czech frontend community  blog</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://confs.tech">
            confs.tech
          </app-link>
        </h4>
        <div>Dev conferences around</div>
      </li>
      <li class="tech-links__item">
        <h4>
          <app-link to="https://vuejsdevelopers.com/">
            vuejsdevelopers.com
          </app-link>
        </h4>
        <div>Vue related feed</div>
      </li>
    </ul>
  </article>
</template>

<script>
  import AppLink from '../components/AppLink'
  import TitleSlug from '../components/TitleSlug'

  export default {
    layout: 'slug',
    components: { TitleSlug, AppLink },
  }
</script>

<style scoped>
  .tech-links {
    &__item {
      margin-bottom: var(--gutter);
    }
  }
</style>
