<template>
  <div>
    <h3 class="skills__heading">
      My skillset
    </h3>
    <div class="skills__row">
      <div class="skills__name">
        Vue
      </div>
      <p class="skills__description">
        Simple, effective, joy to program. The best JS framework I had a opportunity to work with.
        I mean React is good, but Vue is cool.
      </p>
    </div>
    <div class="skills__row">
      <div class="skills__name">
        CSS
      </div>
      <p class="skills__description">
        From designing modular system through animations tuning to browser compatibility,
        let me develop and take care of app styles.
      </p>
    </div>
    <div class="skills__row">
      <div class="skills__name">
        UI
      </div>
      <p class="skills__description">
        I love to bridge computer code with human perception.
        “Don’t let users think” is my motto above all the work I do.
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'AppSkills',
  }
</script>

<style>
  .skills {
    &__heading {
      text-align: center;
      @media (--tablet) {
        text-align: left;
      }
    }
    &__row {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (--tablet) {
        flex-direction: row;
      }
      &:not(:last-of-type) {
        margin-bottom: var(--gutter-lg);
      }
    }

    &__name {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--brand-secondary);
      font-size: 40px;
      text-align: center;
      min-width: 120px;
      line-height: 1;
      margin-bottom: var(--gutter);
      @media (--tablet) {
        margin-bottom: 0;
      }
    }

    &__description {
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
</style>
