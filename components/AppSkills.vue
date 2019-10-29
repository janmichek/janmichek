<template>
  <div>
    <h3>
      My skillset
    </h3>
    <div class="skills__row">
      <div class="skills__name">
        Vue
      </div>
      <p class="skills__description">
        Simple, effective, joy to program. The best JS framework I had a opportunity to work with.
      </p>
    </div>
    <div class="skills__row">
      <div class="skills__name">
        UI
      </div>
      <p class="skills__description">
        I love to bridge the computer code with human perception. “Don’t let users think” is my motto above all the work.
      </p>
    </div>
    <div class="skills__row">
      <div class="skills__name">
        CSS
      </div>
      <p class="skills__description">
        From designing modular system to animations tuning, let me maintain and take care of app styles.
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
    &__row {
      display: flex;
      flex-direction: row;
    }

    &__name {
      color: var(--brand-secondary);
      font-size: 40px;
      text-align: center;
      size: 100px;
    }
  }
</style>
