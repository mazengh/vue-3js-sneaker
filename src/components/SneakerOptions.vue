<template>
  <div class="sneaker-options">
    <p class="flex justify-start font-bold w-full px-5">
      Cube color:
    </p>
    <div class="flex flex-row flex-wrap justify-start px-6">
      <color-btn class="bg-blue-400" @click="setCubeColor(0x63b3ed)" />
      <color-btn class="bg-green-700" @click="setCubeColor(0x2f855a)" />
      <color-btn class="bg-red-600" @click="setCubeColor(0xe53e3e)" />
      <color-btn class="bg-pink-400" @click="setCubeColor(0xf687b3)" />
    </div>

    <p class="flex justify-start font-bold w-full px-5 mt-6">
      Shoe color:
    </p>
    <div class="flex flex-row flex-wrap justify-start px-6">
      <color-btn class="bg-green-700" @click="setShoeProperty('shoeMeshColors', 0x2f855a)" />
      <color-btn class="bg-red-600" @click="setShoeProperty('shoeMeshColors', 0xe53e3e)" />
      <color-btn class="sneaker-options__random-btn" @click="setRandomShoeColor('shoeMeshColors')" />
      <color-btn class="border" @click="setShoeProperty('shoeMeshColors', 0xffffff)" />
    </div>

    <p class="flex justify-start font-bold w-full px-5 mt-6">
      Shoe texture:
    </p>
    <div class="flex flex-row flex-wrap justify-start px-6">
      <color-btn
        class="sneaker-options__texture-btn"
        @click="setShoeProperty('shoeMeshTextures', './shoe/textures/texture2.jpg')"
      />
      <color-btn class="border" @click="setShoeProperty('shoeMeshTextures')" />
    </div>
  </div>
</template>

<script>
import ColorBtn from '@/components/ColorButton';

export default {
  name: 'sneaker-options',
  components: { ColorBtn },
  methods: {
    setCubeColor(color) {
      this.$store.dispatch('setCubeColor', color);
    },
    setShoeProperty(propertyName, propertyValue = null) {
      this.$store.dispatch('setShoeProperty', {
        propertyName,
        meshName: 'mesh_0',
        propertyValue,
      });
    },
    setRandomShoeColor(propertyName) {
      const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      this.setShoeProperty(propertyName, randomHexColor);
    },
  },
};
</script>

<style lang="postcss">
.sneaker-options {
  &__texture-btn {
    background-image: url('../assets/images/texture2.jpg');
  }

  &__random-btn {
    background-image: linear-gradient(
      45deg,
      hsl(19, 67%, 54%),
      hsl(64, 67%, 54%),
      hsl(109, 67%, 54%),
      hsl(154, 67%, 54%),
      hsl(199, 67%, 54%),
      hsl(244, 67%, 54%),
      hsl(289, 67%, 54%),
      hsl(334, 67%, 54%)
    );
  }
}
</style>
