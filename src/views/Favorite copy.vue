<template>
    <div class="overflow-x-hidden max-w-screen relative h-full min-h-[680px]" id="header">
        <svg width="2648" viewBox="0 0 2648 680" fill="none"
            class="fill-[#F5F5F5] absolute top-0 left-[-350px] sm:left-[-250px] 2xl:ml-[-1224px]  2xl:left-[50vw]">
            <path
                d="M383.5 608L0.5 0H270H2647.5C2647.5 0 2629.5 208 2550 286C2470.5 364 2294.5 411 2262.5 417C2230.5 423 1772 502.5 1772 502.5L1058.5 608C887.5 632.333 544.037 679 493 679C433 679 405.5 640 383.5 608Z" />
        </svg>
        <div class="h-auto w-full flex justify-center">
            <div class="pt-16 md:pt-32 lg:pt-44 pb-16 max-w-6xl mx-10 my-auto w-full">
                <div class="mt-16 relative grid grid-cols-2 ">
                    <div class="md:mt-0 mt-24 md:mb-0 mb-20 mr-8">
                        <p class="font-[Oswald] font-bold  text-gray text-4xl lg:text-4xl md:text-2xl">Your Personal
                            Collection of <span class="text-secondaryColor">Highlights</span></p>
                    </div>
                    <div class="imgAnimaton rounded-[25px] overflow-hidden">
                        <img src="@/assets/img/23.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-auto w-full  flex justify-center">
        <div class="py-16 max-w-6xl mx-10 my-auto flex flex-col justify-center w-full">
            <div class="w-full mt-10 flex flex-col my-32">
                <p class="text-4xl font-bold text-center">Discover and Create</p>
                <p class="text-2xl text-center my-4">Unleash the Magic of Your Own Personal Collection</p>
                <p class="text-center text-sm mx-12">Choose your travel favorites and embark on a journey of unforgettable
                    adventures. Discover the destinations, experiences, and moments that capture your heart and create
                    cherished memories. Craft your own personalized collection of travel treasures, and let them guide you
                    towards extraordinary experiences. It's time to select your favorites and create a travel story that's
                    uniquely yours.</p>
                <!-- <div class="mt-4">
                    <div class="flex justify-center items-center">
                        <p
                            class="py-0.5 px-2 border-2 text-xs rounded-full mx-1 cursor-pointer hover:border-secondaryColor hover:text-secondaryColor">
                            Attraction</p>
                        <p
                            class="py-0.5 px-2 border-2 text-xs rounded-full mx-1 cursor-pointer hover:border-secondaryColor hover:text-secondaryColor">
                            Accomodation</p>
                        <p
                            class="py-0.5 px-2 border-2 text-xs rounded-full mx-1 cursor-pointer hover:border-secondaryColor hover:text-secondaryColor">
                            Activities</p>
                    </div>
                </div> -->
            </div>
            <div class="flex justify-between mx-5">
                <div class="flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" class="mt-0.5">
                        <path
                            d="M31.3396 20.0895L29.6371 18.387C29.3808 18.1303 29.1676 17.834 29.0056 17.5095L27.3856 14.2695C27.3415 14.1816 27.2771 14.1054 27.1978 14.0472C27.1185 13.989 27.0265 13.9505 26.9294 13.9348C26.8323 13.9191 26.7328 13.9267 26.6392 13.957C26.5457 13.9873 26.4606 14.0394 26.3911 14.109C26.2346 14.2653 26.0391 14.377 25.825 14.4324C25.6108 14.4878 25.3857 14.4849 25.1731 14.424L23.2636 13.8795C22.9581 13.7936 22.6319 13.8194 22.3437 13.9522C22.0555 14.085 21.8239 14.3161 21.6907 14.6041C21.5574 14.8921 21.5311 15.2182 21.6165 15.5238C21.7019 15.8295 21.8933 16.0947 22.1566 16.272L23.0371 16.857C23.9221 17.4495 24.0481 18.702 23.2951 19.455L22.9951 19.755C22.6771 20.073 22.5001 20.502 22.5001 20.949V21.564C22.5001 22.1775 22.3351 22.7775 22.0201 23.301L20.0476 26.5875C19.7664 27.0565 19.3685 27.4446 18.8927 27.7141C18.4169 27.9835 17.8794 28.1251 17.3326 28.125C16.9129 28.125 16.5104 27.9583 16.2136 27.6615C15.9168 27.3647 15.7501 26.9622 15.7501 26.5425V24.7845C15.7501 23.4045 14.9101 22.164 13.6291 21.651L12.6466 21.2595C11.9317 20.9734 11.3362 20.4514 10.9589 19.7802C10.5816 19.109 10.4451 18.329 10.5721 17.5695L10.5826 17.5065C10.6523 17.0892 10.7999 16.6888 11.0176 16.326L11.1526 16.101C11.5108 15.5045 12.0447 15.0333 12.681 14.7518C13.3174 14.4704 14.0252 14.3926 14.7076 14.529L16.4746 14.883C16.8904 14.966 17.3222 14.8893 17.6841 14.6684C18.046 14.4474 18.3114 14.0983 18.4276 13.6905L18.7396 12.5955C18.8477 12.2172 18.8202 11.8131 18.6619 11.4529C18.5036 11.0927 18.2244 10.7992 17.8726 10.623L16.8751 10.125L16.7386 10.2615C16.4252 10.5749 16.0531 10.8235 15.6436 10.9931C15.2342 11.1627 14.7953 11.25 14.3521 11.25H14.0821C13.7086 11.25 13.3516 11.4 13.0891 11.661C12.8485 11.9038 12.5273 12.0499 12.1862 12.0717C11.8451 12.0934 11.5079 11.9894 11.2384 11.7792C10.9689 11.5691 10.7858 11.2674 10.7238 10.9313C10.6618 10.5952 10.7253 10.248 10.9021 9.95552L13.0186 6.42602C13.2295 6.07518 13.3749 5.68889 13.4476 5.28602M31.3396 20.0895C31.7029 17.7752 31.4578 15.4062 30.6282 13.2154C29.7987 11.0245 28.4133 9.08721 26.6083 7.59393C24.8033 6.10065 22.6408 5.10277 20.3333 4.69838C18.0258 4.294 15.6528 4.49703 13.4476 5.28752C11.2041 6.09172 9.21343 7.47553 7.67798 9.2983C6.14253 11.1211 5.11699 13.3179 4.70559 15.6654C4.29418 18.0129 4.51158 20.4275 5.33568 22.6638C6.15978 24.9001 7.56121 26.8783 9.39755 28.3975C11.2339 29.9167 13.4397 30.9227 15.7908 31.3133C18.1419 31.7038 20.5544 31.465 22.7833 30.621C25.0122 29.7771 26.9779 28.3581 28.4808 26.5084C29.9836 24.6586 30.9699 22.444 31.3396 20.0895Z"
                            stroke="#FFA239" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="font-[SourceSansPro] text-left text-3xl font-bold w-full text-secondaryColor ml-2">Attractions
                    </p>
                </div>
                <div class="text-right">
                    <!-- <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                Sort by
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-violet-500 text-secondaryColor' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">

                                        Name
                                    </button>
                                    </MenuItem>
                                </div>
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-violet-500 text-secondaryColor' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">

                                        Region
                                    </button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-violet-500 text-secondaryColor' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">

                                        Country
                                    </button>
                                    </MenuItem>
                                </div>

                            </MenuItems>
                        </transition>
                    </Menu> -->
                </div>
            </div>
            <!-- <div class="w-full flex flex-wrap justify-left mt-10">
                <div v-for="item in matches" class="basis-1/3">
                    <div class="bg-[#F5F5F5] mx-4 my-4 p-6 rounded-[20px]">
                        <RouterLink :to="'/' + item.attributes.bubbles.data[0].attributes.regionName"
                            class="text-md text-[#AFAFAF]">
                            {{ item.attributes.bubbles.data[0].attributes.regionName }} / {{
                                item.attributes.bubbles.data[0].attributes.countryName }}
                        </RouterLink>
                        <div class="flex justify-between">
                            <p class="font-bold text-2xl"> {{ item.attributes.Title }}</p>
                            <svg width="20" height="20" viewBox="0 0 20 20"
                                @click="store.deleteOne(item.attributes.uid, item.attributes.bubbles.data[0].attributes.regionName), reload()"
                                class=" cursor-pointer">
                                <path class="stroke-red fill-red"
                                    d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p class="text-sm mt-4"> {{ item.attributes.Text }}</p>
                        <img :src="'http://localhost:1337' + item.attributes.Image.data[0].attributes.url" alt=""
                            class="w-full rounded-[20px] my-6">
                    </div>
                </div>
            </div> -->
            <div class="w-full flex flex-wrap justify-left mt-10">
                <div v-for="item in matches" class="basis-1/3  my-0">
                    <div class="mx-4 bg-[#F5F5F5] rounded-[20px] overflow-hidden my-4">
                        <div class="w-full h-[200px] relative">
                            <img :src="'http://localhost:1337' + item.attributes.Image.data[0].attributes.url" alt=""
                                class="object-cover w-full h-full rounded-t-[20px] ">
                            <div class="absolute top-0 w-full pb-6 bg-gradient-to-b from-black/70 to-black/0">
                                <div class="flex justify-between w-full px-4 items-center pt-4 -mb-1">
                                    <p class="font-bold text-2xl text-white"> {{ item.attributes.Title }}</p>
                                    <svg width="20" height="20" viewBox="0 0 20 20"
                                        @click="store.deleteOne(item.attributes.uid, item.attributes.bubbles.data[0].attributes.regionName), reload()"
                                        class=" cursor-pointer">
                                        <path class="stroke-red fill-red"
                                            d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <RouterLink :to="'/' + item.attributes.bubbles.data[0].attributes.regionName"
                                    class="text-sm text-white px-4">
                                    {{ item.attributes.bubbles.data[0].attributes.regionName }} / {{
                                        item.attributes.bubbles.data[0].attributes.countryName }}
                                </RouterLink>
                            </div>
                        </div>
                        <div class="px-4 py-6">
                            <p class="text-sm"> {{ item.attributes.Text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-32 max-w-6xl mx-10 my-auto flex flex-col justify-center">
                <p class="font-[Oswald] text-center text-secondaryColor font-semibold text-lg uppercase">Always remember</p>
                <p class="text-center text-sm mx-12 mt-4">A world of travel, where having no favorites becomes a gateway to
                    limitless adventure. Release expectations and allow yourself to be captivated by the unexpected. Uncover
                    hidden gems, embrace diverse cultures, and let each new destination become a favorite in its own
                    extraordinary way. The thrill lies in the journey of discovery, where the joy of travel knows no bounds.
                </p>
            </div>
            <div>
                <p class="font-bold text-2xl text-secondaryColor">Discover</p>
                <div class="flex justify-between items-center mt-8">
                    <div v-for="x in 5" class="mx-4 ">
                        <img src="@/assets/img/tobias-keller-73F4pKoUkM0-unsplash.jpg" alt="" class="w-36 h-60 rounded-full object-cover drop-shadow-md">
                        <p class="text-center mt-2 uppercase">Otago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAttractionStore } from '@/stores/favAttraction'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
})

const store = useAttractionStore();
const items = ref(store.getAllLocalStorageItems());
const deleteOne = ref('false');

function transformToArray(data: any) {
    var result: any = [];

    Object.values(data).forEach(function (value: any) {
        var parsedArray = JSON.parse(value);
        result = result.concat(parsedArray);
    });

    return result;
}

const transformedArray = ref(transformToArray(items.value)),
    locations = ref(),
    matches = ref();


async function fetchSearchResults() {
    try {
        const response = await fetch("http://localhost:1337/api/locations?populate=*");
        const data = await response.json();
        locations.value = data;
        matches.value = filterArrayByIds();
        console.log(matches.value);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function filterArrayByIds() {
    return locations.value.data.filter((item: any) => {
        return transformedArray.value.includes(item.attributes.uid)
    });
}

function reload() {
    console.log('jetzt')
    items.value = store.getAllLocalStorageItems();
    transformedArray.value = transformToArray(items.value);
    matches.value = filterArrayByIds();
}

const emit = defineEmits(['name'])

onMounted(() => {
    fetchSearchResults()
    emit('name', props.message)
})
</script>