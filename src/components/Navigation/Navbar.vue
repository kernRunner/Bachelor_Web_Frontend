<template>
    <Disclosure as="nav" ref="navBar" id="navBar"
        class="bg-[#F5F5F5] fixed z-10 left-0 right-0 border-b-[0.5px] border-white ease-in-out duration-100"
        v-slot="{ open }">
        <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 relative"
                        alt="burger-menu">
                        <div>
                            <div :class="!open ? '' : 'mt-0 -rotate-45'"
                                class="relative w-8 h-[3px] rounded bg-primaryColor mt-0 duration-200"></div>
                            <div :class="!open ? '' : 'opacity-0 rotate-45'"
                                class="relative w-8 h-[3px] rounded bg-primaryColor mt-1.5 duration-200"></div>
                            <div :class="!open ? '' : 'mt-[-11.5px] rotate-45'"
                                class="relative w-8 h-[3px] rounded bg-primaryColor mt-1.5 duration-200"></div>
                        </div>
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <a href="/">
                            <img class="block h-10 w-auto lg:hidden" src="@/assets/img/Logo.png" alt="Distance Reacher" />
                            <img class="hidden h-10 w-auto lg:block" src="@/assets/img/Logo.png" alt="Distance Reacher" />
                        </a>
                        <div class="h-full border-l mx-4 border-black/40"></div>
                        <p class="px-2 py-2 font-semibold font-[SourceSansPro] text-lg text-[#444444]">
                            <!-- {{ nameValue.charAt(0).toUpperCase() + nameValue.substring(1) }}  -->
                            {{ name }}
                        </p>
                    </div>
                    <div class="hidden sm:mr-6 sm:flex w-full justify-end">
                        <div class="flex space-x-2 items-center justify-center">
                            <div class="relative">
                                <RouterLink :to="{ name: 'home' }"
                                    class="hover:border-b-2 border-[#c94930] px-2 py-2 font-semibold font-[SourceSansPro] text-[#444444] text-lg hover:text-primaryColor">
                                    <span>Home</span>
                                </RouterLink>
                            </div>

                            <!-- <div class="relative">
                                <RouterLink :to="{ name: 'map' }">
                                    <p>Map</p>
                                </RouterLink>
                            </div> -->
                            <div
                                class="relative hover:border-b-2 border-[#c94930] hover:text-primaryColor hover:mb-[-2px]">
                                <RouterLink :to="{ name: 'favorite' }" class="flex ">
                                    <p class=" px-2 py-2 font-semibold font-[SourceSansPro] text-[#444444] text-lg">
                                        <span>Favorites</span>
                                    </p>
                                    <div class="flex items-center">
                                        <div class="relative">
                                            <div v-if="counter.favorite.length != 0 && route.name != 'favorite'"
                                                class="bg-[#F5F5F5] w-4 h-4 absolute -right-2.5 -top-2 ">
                                                <p class="leading-none font-bold text-red pl-1 -mt-0 text-sm">{{ counter.favorite.length }}</p>
                                            </div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                :class="route.name === 'favorite' ? 'fill-red' : ' fill-none'">
                                                <path class="stroke-red"
                                                    d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </RouterLink>
                            </div>
                            <div class="relative pl-3 cursor-pointer" @click="openModal()">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path
                                        d="M18.375 18.375L13.8276 13.8276M13.8276 13.8276C15.0583 12.5968 15.7498 10.9276 15.7498 9.18701C15.7498 7.44647 15.0583 5.77721 13.8276 4.54645C12.5968 3.3157 10.9276 2.62427 9.18701 2.62427C7.44647 2.62427 5.77721 3.3157 4.54645 4.54645C3.3157 5.77721 2.62427 7.44647 2.62427 9.18701C2.62427 10.9276 3.3157 12.5968 4.54645 13.8276C5.77721 15.0583 7.44647 15.7498 9.18701 15.7498C10.9276 15.7498 12.5968 15.0583 13.8276 13.8276Z"
                                        stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3 bg-[#f8f9fa]">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="div"
                    :class="[item.current ? ' ' : 'text-gray-300 ', 'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray hover:text-white']"
                    :aria-current="item.current ? 'page' : undefined">
                    <p @click="jumpToId(item.href)" :aria-current="item.current ? 'page' : undefined">
                        {{ item.name }}
                    </p>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-20 " @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto ">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-black/40 backdrop-blur-sm">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-[15px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl max-h-[500px]">
                            <div class="bg-white ">
                                <searchBlog @modal="closeModal($event)"></searchBlog>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    {{ title }}
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useRoute, useRouter } from 'vue-router';
import { useAttractionStore } from '@/stores/favAttraction'
import searchBlog from '@/components/Navigation/Search.vue'
import { ref, computed, watch, onMounted } from 'vue';

const counter = useAttractionStore();
const open = ref(false)
const route = useRoute();
const title: any = ref("")

const props = defineProps({
    ids: { type: Array, required: true },
    nameValue: { type: String, required: true },
    openV: { type: Boolean }
});


const name = ref(route.params.name);



onMounted(() => {
    if (name.value == undefined) {
        name.value = 'Distance Reacher';
    } else {
        name.value = route.params.name;
    }
})


const navigation = [
    { name: 'Attractions', href: 'Attractions', current: false },
    { name: 'Discover', href: 'Discover', current: false },
    // { name: 'Accomodations', href: 'Attractions', current: false },
]

function jumpToId(id: any) {
    const element = document.getElementById(id);
    console.log(id);
    console.log(element);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function openModal() {
    open.value = true;
}
function closeModal(val: boolean) {
    open.value = val;
}

watch(() => props.openV, () => {
    open.value = true;
});

watch(() => route.params.name, () => {
    console.log(route.params.name);
    if (name.value == undefined) {
        name.value = 'Distance Reacher';
    } else {
        name.value = route.params.name;
    }
});

const router = useRouter();

const goBackOrRedirect = () => {
    if (window.history.length > 1) {
        console.log('1')
        window.history.back();
    } else {
        console.log('2')
        router.push({ name: 'otago' });
    }
};



</script>

<script scoped lang="ts">
export default {
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event: any) {
            this.scrollFunction();
        },
        scrollFunction() {
            var navBar: any = document.getElementById('navBar');

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                navBar.classList.add('scrollClass');
            } else {
                navBar.classList.remove('scrollClass');
            }
        }
    }
}
</script>

<style>
#toggle:checked+.hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 10px;
}

#toggle:checked+.hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
}

#toggle:checked+.hamburger .meat {
    transform: rotate(45deg);
    margin-top: -3px;
}

.scrollClass {
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
</style>