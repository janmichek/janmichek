<template>
  <section class="projects">
    <div class="u-container">
      <title-section>Recent projects</title-section>

      <div class="projects__content">
        <app-post>
          <template #heading>
            aeScan.io
          </template>
          <template #image>
            <app-link to="https://aescan.io/">
              <img
                src="/aescan.jpg"
                :width="686"
                alt="aescan">

            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/aescan">
              Preview
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                Blockchain explorer which is enabling users to dive into details of aeternity blockchain.
                To educate our users there I added plenty of contextual hints which explains different
                aspects of blockchain.
              </li>
              <li>
                <app-link
                  to="https://github.com/aeternity/aescan/"
                  target="_blank">
                  Open source
                </app-link>
                , feature-rich blockchain explorer aggregating data from multiple sources.
                Vast majority of the code is written by me so don't hesitate to explore it. I got a strong
                responsibility and autonomy over decision about the app.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Nuxt 3"
                  to="https://nuxt.com/"/>
                <project-link
                  label="Typescript"
                  to="https://www.typescriptlang.org/"/>
                <project-link
                  label="aepp SDK"
                  to="https://sdk.aeternity.io/latest/"/>
                <project-link
                  label="Cypress"
                  to="https://www.cypress.io/"/>
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
                  label="Plausible"
                  to="https://plausible.io/"
                  is-last/>
              </li>
            </ul>
          </template>
        </app-post>

        <app-post>
          <template #heading>
            PWN
          </template>
          <template #image>
            <app-link to="http://pwn.finance">
              <img
                src="/pwn.jpg"
                :width="686"
                alt="Chabot Builder">
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/pwn1">
              Preview 1
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/pwn2">
              Preview 2
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                The first web3 dapp I have been working on. Basically, it's a pawnshop for NFTs. The frontend part wraps
                user interactions with wallet, contracts, and communication with backend.
              </li>
              <li>
                I was collaborating on designing visuals and UX as well as coding the result.
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
                  label="Ethers.js"
                  to="https://docs.ethers.io/v5/"/>
                <project-link
                  label="Alchemy"
                  to="https://www.alchemy.com/"/>
                <project-link
                  label="Moralis"
                  to="https://moralis.io/"/>
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
            <app-link to="https://www.nice.com/websites/cxone-next-gen-cx/">
              <img
                src="/chatbot.jpg"
                :width="686"
                alt="Chabot Builder">
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/chatbot1">
              Preview 1
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/chatbot2">
              Preview 2
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                This is a complex frontend for building pre-LLM era AI based chatbot delivered to
                <app-link to="https://www.nice.com/websites/cxone-next-gen-cx/">
                  industry leader of telemarketing.
                </app-link>
                .
                App offers an innovative approach to build conversations between user and bot.
              </li>
              <li>
                My role was to code whole frontend, participate on creating user flows based and overall product vision.
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.projects {
  &__content {
    margin: 0 var(--gutter-sm);
  }

  &__project:not(:last-of-type) {
    margin-bottom: var(--gutter-xxl);
  }

  &__preview {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-right: var(--gutter-xs);
    font-size: 14px;
  }
}
</style>
