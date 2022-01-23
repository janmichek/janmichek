<template>
  <section class="projects">
    <div class="u-container">
      <title-section>Recent projects</title-section>
      <div class="projects__content">
        <app-post>
          <template #heading>
            PWN
          </template>
          <template #image>
            <app-image
              image="pwn.png"
              :width="686"
              alt="Chabot Builder"/>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                My first web3 dapp I have been working on. Basically is a pawn shop for NFTs. The frontend part wraps
                user interactions with wallet, contracts and communication with backend.
              </li>
              <li>
                I was collaborating on designing visuals and user interaction as well as implementing the result. Building the app also required to be in close contact with community and adjust app
                accordingly in turbulent crypto space.
              </li>
              <li>
                Used tech:
                <app-link to="https://vuejs.org/">
                  Vue 3
                </app-link>
                ,
                <app-link to="https://www.typescriptlang.org/">
                  Typescript
                </app-link>
                ,
                <app-link to="https://www.alchemy.com/">
                  Alchemy
                </app-link>
                ,
                <app-link to="https://moralis.io/">
                  Moralis
                </app-link>
                ,
                <app-link to="https://docs.ethers.io/v5/">
                  Ethers.js
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
                <app-link to="https://www.figma.com/">
                  Figma
                </app-link>
                ,
                <app-link to="https://www.w3schools.com/css/css3_variables.asp">
                  CSS Variables
                </app-link>
              </li>
            </ul>
          </template>
        </app-post>

        <app-post>
          <template #heading>
            Chatbot Builder
          </template>
          <template #image>
            <app-image
              image="chatbot.png"
              :width="686"
              alt="Chabot Builder"/>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                This is a complex frontend for AI based chatbot builder made for industry leading
                corporate client. App offers innovative approach to build conversations between users and bot .
                <br>
                Preview of an app on demand.
              </li>
              <li>
                My role was to code whole frontend, participate on creating user flows based on product vision.
                Team-wise I was responsible to setting guidelines and lead junior dev aside the development.
              </li>
              <li>
                Used tech:
                <app-link to="https://vuejs.org/">
                  Vue 2
                </app-link>,
                <app-link to="https://vuex.vuejs.org/">
                  Vuex
                </app-link>,
                <app-link to="https://laravel.com/">
                  Laravel
                </app-link>,
                <app-link to="https://jestjs.io/">
                  Jest
                </app-link>,
                <app-link to="https://postcss.org">
                  Postcss
                </app-link>,
                <app-link to="https://eslint.org/">
                  Eslint
                </app-link>,
                <app-link to="https://www.adobe.com/products/xd.html">
                  Adobe XD
                </app-link>,
                <app-link to="https://www.w3schools.com/css/css3_variables.asp">
                  CSS Variables
                </app-link>,
                <app-link to="https://www.w3schools.com/css/css3_animations.asp">
                  CSS Animations
                </app-link>
              </li>
            </ul>
          </template>
        </app-post>
        <app-post>
          <template #heading>
            Vážný zájem
          </template>
          <template #image>
            <app-link to="https://vaznyzajem.cz/">
              <app-image
                image="vaznyzajem.png"
                :width="686"
                alt="Vážný zájem"/>
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                Platform for organizing concerts of classical music in your living room.
              </li>
              <li>
                I have collaborated on custom UI, UX and coded frontend features such as feedbacks, user forms and
                validations and partly back-end features (notifications, permissions).
              </li>
              <li>
                Used tech:
                <app-link to="https://nuxtjs.org/">
                  Vue + Nuxt
                </app-link>,
                <app-link to="https://www.prisma.io/">
                  Prisma
                </app-link>,
                <app-link to="https://postcss.org">
                  Postcss
                </app-link>,
                <app-link to="https://eslint.org/">
                  Eslint
                </app-link>,
                <app-link to="https://www.hotjar.com">
                  Hotjar
                </app-link>,
                <app-link to="https://developers.google.com/web/progressive-web-apps">
                  PWA
                </app-link>,
                <app-link to="https://www.w3schools.com/css/css3_variables.asp">
                  CSS Variables
                </app-link>,
                <app-link to="https://www.w3schools.com/css/css3_animations.asp">
                  CSS Animations
                </app-link>
              </li>
            </ul>
          </template>
        </app-post>
        <app-post>
          <template #heading>
            Indigo Styleguide
          </template>
          <template #image>
            <app-link to="https://indigo.keboola.com/">
              <app-image
                image="indigo.png"
                :width="686"
                alt="Indigo"/>
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                UI library for developers to reuse UI components over complex ETL app.
              </li>
              <li>
                I have reverse engineered inconsistent usage of UI components, codified it in styleguide and
                reimplemented back to the app.
              </li>
              <li>
                Used tech:
                <app-link to="https://reactjs.org">
                  React
                </app-link>,
                <app-link to="https://reactjs.org/docs/introducing-jsx.html">
                  JSX
                </app-link>,
                <app-link to="https://storybook.js.org">
                  Storybook
                </app-link>,
                <app-link to="https://jestjs.io/">
                  Jest testing
                </app-link>,
                <app-link to="https://getbootstrap.com/docs/3.3/">
                  Bootstrap
                </app-link>,
                <app-link to="https://eslint.org/">
                  Eslint
                </app-link>,
                <app-link to="https://stylelint.io/">
                  Stylelint
                </app-link>,
                <app-link to="https://www.w3schools.com/css/css3_animations.asp">
                  CSS Animations
                </app-link>
              </li>
            </ul>
          </template>
        </app-post>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLink from '../components/AppLink'
  import TitleSection from '../components/TitleSection'
  import AppImage from '../components/AppImage'
  import AppPost from './AppPost'

  export default {
    name: 'SectionProjects',
    components: { AppPost, AppImage, TitleSection, AppLink },
  }
</script>

<style scoped>
  .projects {
    &__content {
      margin: 0 var(--gutter);
    }

    &__project:not(:last-of-type) {
      margin-bottom: var(--gutter-xxl);
    }
  }
</style>
