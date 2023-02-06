<script>
export default {
  props: {
    icon: {
      required: true,
    },
    alt: {
      type: String,
    },
    width: {
      type: Number,
    },
  },
};
</script>

<template>
  <div>
    <img
      class="min-w-[41px]"
      :src="`src/assets/icons/${icon}`"
      :alt="`${alt}`"
      :width="width"
    />
  </div>
</template>
