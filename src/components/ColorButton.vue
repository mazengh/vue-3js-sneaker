<template functional>
  <button class="color-button" v-on="listeners" :class="[data.class, data.staticClass]"></button>
  <!-- :class="[data.class, data.staticClass]" -->
</template>

<script>
export default {
  name: 'color-button',
};
</script>

<style lang="postcss">
.color-button {
  @apply p-4 outline-none rounded transition-all duration-500 ease-in-out transform;
  &:hover {
    @apply outline-none transition-all duration-500 ease-in-out scale-110;
  }
  &:focus {
    @apply outline-none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }

  & + & {
    @apply ml-2;
  }
}
</style>
