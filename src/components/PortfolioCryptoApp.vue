<template>
  <article class="flex justify-center bg-base_brown py-10 md:px-5">
    <div class="container grid md:grid-cols-2">      

      <section class="flex lg:bg-base_brown_hover rounded-2xl flex-col justify-center md:items-start justify-self-end px-5 mx-2 md:max-w-md">        
        <div class="flex items-center mt-5 w-full justify-between">
          <p class="text-4xl font-bold text-base_green">{{title}}</p>
          <div class="hidden lg:block w-6 h-6 bg-base_brown rounded-full mx-2 border border-base_light"></div>       
        </div>
        <p class="text-justify xl:self-center text-base_light mt-3">{{text}}</p>
        <div class="flex items-center flex-row mt-4 mb-8">
          <a href="https://github.com/mkrajca29/CryptoApp" target="_blank" class="bg-base_green hover:bg-base_dark_hover active:bg-base_dark_hover cursor-pointer text-base_dark hover:text-white font-bold mr-4 py-1 px-4 rounded-2xl">GITHUB</a>
          <a href="https://mkrajca29.github.io/CryptoApp/#/" target="_blank" class="bg-base_dark hover:bg-base_dark_hover cursor-pointer text-white border-2 border-base_green font-bold py-1 px-4 rounded-2xl">DEMO</a>
        </div>
        <div class="flex flex-row flex-wrap mb-4">
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">VUE.JS</div>
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">VUEX</div>
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">TAILWIND</div>
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">API</div>
        </div>
      </section>
      <section class="flex justify-center items-center md:justify-self-start mx-2 md:w-368 lg:w-448">
        <img src="@/assets/crypto_app.png" alt="My Story Scheme" class="w-80 lg:w-96 h-auto p-5 md:max-w-sm" style="height: fit-content;">
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Skills',
  props: ["title", "text"]
}
</script>

