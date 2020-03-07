<template>
  <section class="projects">
    <div class="u-container">
      <title-section>Recent projects</title-section>
      <div class="projects__content">
        <div class="projects__project">
          <h4>
            <app-link to="https://vaznyzajem.cz">
              Vážný zájem
            </app-link>
          </h4>
          <ul class="projects__list">
            <li>
              Platform for organizing concerts of classical music in your living room.
            </li>
            <li>
              I have collaborated on custom UI, UX and coded frontend features such as feedbacks, user forms and
              validations and partly back-end features (notifications, permissions).
            </li>
            <li>
              Used technologies:
              <app-link to="https://nuxtjs.org/">Vue + Nuxt</app-link>
              ,
              <app-link to="https://www.prisma.io/">Prisma</app-link>
              ,
              <app-link to="https://PostCSS.org">PostCSS</app-link>
              ,
              <app-link to="https://eslint.org/">Eslint</app-link>
              ,
              <app-link to="https://www.hotjar.com">Hotjar</app-link>
              ,
              <app-link to="https://developers.google.com/web/progressive-web-apps">PWA</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_variables.asp">CSS Variables</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_animations.asp">CSS Animations</app-link>
            </li>
          </ul>

        </div>
        <div class="projects__project">
          <h4>
            <app-link to="https://dikyzemuzem.cz">
              Díky, že můžem
            </app-link>
          </h4>
          <ul class="projects__list">
            <li>
              Presentation webpage made for celebration of anniversary of freedom and democracy.
            </li>
            <li>
              I have made complete responsive frontend upon Wordpress backend, coded from graphic design in Sketch
              project.
            </li>
            <li>
              Used technologies:
              <app-link to="https://nuxtjs.org/">Vue + Nuxt</app-link>
              ,
              <app-link to="https://www.wordpress.com/">Wordpress</app-link>
              ,
              <app-link to="https://www.graphql.org/">GraphQL</app-link>
              ,
              <app-link to="https://bit.dev">Bit components</app-link>
              ,
              <app-link to="https://PostCSS.org">PostCSS</app-link>
              ,
              <app-link to="https://developers.google.com/speed/webp">WebP images</app-link>
              ,
              <app-link to="https://eslint.org/">Eslint</app-link>
              ,
              <app-link to="https://developers.google.com/web/progressive-web-apps">PWA</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_variables.asp">CSS Variables</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_animations.asp">CSS Animations</app-link>
            </li>
          </ul>

        </div>
        <div class="projects__project">
          <h4>
            <app-link
              to="https://kalabisruzickova.cz/">
              Fond Kalabis Růžičková
            </app-link>
          </h4>

          <ul class="projects__list">
            <li>
              Presentation webpage and archive of records for fund of two classical Czech musicians.
            </li>
            <li>
              I have made complete frontend with custom UI such as advanced multi selects, participated on UX.
              The app is based upon customized Wordpress backend.
            </li>

            <li>
              Used technologies:
              <app-link to="https://nuxtjs.org/">Vue + Nuxt</app-link>
              ,
              <app-link to="https://www.wordpress.com/">Wordpress</app-link>
              ,
              <app-link to="https://www.graphql.org/">GraphQL</app-link>
              ,
              <app-link to="https://bit.dev">Bit components</app-link>
              ,
              <app-link to="https://PostCSS.org">PostCSS</app-link>
              ,
              <app-link to="https://developers.google.com/speed/webp">WebP images</app-link>
              ,
              <app-link to="https://eslint.org/">Eslint</app-link>
              ,
              <app-link to="https://developers.google.com/web/progressive-web-apps">PWA</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_variables.asp">CSS Variables</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_animations.asp">CSS Animations</app-link>
            </li>
          </ul>
        </div>
        <div class="projects__project">
          <h4>
            <app-link to="https://indigo.keboola.com/">
              Indigo Styleguide
            </app-link>
          </h4>
          <ul class="projects__list">
            <li>
              UI library for developers to reuse UI components over complex ETL app.
            </li>
            <li>
              I have reverse engineered inconsistent usage of UI components, codified it in styleguide and
              reimplemented back to the app.
            </li>
            <li>
              Used technologies:
              <app-link to="https://reactjs.org">React</app-link>
              ,
              <app-link to="https://reactjs.org/docs/introducing-jsx.html">JSX</app-link>
              ,
              <app-link to="https://storybook.js.org">Storybook</app-link>
              ,
              <app-link to="https://jestjs.io/">Jest testing</app-link>
              ,
              <app-link to="https://getbootstrap.com/docs/3.3/">Bootstrap</app-link>
              ,
              <app-link to="https://eslint.org/">Eslint</app-link>
              ,
              <app-link to="https://stylelint.io/">Stylelint</app-link>
              ,
              <app-link to="https://www.w3schools.com/css/css3_animations.asp">CSS Animations</app-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLink from '../components/AppLink'
  import TitleSection from '../components/TitleSection'

  export default {
    name: 'SectionProjects',
    components: { TitleSection, AppLink },
  }
</script>

<style scoped>
  .projects {
    &__content {
      margin: 0 var(--gutter);
    }

    &__project:not(:last-of-type) {
      margin-bottom: var(--gutter-xl);
    }
  }
</style>
