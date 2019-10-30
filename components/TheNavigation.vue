<template>
  <nav class="the-navigation">
    <div class="u-container">
      <div class="u-flex-row">
        <div class="u-5/12@tablet the-navigation__avatar">
          <img
            class="the-navigation__image"
            src="../assets/images/janmichek.jpg"
            width="230"
            alt="Jan Michek's avatar">
        </div>
        <div class="u-7/12@tablet the-navigation__content">
          <h1 class="the-navigation__heading">
            Jan Michek
          </h1>
          <h2 class="the-navigation__subheading">
            frontend developer
          </h2>
          <div class="the-navigation__excerpt">
            13.7.1987 / Karlovy Vary
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TheNavigation',
  }

</script>

<style scoped>
  .the-navigation {
    padding: var(--gutter-xl);
    background: var(--brand-secondary);
    width: 100%;
    margin-bottom: var(--gutter-section);
    z-index: 900;

    &__avatar {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: var(--gutter);

      @media (--tablet) {
        justify-content: flex-start;
        margin-bottom: 0;
      }
    }
    &__content {
      width: 100%;
    }

    &__heading {
      text-align: center;
      font-size: 56px;

      @media (--mobile) {
        font-size: 72px;
      }
    }

    &__subheading {
      text-align: center;
      color: var(--brand-primary);
    }

    &__excerpt {
      text-align: center;
      color: var(--text-color-secondary);
      font-size: 32px;
    }
  }
</style>
