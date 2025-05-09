<template>
  <section class="skills">
    <div class="u-container">
      <title-section theme="primary">
        My skillset
      </title-section>
      <div class="skills__row">
        <div class="skills__name skills__name--web3">
          Web3
        </div>
        <p class="skills__description">
          Let me translate overwhelming technical complexity into smooth and modern web app which is intuitive to use.
        </p>
      </div>
      <div class="skills__row">
        <div class="skills__name">
          UI
        </div>
        <p class="skills__description">
          I love to bridge computer code with human perception.
          “Don’t let users think” is my ultimate motto. I live on the front side of frontend.
        </p>
      </div>
      <div class="skills__row">
        <div class="skills__name">
          Vue
        </div>
        <p class="skills__description">
          Simple, effective and joy to code. The best JS framework I had an opportunity to work with.
          I mean React is good, but Vue is cool.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style>
.skills {
  background: var(--brand-primary);

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
    font-family: var(--font-family-heading);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-secondary);
    font-size: 40px;
    text-align: center;
    min-width: 118px;
    line-height: 1;
    margin-bottom: var(--gutter-sm);

    @media (--tablet) {
      margin-bottom: 0;
    }

    &--web3 {
      @media (--tablet) {
        font-size: 28px;
      }
    }
  }

  &__description {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (--tablet) {
      text-align: left;
    }
  }
}
</style>
