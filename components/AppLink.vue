<template>
  <nuxt-link
    v-if="isLocalLink(to)"
    :to="to"
    class="link"
    active-class="is-active"
    exact-active-class="is-exact-active">
    <slot/>
  </nuxt-link>
  <a
    v-else
    :rel="isOpenedInNewTab ? 'noopener noreferrer' : false"
    :target="target"
    :href="to"
    class="link">
    <slot/>
  </a>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  target: {
    type: String,
    default: '_blank',
  },
})

const isOpenedInNewTab = computed(() => props.target === '_blank')

function isLocalLink(url) {
  return url.charAt(0) === '/'
}
</script>

<style scoped>
.link {
  display: inline-flex;
}
</style>
