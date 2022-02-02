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
            <app-link to="http://pwn.finance">
              <app-image
                image="pwn.png"
                :width="686"
                alt="Chabot Builder"/>
              <app-link
                class="projects__preview"
                to="/preview/pwn1"
                target="_blank">
                Preview 1
              </app-link>
              <app-link
                class="projects__preview"
                to="/preview/pwn2"
                target="_blank">
                Preview 2
              </app-link>
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                My first web3 dapp I have been working on. Basically it's a pawn shop for NFTs. The frontend part wraps
                user interactions with wallet, contracts and communication with backend.
              </li>
              <li>
                I was collaborating on designing visuals and user interaction as well as implementing the result.
                Building the app also required to be in close contact with community and adjust app
                accordingly in turbulent crypto space.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Vue3"
                  to="https://vuejs.org/"/>
                <project-link
                  label="Typescript"
                  to="https://www.typescriptlang.org/"/>
                <project-link
                  label="Alchemy"
                  to="https://www.alchemy.com/"/>
                <project-link
                  label="Moralis"
                  to="https://moralis.io/"/>
                <project-link
                  label=" Ethers.js"
                  to=" https://docs.ethers.io/v5/"/>
                <project-link
                  label="Postcss"
                  to="https://postcss.org"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Sentry"
                  to="https://sentry.io/"/>
                <project-link
                  label="Figma"
                  to="https://www.figma.com/"/>
                <project-link
                  label="CSS Variables"
                  to="https://www.w3schools.com/css/css3_variables.asp"
                  is-last/>
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
            <app-link
              class="projects__preview"
              to="/preview/chatbot1"
              target="_blank">
              Preview 1
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/chatbot2"
              target="_blank">
              Preview 2
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                This is a complex frontend for AI based chatbot builder made for industry leading
                corporate client. App offers innovative approach to build conversations between users and bot .
              </li>
              <li>
                My role was to code whole frontend, participate on creating user flows based on product vision.
                Team-wise I was responsible to setting guidelines and lead junior dev aside the development.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Vue 2"
                  to="https://vuejs.org/"/>
                <project-link
                  label="Vuex"
                  to="https://vuex.vuejs.org/"/>
                <project-link
                  label="Laravel"
                  to="https://laravel.com/"/>
                <project-link
                  label="Jest"
                  to="https://jestjs.io/"/>
                <project-link
                  label="Postcss"
                  to="https://postcss.org"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Adobe XD"
                  to="https://www.adobe.com/products/xd.html"/>
                <project-link
                  label=" CSS Variables"
                  to="https://www.w3schools.com/css/css3_variables.as"/>
                <project-link
                  label="CSS Animations"
                  to="https://www.w3schools.com/css/css3_animations.asp"
                  is-last/>
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
              <app-link
                class="projects__preview"
                to="/preview/vz"
                target="_blank">
                Preview
              </app-link>
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
                <project-link
                  label="Vue 2 + Nuxt"
                  to="https://nuxtjs.org/"/>
                <project-link
                  label="Prisma"
                  to="https://www.prisma.io/"/>
                <project-link
                  label="Postcss"
                  to="https://postcss.org"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Hotjar"
                  to="https://www.hotjar.com"/>
                <project-link
                  label="PWA"
                  to="https://developers.google.com/web/progressive-web-apps"/>
                <project-link
                  label=" CSS Variables"
                  to="https://www.w3schools.com/css/css3_variables.as"/>
                <project-link
                  label="CSS Animations"
                  to="https://www.w3schools.com/css/css3_animations.asp"
                  is-last/>
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
                UI library for developers to reuse UI components over complex ETL app. Library is unmaintained now.
              </li>
              <li>
                I have reverse engineered inconsistent usage of UI components, codified it in styleguide and
                reimplemented back to the app.
              </li>
              <li>
                Used tech:
                <project-link
                  label="React"
                  to="https://reactjs.org"/>
                <project-link
                  label="JSX"
                  to="https://reactjs.org/docs/introducing-jsx.html"/>
                <project-link
                  label="Storybook"
                  to="https://storybook.js.org"/>
                <project-link
                  label="Jest"
                  to="https://jestjs.io/"/>
                <project-link
                  label="Bootstrap"
                  to="https://getbootstrap.com/docs/3.3"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Stylelint"
                  to="https://stylelint.io/"/>
                <project-link
                  label="CSS Animations"
                  to="https://www.w3schools.com/css/css3_animations.asp"/>
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
  import ProjectLink from '@/components/ProjectLink'

  export default {
    name: 'SectionProjects',
    components: { ProjectLink, AppPost, AppImage, TitleSection, AppLink },
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

  &__preview {
    margin-right: var(--gutter-xs);
    font-size: 14px;
  }
}
</style>
