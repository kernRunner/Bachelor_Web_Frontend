<template>
    <Disclosure as="nav" ref="navBar" id="navBar" class="fixed z-50 left-0 right-0 top-0 ease-in-out duration-100"
        :class="[navbarScrolled ? 'bg-white border-b border-lightgray' : '']" v-slot="{ open, close }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Mobile menu button-->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton @click="changeBgColor"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="black" class="block w-6 h-6" v-if="!open">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="black" class="block w-6 h-6" v-else>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </DisclosureButton>
                </div>

                <RouterLink @click="topFunction" :to="{ name: 'home' }"
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="@/assets/img/Logo.png" alt="Your Company" />
                    </div>
                </RouterLink>

                <div class="flex items-center justify-center sm:items-stretch sm:justify-end">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink href="#" @click="topFunction" :to="{ name: 'home' }"
                                class="rounded-md px-3 py-2 font-[SourceSansPro] text-lg font-semibold"
                                :class="[navbarScrolled ? 'text-black' : 'text-white']">
                                Home
                            </RouterLink>
                            <RouterLink @click="topFunction" :to="{ name: 'about' }"
                                class="rounded-md px-3 py-2 font-[SourceSansPro] text-lg font-semibold"
                                :class="[navbarScrolled ? 'text-black' : 'text-white']">
                                About
                            </RouterLink>
                            <RouterLink @click="topFunction" :to="{ name: 'favorite' }"
                                class="px-3 py-2 font-[SourceSansPro] text-lg font-semibold"
                                :class="[navbarScrolled ? 'text-black' : 'text-white']">
                                Favorites
                            </RouterLink>
                            <div class="relative inline-block text-left" @mouseover="openDropmenu()"
                                @mouseleave="openDropdown = false">
                                <div>
                                    <button
                                        class="bg-green-600 px-2 py-2 rounded-md font-[SourceSansPro] text-lg font-semibold"
                                        :class="[navbarScrolled ? 'text-black' : 'text-white']">
                                        Search
                                    </button>
                                </div>

                                <div v-if="openDropdown"
                                    class="absolute left-0 w-48 mt-0 ml-[-6px] origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg"
                                    @mouseover="openDropdown = true" @mouseleave="openDropdown = false">
                                    <div class="py-1">
                                        <RouterLink :to="{ name: 'home', params: { jumpId: 'destination' } }"
                                            class="block px-4 py-2 text-sm hover:text-secondaryColor">Destination
                                        </RouterLink>
                                        <!-- <RouterLink :to="{ name: 'home', params: { jumpId: 'accomodation' } }"
                                    class="block px-4 py-2 text-sm hover:text-secondaryColor">Accomodation
                      </RouterLink> -->
                                        <RouterLink :to="{ name: 'home', params: { jumpId: 'activity' } }"
                                            class="block px-4 py-2 text-sm text-black hover:text-secondaryColor">
                                            Activity
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <DisclosurePanel class="sm:hidden">
            <div class="px-2 pb-3 pt-2 relative inline-block pr-12 rounded-lg"
                :class="[navbarScrolled ? 'bg-white border-b border-lightgray' : '']">
                <RouterLink :to="{ name: 'home' }" class="block rounded-md px-3 py-2 text-base font-medium text-black"
                    @click="close">
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'about' }" class="block rounded-md px-3 py-2 text-base font-medium text-black"
                    @click="close">
                    About
                </RouterLink>
                <RouterLink :to="{ name: 'favorite' }"
                    class="block rounded-md px-3 py-2 text-base font-medium text-black" @click="close">
                    Favorite
                </RouterLink>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router'

const navigation = [
    { name: 'Activities', href: '#', current: false },
    { name: 'Accomodations', href: '#', current: false },
    { name: 'Favorites', href: '#', current: false },
]

const navbarScrolled = ref(false);
const openDropdown = ref(false);
const route = useRoute();

console.log(route.path)

watch(() => route.path, (newPath) => {
    console.log("Route changed to:", newPath);
    if (newPath == "/about" || newPath == "/favorite" || newPath == "/privacy") {
        navbarScrolled.value = true;
    } else {
        navbarScrolled.value = false;
    }
});

const BgOnTop = ref(false);

function updateNavbarOnScroll() {
    if (route.path == "/about" || route.path == "/favorite" || route.path == "/privacy") {
        navbarScrolled.value = true;
    } else {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        navbarScrolled.value = scrollTop > 60;
    }
}

function changeBgColor(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop <= 60){
        navbarScrolled.value = true;
    }
}

onMounted(() => {
    window.addEventListener('scroll', updateNavbarOnScroll);
    updateNavbarOnScroll();  // Ensure the initial state is correct
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateNavbarOnScroll);
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openDropmenu() {
    openDropdown.value = true;
}
</script>

<style scoped>
/* Add your custom styles here */
</style>