<script>
// component accepts image file as props
export default {
  name: "HeroComponent",
  props: ["image"],
};
</script>

<template>
  <img :src="`src/assets/images/${image}`" :alt="image" />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
