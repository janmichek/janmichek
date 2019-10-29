<template>
  <div class="u-container">
    <h1
      v-if="error.statusCode === 404"
      class="error__heading">
      Stránka nenalezena
    </h1>
    <h1
      v-else
      class="error__heading">
      Někde se stala chyba
    </h1>
    <div class="error__excerpt">
      Omlouváme se za způsobené potíže. Vraťte se prosím na hlavní stránku.
    </div>
    <div class="error__action">
      <app-link to="/">
        Vrátit se na hlavní stránku
      </app-link>
    </div>
  </div>
</template>

<script>
  import AppLink from '../components/AppLink'

  export default {
    components: {
      AppLink,
    },
    props: {
      error: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style>
  .error {
    &__heading {
      text-align: center;
    }
    &__excerpt {
      text-align: center;
      padding-bottom:var(--gutter-xl);
    }
    &__action {
      text-align: center;
      padding-bottom:var(--gutter-xl);
    }
  }
</style>
