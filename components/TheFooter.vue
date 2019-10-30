<template>
  <nav class="the-footer">
    <div class="u-container">
      <h3 class="the-footer__heading">
        Contact
      </h3>

      <div class="u-flex-row">
        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="mailto:jan@janmichek.cz">
            jan@janmichek.cz
          </app-link>
        </div>
        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">

          <app-link
            class="the-footer__link"
            target="_blank"
            to="https://cz.linkedin.com/in/jan-michek-aba913103">
            Linked In
          </app-link>
        </div>

        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">

          <app-link
            class="the-footer__link"
            target="_blank"
            to="https://github.com/janmichek/">
            Github
          </app-link>
        </div>

        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">

          <app-link
            class="the-footer__link"
            target="_blank"
            to="https://www.facebook.com/honej">
            Facebook
          </app-link>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
  import AppLink from '../components/AppLink'

  export default {
    name: 'TheFooter',
    components: { AppLink },
  }
</script>

<style scoped>
  .the-footer {
    padding: var(--gutter-xl) 0;
    text-align: center;
    @media (--mobile) {
      text-align: left;
    }
    &__link {
      font-size: 22px;
      color: var(--brand-secondary);
      &:hover {
        color: var(--text-color);
      }
    }
    &__link-wrap {
      width: 100%;
      text-align: center;
      margin-bottom: var(--gutter-sm);
    }
  }
</style>
