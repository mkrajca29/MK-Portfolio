<template>
    <div class="mb-4 mx-2">
        <input type="checkbox" :style="`background-color: ${color} `" :class="{ activeClass : index == clickedID }" class="block w-10 h-10 md:w-8 md:h-8 rounded-full border-4 appearance-none cursor-pointer size"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    props: ["color","index","clickedID"]
}
</script>

<style scoped>
.size:hover {
    transform: scale(1.2);
}
.activeClass {
border-color: #312929;
}

</style>