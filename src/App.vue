<template>
  <div id="app">
    <sneaker />
  </div>
</template>

<script>
import Sneaker from './components/Sneaker';

export default {
  name: 'App',
  components: {
    Sneaker,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
