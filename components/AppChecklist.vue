<template>
  <ul>
    <li
      v-for="(item, id) in list"
      :key="id">
      <input
        :id="`checkbox-${id}`"
        type="checkbox"
        class="checklist__checkbox">
      <label
        class="checklist__label"
        :for="`checkbox-${id}`">
        {{ item }}
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'AppChecklist',
    props: {
      list: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .checklist__checkbox:checked {
    color: var(--brand-primary);
  }
  .checklist__checkbox:checked ~ .checklist__label {
    text-decoration: line-through;
    color: var(--brand-primary);
  }
</style>
