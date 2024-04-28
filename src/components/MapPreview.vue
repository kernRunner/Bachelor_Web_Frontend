<template>
    <div class="h-auto w-full flex justify-center mt-32">
        <div class="py-16 lg:py-16 md:py-16  mx-10 my-auto w-full max-w-6xl">
            <p class="font-[Oswald] font-bold text-4xl lg:text-4xl md:text-2xl text-secondaryColor text-center">Explore {{
                name }} Like Never Before</p>
            <p class="font-bold text-2xl mt-4 text-center">Navigate with Ease using Our Interactive Map</p>
            <p class="mt-6 text-sm text-center">Discover the incredible attractions of Otago on our interactive map! With
                our map feature, <br> exploring Otago has never been easier.</p>
            <RouterLink :to="{ name: 'map' }">
                <img src="@/assets/img/Map.png" class="rounded-[5px] mx-auto py-24 w-3/4" />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    }
})
</script>

<style></style>