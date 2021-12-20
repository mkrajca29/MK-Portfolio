<template>
  <article class="mx-auto flex justify-center bg-base_green py-10 md:px-5">
    <div class="container grid md:grid-cols-2">    
      <section class="flex justify-center lg:justify-self-end mx-2 order-last md:order-first md:max-w-md md:w-368 lg:w-448">
        <img src="@/assets/my_story.png" alt="My Story Scheme" class="p-5 w-96 md:max-w-sm">
      </section>     
      <section class="flex flex-col lg:bg-base_green_hover rounded-2xl justify-center md:items-start justify-self-start p-2 px-5 mx-2 md:max-w-md">
        <div class="flex items-center w-full justify-between">
          <p class="text-4xl font-bold text-base_dark mt-4">{{title}}</p> 
          <div class="hidden lg:block w-6 h-6 bg-base_green rounded-full mx-2 border border-white"></div>       
        </div>
        <p class="text-justify xl:self-center text-base_black mt-3">{{text}}</p>
      </section>      
    </div>
  </article>
</template>

<script>
export default {
  name: "MyStory",
  props: ["title", "text"]
};
</script>
