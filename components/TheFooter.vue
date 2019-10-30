<template>
  <nav class="the-footer">
    <div class="u-container">
      <h3 class="the-footer__heading">
        Contact
      </h3>

      <div class="the-footer__content">
        <app-link
          class="the-footer__link"
          to="mailto:jan@janmichek.cz">
          jan@janmichek.cz
        </app-link>
        <app-link
          class="the-footer__link"
          target="_blank"
          to="https://cz.linkedin.com/in/jan-michek-aba913103">
          Linked In
        </app-link>
        <app-link
          class="the-footer__link"
          target="_blank"
          to="https://github.com/janmichek/">
          Github
        </app-link>
        <app-link
          class="the-footer__link"
          target="_blank"
          to="https://www.facebook.com/honej">
          Facebook
        </app-link>
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

    &__content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

    }

    &__link {
      white-space: nowrap;
      padding: 0 var(--gutter);

    }
  }
</style>
