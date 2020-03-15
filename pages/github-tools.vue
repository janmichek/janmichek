<template>
  <article class="tools">
    <section>
      <title-slug
        title="Github Tools"
        description="Awesome Github tools and standards I hold in my Git workflow. I use them to make
        collaboration joy for everyone."/>
    </section>

    <section class="tools__section">
      <h3 class="h4 tools__subtitle">
        Side-by-side comparison
      </h3>
      <p class="tools__paragraph">
        Leaving all doubts behind and show the differences before and after implementation.
      </p>
      <img
        src="../assets/images/gh3.jpg?webp"
        alt="">
    </section>

    <section class="tools__section">
      <h3 class="h4 tools__subtitle">
        Github Projects
      </h3>
      <p class="tools__paragraph">
        Make progress of my work visible to me and all of my co-workers. Automatically. No hands.
      </p>
      <img
        src="../assets/images/gh1.jpg?webp"
        alt="">
    </section>

    <section class="tools__section">
      <h3 class="h4 tools__subtitle">
        Screen recordings
      </h3>
      <p class="tools__paragraph">
        Sometimes the picture is not enough, especially when describing complex user interactions.
      </p>
      <div class="tools__image-wrap">
        <img
          class="tools__image"
          src="../assets/images/gh2.gif"
          alt="">
      </div>
    </section>

    <section class="tools__section">
      <h3 class="h4 tools__subtitle">
        Checklist
      </h3>
      <p class="tools__paragraph">
        Good old checkbox style. I am always make them as a response to requested code reviews.
      </p>
      <img
        src="../assets/images/gh4.jpg?webp"
        alt="">
    </section>
  </article>
</template>

<script>
  import TitleSlug from '../components/TitleSlug'

  export default {
    components: { TitleSlug },
    layout: 'slug',
  }
</script>

<style scoped>
  .tools {
    &__section {
      padding-bottom: var(--gutter-xxl);
    }

    &__subtitle {
      color: var(--brand-primary);
    }

    &__paragraph {
      margin-bottom: var(--gutter-sm);
    }

    &__image-wrap {
     overflow: hidden;
    }

    &__image {
      position: relative;
      left: 2px;
      top: 2px;
    }
  }
</style>
