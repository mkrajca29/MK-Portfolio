<template>  
    <article class="flex justify-center bg-base_green py-10">
    <div class="container grid md:grid-cols-2">   
      <AsyncPortfolio3DConfigViewer /> 
      <section class="flex flex-col lg:bg-base_green_hover rounded-2xl justify-center md:items-start justify-self-start p-2 mx-2 md:max-w-md px-5">
        <div class="flex items-center w-full justify-between">
          <p class="text-4xl font-bold text-base_dark mt-4">{{title}}</p> 
          <div class="hidden lg:block w-6 h-6 bg-base_green rounded-full mx-2 border border-white"></div>       
        </div>
        <p class="text-justify xl:self-center text-base_black mt-3">{{text}}</p>
        <div class="flex flex-row flex-wrap mt-4">
          <div class="bg-base_dark text-white font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">VUE.JS</div>
          <div class="bg-base_dark text-white font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">THREE.JS</div>
          <div class="bg-base_dark text-white font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">TAILWIND</div>
        </div>
      </section>      
    </div>
  </article>

</template>

<script>
import { defineAsyncComponent } from "vue";
const AsyncPortfolio3DConfigViewer = defineAsyncComponent(() => import(/* webpackChunkName: "Portfolio3DConfigViewer" */ "./Portfolio3DConfigViewer.vue"));

export default {
  components: {
      AsyncPortfolio3DConfigViewer,
  },
  data() {
    return {
    }
  },
  props: ["title", "text"]

};
</script>
