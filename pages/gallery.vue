<template>
  <article class="gallery">
    <div class="layout__content u-flex-row u-center">
      <div class="u-2/3@tablet">
        <div class="u-container">
          <section>
            <title-slug
              title="Photo Gallery"
              description="I like shooting photography too. Especially flowers. Here is a small presentation of my esthetics skills. I am using them as placeholder images when building new app."/>
          </section>
        </div>
      </div>
    </div>
    <section>
      <app-swiper
        carousel-id="carousel"
        :images="images"/>
    </section>
  </article>
</template>

<script>
  import AppSwiper from '../components/AppSwiper'
  import TitleSlug from '../components/TitleSlug'

  export default {
    components: { TitleSlug, AppSwiper },
    data () {
      return {
        images: [
          {
            medium: 'k1.jpg',
            altText: 'Galanthus nivalis - Žižkov',
          },
          {
            medium: 'k2.jpg',
            altText: 'Philadelphus indorus - Křivoklátsko',
          },
          {
            medium: 'k3.jpg',
            altText: 'Canna indica - Puerto de la Cruz',
          },
          {
            medium: 'k4.jpg',
            altText: 'Prunus mahaleb - Žižkov',
          },
          {
            medium: 'k5.jpg',
            altText: 'Pelargonium graveolens - Las Playitas',
          },
          {
            medium: 'k6.jpg',
            altText: 'Nerium oleander - Monopoli',
          },
          {
            medium: 'k7.jpg',
            altText: 'Bougainvillea spectabilis - Puerto de la Cruz',
          },
          {
            medium: 'k8.jpg',
            altText: 'Prunus spinosa - Žižkov',
          },
          {
            medium: 'k9.jpg',
            altText: 'Pancratium maritimum - Praia da Comporta',
          },
          {
            medium: 'k10.jpg',
            altText: 'Delosperma cooperi - Žižkov',
          },
          {
            medium: 'k11.jpg',
            altText: 'Myrtus communis - Monopoli',
          },
          {
            medium: 'k12.jpg',
            altText: 'Pelargonium graveolens - Albertov',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .gallery {
    padding: var(--gutter-xxl) 0;
  }
</style>
