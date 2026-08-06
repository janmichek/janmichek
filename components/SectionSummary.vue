<script setup>
import { portfolio } from '~/data/portfolio'
</script>

<template>
  <section class="summary">
    <div class="u-container">
      <title-section
        variant="primary"
        data-aos="fade-up">
        Summary
      </title-section>
      <p
        class="summary__text"
        data-aos="fade-up">
        {{ portfolio.summary }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.summary {
  background: var(--ui-primary);

  &__text {
    max-width: 52rem;
    margin: 0 auto;
    text-align: center;
    font-size: var(--text-lg);
    line-height: 1.6;

    @media (--tablet) {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
