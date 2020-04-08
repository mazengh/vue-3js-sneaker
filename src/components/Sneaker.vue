<template>
  <div class="sneaker">
    <h1>Sneaker!</h1>
    <sneaker-display class="sneaker__display sm:w-7/12 sm:mx-0" />
    <sneaker-options class="mt-3" />
  </div>
</template>

<script>
import SneakerDisplay from '@/components/SneakerDisplay';
import SneakerOptions from '@/components/SneakerOptions';

export default {
  name: 'sneaker',
  components: {
    SneakerDisplay,
    SneakerOptions,
  },
};
</script>

<style lang="postcss">
.sneaker {
  @apply flex flex-wrap w-full max-w-6xl m-auto;

  & h1 {
    @apply w-full text-6xl text-blue-500 italic my-6 tracking-wide;
    text-shadow: 0 1px 0 theme('colors.gray.300'), 0 2px 0 theme('colors.gray.400'),
      0 3px 0 theme('colors.gray.500'), 0 4px 0 theme('colors.gray.600'), 0 5px 0 theme('colors.gray.700'),
      0 6px 0 theme('colors.gray.600'), 0 8px 7px rgba(0, 0, 0, 0.1), 0 9px 10px rgba(0, 0, 0, 0.1);
  }
  &__display {
    @apply relative mx-auto w-11/12;
    min-width: 20rem;
  }
}
</style>
