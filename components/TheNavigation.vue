<template>
  <nav :class="['the-navigation',{'the-navigation--stacked': stacked}]">
    <div class="u-container">
      <div class="u-flex-row">
        <div :class="['u-5/12@tablet the-navigation__avatar',{'the-navigation__avatar--stacked': stacked}]">
          <img
            :class="['the-navigation__image',{'the-navigation__image--stacked': stacked}]"
            src="../assets/images/janmichek.jpg"
            alt="Jan Michek's avatar">
        </div>
        <div :class="['u-7/12@tablet the-navigation__content',{'the-navigation__content--stacked': stacked}]">
          <h1 :class="['the-navigation__heading',{'the-navigation__heading--stacked': stacked}]">
            Jan Michek
          </h1>
          <h2 :class="['the-navigation__subheading',{'the-navigation__subheading--stacked': stacked}]">
            frontend developer
          </h2>
          <div :class="['the-navigation__excerpt',{'the-navigation__excerpt--stacked': stacked}]">
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
    data () {
      return {
        stacked: false,
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      handleScroll () {
        const stackHeight = 1
        this.stacked = window.scrollY > stackHeight
      },
    },
  }

</script>

<style scoped>
  .the-navigation {
    padding: var(--gutter-xl);
    background: var(--brand-secondary);
    height: var(--header-height);

    position: fixed;
    width: 100%;
    margin-bottom: var(--gutter);
    z-index: 900;
    transition: all var(--normal);
    @media (--tablet){
      height: var(--header-height-desktop);
    }
    &--stacked {
      height: var(--header-height-slim);
      padding: var(--gutter-sm);
    }

    &__avatar {
      width: 100%;
      margin-right: 30px;
      display: flex;
      justify-content: center;
      transition: all var(--normal);

      @media (--tablet) {
        justify-content: flex-start;
      }

      &--stacked {
        width: auto;
        flex-basis: auto;
      }
    }
    &__content {
      width: 100%;
      transition: all var(--normal);

      &--stacked {
      width: auto;
      flex-basis: auto;
      }
    }

    &__image {
      transition: all var(--normal);
      height: 230px;
      &--stacked {
        height: 36px;
      }
    }

    &__heading {
      transition: all var(--normal);

      text-align: center;

      &--stacked {
        font-size: 28px;
        text-align: right;
      }
    }
    &__subheading {
      transition: all var(--normal);

      text-align: center;
      color: var(--brand-primary);
      &--stacked {
        display: none;
      }
    }
    &__excerpt {
      transition: all var(--normal);

      text-align: center;
      color: var(--text-color-secondary);
      font-size: 32px;
      &--stacked {
        display: none;
      }
    }
  }
</style>
