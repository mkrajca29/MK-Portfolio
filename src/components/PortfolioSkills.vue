<template>
  <article class="bg-base_brown py-10 lg:pb-0 sm:pt-5 sm:px-5">
    <p class="text-4xl font-bold text-base_green my-4 underline" style="text-underline-offset: 5px;">{{title}}</p>
    <div class="container grid md:grid-cols-2 mx-auto"> 
      <div class="flex justify-center md:items-start md:justify-self-end md:w-368 lg:w-448">
        <PortfolioSkillElement :percent="90" :skill="'html'" :label="'HTML (4Y)'" class="m-2 sm:mx-5" />   
        <PortfolioSkillElement :percent="85" :skill="'css'" :label="'CSS (4Y)'" class="m-2 sm:mx-5" />
        <PortfolioSkillElement :percent="75" :skill="'javascript'" :label="'JAVASCRIPT (3Y)'" class="m-2 sm:mx-5" />
      </div>
      <div class="flex justify-center items-center md:justify-self-start md:w-368 lg:w-448">
        <PortfolioSkillElement :percent="45" :skill="'angular'" :label="'ANGULAR (1Y)'" class="m-2 sm:mx-5" />   
        <PortfolioSkillElement :percent="75" :skill="'vuejs'" :label="'VUE.JS (2Y)'" class="m-2 sm:mx-5" />   
        <PortfolioSkillElement :percent="65" :skill="'nuxtjs'" :label="'NUXT.JS (1Y)'" class="m-2 sm:mx-5" />
      </div>
      <div class="flex justify-center md:items-start md:justify-self-end md:w-368 lg:w-448">
        <PortfolioSkillElement :percent="80" :skill="'tailwind'" :label="'TAILWIND (1Y)'" class="m-2 sm:mx-5" />
        <PortfolioSkillElement :percent="60" :skill="'bootstrap'" :label="'BOOTSTRAP (1Y)'" class="m-2 sm:mx-5" />
        <PortfolioSkillElement :percent="70" :skill="'figma'" :label="'FIGMA (1Y)'" class="m-2 sm:mx-5" />
      </div>
      <div class="flex justify-center items-center md:justify-self-start md:w-368 lg:w-448">
        <PortfolioSkillElement :percent="80" :skill="'servicenow'" :label="'SERVICENOW (1Y)'" class="m-2 sm:mx-5" />   
        <PortfolioSkillElement :percent="60" :skill="'github'" :label="'GITHUB (2Y)'" class="m-2 sm:mx-5" />   
        <PortfolioSkillElement :percent="40" :skill="'firebase'" :label="'FIREBASE (1Y)'" class="m-2 sm:mx-5" />
      </div>
    </div>
    <div class="container lg:bg-base_brown_hover rounded-t-2xl py-4 mx-auto lg:max-w-4xl mt-4">        
      <p class="text-justify px-5 text-base_light">{{text}}</p>
    </div>
  </article>
</template>

<script>
import PortfolioSkillElement from '@/components/PortfolioSkillElement.vue'
export default {
  name: "Skills",
  components: {
    PortfolioSkillElement
  },
  props: ["title", "text"]
};
</script>

