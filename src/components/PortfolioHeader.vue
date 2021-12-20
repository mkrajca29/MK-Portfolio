<template>
  <header class="mx-auto flex justify-center bg-base_green pt-10 px-5">
        <div class="container grid md:grid-cols-2">    
          <section class="flex lg:bg-base_green_hover rounded-t-3xl flex-col justify-center items-center lg:justify-self-end mx-2 order-last md:order-first md:max-w-md md:w-368 lg:w-448">
            <h1 class="text-3xl sm:text-4xl font-bold text-left text-base_brown">Ing. Martin Krajča</h1>
            <p class="text-base_black sm:text-left">{{text}}</p>
            <a @click="switchLanguage" class="border-2 border-base_dark hover:bg-base_dark_hover cursor-pointer text-base_black hover:text-white font-bold py-1 px-4 sm:w-1/2 my-8 rounded-2xl">{{languageText}}</a>   
          </section>  
          <section class="flex flex-col justify-center items-center md:items-start md:justify-self-start mx-2 md:max-w-md">
            <img src="@/assets/avatar.png" alt="avatar">
          </section>      
        </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  props: ["languageText", "language", "text"],
  emits: ["language"],
  methods: {
      switchLanguage() {
        this.$emit("language", this.language);
      }
  }
}
</script>

