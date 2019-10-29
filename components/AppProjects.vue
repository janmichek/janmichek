<template>
  <div class="projects">
    <h3>
      Recent projects
    </h3>
    <div>
      <h4>
        Vážný zájem
      </h4>
      <ul>
        <li>
          platform form organizing concert of classic music to your living room.
        </li>
        <li>
          I have collaborated on custom UI, UX, fronted features such as feedbacking, user forms and validations, partly
          back-end features (notifiactions, permissions)
        </li>
        <li> Used technologies:
          <app-link to="https://nuxtjs.org/">
            Vue + Nuxt
          </app-link>
          ,
          <app-link to="https://www.prisma.io/">
            Prisma
          </app-link>
          ,
          <app-link to="https://postcss.org">
            Postcss
          </app-link>
          ,
          <app-link to="https://eslint.org/">
            Eslint
          </app-link>
          ,
          <app-link to="https://stylelint.io/">
            Stylelint
          </app-link>
          ,
          <app-link to="https://www.w3schools.com/css/css3_variables.asp">
            CSS Variables
          </app-link>
          ,
          CSS Animations</li>
      </ul>

    </div>
    <div>
      <h4>
        Korzo Národní
      </h4>

      <ul>
        <li>
          Presentation webpage and archive of records for fund of two classic Czech musicinas
        </li>
        <li>I have made complete frontend with custom UI such as advanced multiselects, participated on UX. The app is
          stand</li>
        <li>upon customized Wordpress where users can add posts and fill the archive of recrods
          used technologies: Vue.js, Wordpress, GraphQL, Bit components, Postcss, Eslint + Stylelint, CSS Animations,
          Css
          Variables, Webp images</li>
      </ul>

    </div>
    <div>
      <h4>
        Fond Kalabis Růžičková
      </h4>
      <ul>
        <li>
          Presentation webpage made for festival Korzo Národní
        </li>
        <li>
          I have made complete responsive frontend upon Wordpress coded from graphic design from Sketch projects
        </li>
        <li>used technologies: Vue.js, Wordpress, GraphQL, Bit components, Postcss, Eslint + Stylelint, CSS Animations,
          Css
          Variables, Webp images</li>
      </ul>
    </div>
    <div>
      <h4>
        Indigo Styleguide
      </h4>
      <ul>
        <li>
          UI library made for developers to set consistency of components over the comlpex ETL app.
        </li>
        <li>I have reverse engeneereged the usage of and codified UI in styleguide which was not took care about and
          then
          reimplemented the usage back to app</li>
        <li>
          used technologies: React, JSX, Storybook, Jest testing, Bootstrap,
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import AppLink from '../components/AppLink'
  export default {
    name: 'AppProjects',
    components: { AppLink },
  }
</script>

<style scoped>
  .projects {
    background: var(--brand-secondary);
  }

</style>
