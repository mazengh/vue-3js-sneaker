<template>
  <div v-if="loading" class="lds-dual-ring"></div>
</template>

<script>
import EventBus from '@/event-bus';

export default {
  name: 'spinner',
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    setLoading(isLoading) {
      this.loading = isLoading;
    },
  },
  beforeMount() {
    EventBus.$on('loading', this.setLoading);
  },
};
</script>

<style></style>
