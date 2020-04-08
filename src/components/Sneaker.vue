<template>
  <div class="sneaker">
    <sneaker-display class="sneaker__display" />
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
  @apply flex w-full max-w-6xl m-auto;
  &__display {
    @apply relative w-7/12;
  }
}
</style>
