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
          <a href="https://github.com/mkrajca29/GridPainter" target="_blank" class="bg-base_green hover:bg-base_dark_hover active:bg-base_dark_hover cursor-pointer text-base_dark hover:text-white font-bold mr-4 py-1 px-4 rounded-2xl">GITHUB</a>
          <a href="https://mkrajca29.github.io/GridPainter/" target="_blank" class="bg-base_dark hover:bg-base_dark_hover cursor-pointer text-white border-2 border-base_green font-bold py-1 px-4 rounded-2xl">DEMO</a>
        </div>
        <div class="flex flex-row flex-wrap mb-4">
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">VUE.JS</div>
          <div class="bg-base_light text-base_black font-bold mr-2 mb-2 py-1 px-4 rounded-2xl text-xs">TAILWIND</div>
        </div>
      </section>
      <section class="flex flex-col md:w-368 lg:w-448 mx-auto md:mx-0 justify-center md:justify-self-start">
        <PortfolioGridPainterLogic :key="index" class="on-load self-center" :speed="speed" GridColor="#312929" Gap="1" />
        <div class="flex justify-center mb-10">
          <img src="@/assets/gear_light.svg" alt="settings" class="w-10 md:w-8 mr-2">
            <button @click="reRender()" class="flex justify-center items-center w-10 h-10 md:w-8 md:h-8 rounded-full bg-base_green hover:bg-base_light active:bg-base_light cursor-pointer mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-counterclockwise w-5 h-5 text-base_dark" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
              </svg>
            </button>
            <button @click="speedDown()" class="flex justify-center items-center w-10 h-10 md:w-8 md:h-8 rounded-full bg-base_green hover:bg-base_light active:bg-base_light cursor-pointer mr-2"><span class="text-3xl">-</span></button>
            <div class="flex flex-col justify-center items-center mr-2">
              <img src="@/assets/speed.svg" alt="speed" class="w-10 md:w-8">
              <div class="flex">
                <span :class="{'active': setSpeedClass(2)}" class="w-1 h-1 bg-base_light mr-1"></span>
                <span :class="{'active': setSpeedClass(4)}" class="w-1 h-1 bg-base_light mr-1"></span>
                <span :class="{'active': setSpeedClass(6)}" class="w-1 h-1 bg-base_light mr-1"></span>
                <span :class="{'active': setSpeedClass(8)}" class="w-1 h-1 bg-base_light mr-1"></span>
                <span :class="{'active': setSpeedClass(10)}" class="w-1 h-1 bg-base_light"></span>
              </div>
            </div>
            <button @click="speedUp()" class="flex justify-center items-center w-10 h-10 md:w-8 md:h-8 rounded-full bg-base_green hover:bg-base_light active:bg-base_light cursor-pointer"><span class="text-3xl">+</span></button>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import PortfolioGridPainterLogic from '@/components/PortfolioGridPainterLogic.vue'
export default {
  name: 'Grid Painter',
  components: {
    PortfolioGridPainterLogic
  },
  data() {
     return {
        index: 1,
        speed: 5
     }
  },
  props: ["title", "text"],
  methods: {
     reRender(){
        this.index++
     },
     speedUp() {
       if(this.speed < 10) {
        this.speed += 2;
       }
       this.reRender();
     },
     speedDown() {
       if(this.speed > 1) {
         this.speed -= 2;
       }
       this.reRender();
     },     
     setSpeedClass(value) {
       return this.speed > value;
     }
   }
}
</script>

<style scoped>
.active {
  background-color: #4bb483;}
</style>