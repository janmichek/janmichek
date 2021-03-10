<template>
  <div class="swiper">
    <div
      id="carouselId"
      class="swiper-external-wrapper">
      <div v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div
            v-for="(image, key) in images"
            :key="key"
            class="swiper-slide">
            <app-image
              :image="`${image.medium}`"
              :alt="image.altText"/>
            <div class="swiper__caption">
              {{ image.altText }}
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-navigation swiper-navigation-prev"/>
      <div class="swiper-navigation swiper-navigation-next"/>
    </div>
  </div>
</template>

<script>
  import AppImage from './AppImage'

  export default {
    name: 'AppSwiper',
    components: { AppImage },
    props: {
      images: {
        type: Array,
        required: true,
      },
      carouselId: {
        type: String,
        required: true,
      },
      options: {
        type: Object,
        default: null,
      },
    },
    computed: {
      swiperOptions () {
        const defaultOptions = {
          grabCursor: true,
          loop: true,
          spaceBetween: 24,
          navigation: {
            nextEl: '#carouselId .swiper-navigation-next',
            prevEl: '#carouselId .swiper-navigation-prev',
            disabledClass: 'swiper-navigation--disabled',
          },
          pagination: {
            el: `#${this.carouselId} .swiper-pagination`,
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet--active',
          },
        }

        return this.options ? { ...defaultOptions, ...this.options } : defaultOptions
      },
    },
  }
</script>

<style>
  .swiper {
    &-external-wrapper {
      position: relative;
      height: auto;
      padding: 0;
      box-sizing: border-box;

      @media (--tablet) {
        padding: 0 54px;
      }

      @media (--desktop) {
        padding: 0 108px;
      }
    }

    &-wrapper {
      width: 100%;
    }

    &-slide {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    &-navigation {
      position: absolute;
      top: calc(50% - 25px);
      z-index: 9;
      cursor: pointer;
      display: none;

      &:focus {
        outline: none;
      }

      @media (--tablet) {
        display: block;
      }

      &-prev {
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 30px 15px 0;
        border-color: transparent var(--brand-primary) transparent transparent;
        @media (--tablet) {
          left: var(--gutter);
        }
      }

      &-next {
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 0 15px 30px;
        border-color: transparent transparent transparent var(--brand-primary);
        @media (--tablet) {
          right: var(--gutter);
        }
      }

      &--disabled {
        opacity: 0.2;
      }
    }

    &__caption {
      text-align: center;
    }

  }
</style>
