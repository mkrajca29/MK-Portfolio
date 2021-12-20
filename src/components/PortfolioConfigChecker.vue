<template>
<section class="flex flex-col mx-2">
  <div class="flex flex-row mb-1">
      <img :src="`${publicPath}icons/${imgL}.svg`" alt="" class="w-5 mr-1">
      <img :src="`${publicPath}icons/${imgR}.svg`" alt="" class="w-5">
  </div>
  <div class="mx-auto relative inline-block w-8 mr-1 align-middle select-none transition duration-200 ease-in mb-4">
      <input type="checkbox" v-model="data" @click="switchButton" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-base_green hover:bg-base_dark border-4 appearance-none cursor-pointer"/>
      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-base_brown cursor-pointer"></label>
  </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    props: ["data","imgL","imgR"],
    emits: ["clicked"],
    methods: {
      switchButton() {
        this.$emit("clicked", JSON.parse(!this.data));
      }
    }
}
</script>

<style scoped>
  .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #FFFFFF;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #312929;
  }
</style>