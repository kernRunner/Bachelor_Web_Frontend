<template>
    <Meta
        title="Distance Reacher: Book Travel and Support Charities" 
        description="Welcome to our travel page, where your bookings make a difference! Every time you book through us, we donate our affiliate earnings to charity. You don't pay extra, but you make a difference with every trip. Let's explore and give back together!" 
        keywords="Distance Reacher, travel bookings, support charities, find destinations, book accommodations, create activities, charitable travel, make a difference, travel app"
    />
    <div id="Discover" class="relative overflow-hidden h-screen sm:h-[800px] w-full flex justify-center bg-[#F5F5F5]">
        <img src="/src/assets/img/StartPage/Home.jpg" alt="Background"
            class="absolute inset-0 w-full h-full object-cover z-0" />
        <div
            class="relative pt-8 md:pt-16 lg:pt-32 pb-8 md:pb-16 max-w-6xl mx-4 sm:mx-10 w-full flex items-center z-10">
            <div class="w-full sm:w-full px-4 sm:px-2">
                <div
                    class="text-left text-gray-900 text-4xl sm:text-6xl md:text-8xl font-semibold font-[Oswald] text-white">
                    MAKE A DIFFERENCE
                </div>
                <div class="mt-8 mr-4 sm:mr-8 text-xl font-normal font-[SourceSansPro] text-white">
                    Support charities with every booking, at no extra cost.
                </div>
                <a href="#get_started"
                    class="inline-flex h-[42px] bg-secondaryColor rounded-full shadow items-center justify-between px-5 mt-8 sm:mt-12 cursor-pointer">
                    <p class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">GET
                        STARTED</p>
                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="ml-6">
                        <path
                            d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="h-auto justify-center flex">
        <div class="pt-16 sm:pt-32 max-w-6xl mx-2 sm:mx-10 my-auto w-full flex flex-col sm:flex-row">
            <div class="w-full sm:w-1/2 px-2 h-auto font-[SourceSansPro] sm:mr-6 text-center sm:text-left">
                <p class="text-3xl">What is Distance Reacher?</p>
                <p class="text-4xl font-bold">Here’s how it works</p>
                <p class="mt-4">Welcome to our travel app, where your bookings make a difference! Every time you book
                    through us, we donate our affiliate earnings to charity. You don't pay extra, but you make a
                    difference with every trip. Let's explore and give back together!
                </p>
                <RouterLink :to="{ name: 'about' }" class="rounded-md pr-3 font-[SourceSansPro] text-lg font-semibold">
                    <div class="inline-flex items-center group pt-8">
                        <p>More about us</p>
                        <img src="@/assets/icons/arrowright.svg" alt="arrow to About Page"
                            class="ml-2 sm:ml-6 lg:group-hover:ml-12 transition-all duration-300">
                    </div>
                </RouterLink>
            </div>
            <div class="w-2/2 sm:w-1/2 sm:flex justify-left sm:justify-end sm:h-48 mt-16 sm:mt-0 mx-10 sm:mx-0">
                <div class="">
                    <p class="font-bold mb-4 justify-center text-center">Our Partner</p>
                    <div class="inline-flex flex-wrap justify-center">
                        <a href="https://www.viator.com/?pid=P00192029&mcid=42383&medium=link&medium_version=selector" class="block my-2 mx-2" target="_blank">
                            <div
                                class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer">
                                <img src="@/assets/icons/accomodation/viator.png" alt="Viator" class="mr-4 h-8">
                                <p
                                    class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                    Viator</p>
                            </div>
                        </a>

                        <a href="https://amzn.to/3LmfFXr" class="block my-2 mx-2" target="_blank">
                            <div
                                class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer">
                                <img src="@/assets/icons/accomodation/Amazon.png" alt="Amazon" class="mr-4 h-8 p-1 rounded-md bg-white">
                                <p
                                    class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                    Amazon</p>
                            </div>
                        </a>
                        <a href="https://trip.tp.st/FfBIAAsx" class="block my-2 mx-2" target="_blank">
                            <div
                                class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer">
                                <img src="@/assets/icons/accomodation/trip.png" alt="Trip.com" class="mr-4 h-8  rounded-md ">
                                <p
                                    class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                    Trip.com</p>
                            </div>
                        </a>
                        <a href="https://yesim.tp.st/rPkNKFLk" class="block my-2 mx-2" target="_blank">
                            <div
                                class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer">
                                <img src="@/assets/icons/accomodation/yesim.png" alt="Yesim" class="mr-4 h-8 rounded-md ">
                                <p
                                    class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                    Yesim</p>
                            </div>
                        </a>
                        

                        <a href="https://kiwi.tp.st/KpF58stu" class="block my-2 mx-2" target="_blank">
                            <div
                                class="py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer">
                                <img src="@/assets/icons/accomodation/kiwi.png" alt="Kiwi.com" class="mr-4 h-8 rounded-md ">
                                <p
                                    class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                    Kiwi.com</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <InfoBlock />

    <BannerDestination />

    <div class="h-auto w-full flex justify-center">
        <div class="pt-16 sm:pt-16 md:pt-32 lg:pt-44 pb-8 sm:pb-16 max-w-6xl mx-4 sm:mx-10 my-auto w-full flex"
            id="Discover">
            <div class="w-full">
                <p class="font-bold text-2xl sm:text-3xl md:text-4xl"><span class="text-secondaryColor">Discover</span>
                    Fantastic Places</p>
            </div>
        </div>
    </div>

    <div class="h-auto justify-center flex">
        <div class="pb-8 sm:pb-16 max-w-6xl mx-2 sm:mx-10 my-auto w-full flex flex-col sm:flex-row transition-all duration-700"
            :class="[show ? '-translate-x-full' : 'translate-x-0']">
            <div class="w-full sm:w-1/2 px-2 sm:px-6">
                <div class="grid grid-rows-5 grid-cols-2 grid-flow-col gap-4">
                    <RouterLink
                        :to="{ name: 'contentView', params: { name: 'Northern Territory', country: 'au', jumpId: 83 } }"
                        class="cursor-pointer relative row-span-2 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6 overflow-hidden ">Uluru</p>
                        <img src="@/assets/img/Discover/ulurudiscover.jpg" alt="uluru car view" class="object-cover h-64 w-64">
                    </RouterLink>
                    <RouterLink :to="{ name: 'contentView', params: { name: 'Queensland', country: 'au', jumpId: 48 } }"
                        class="cursor-pointer relative row-span-3 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Gold Coast</p>
                        <img src="@/assets/img/Discover/goldcoastdiscover.jpg" alt="goldcoast city view"
                            class="object-cover h-full w-full">
                    </RouterLink>
                    <RouterLink @click="toTop()"
                        :to="{ name: 'contentView', params: { name: 'Sydney', country: 'au' } }"
                        class="cursor-pointer relative row-span-3 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Sydney</p>
                        <img src="@/assets/img/Discover/sydneydiscover.jpg" alt="opera house" class="object-cover h-full w-full">
                    </RouterLink>
                    <RouterLink @click="toTop()"
                        :to="{ name: 'contentView', params: { name: 'Melbourne', country: 'au' } }"
                        class="cursor-pointer relative row-span-2 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Melbourne</p>
                        <img src="@/assets/img/Discover/melbournediscover.jpg" alt="city skyline" class="object-cover h-64 w-64">
                    </RouterLink>
                </div>
            </div>

            <div class="w-full sm:w-1/2 pl-0 sm:pl-32 pt-4 sm:pt-0">
                <div class="mx-4 sm:mx-0 sm:mr-8 text-black text-xs sm:text-sm font-normal font-[SourceSansPro]">
                    Choose your travel favorites and embark on a journey of unforgettable adventures. Discover the
                    destinations, experiences, and moments that capture your heart and create cherished memories. Craft
                    your own personalized collection of travel treasures, and let them guide you towards extraordinary
                    experiences. It's time to select your favorites and create a travel story that's uniquely yours.
                </div>
                <!-- <a href="#swiper"
                    class="w-fit h-10 sm:h-[42px] bg-secondaryColor rounded-full shadow sm:flex hidden items-center justify-around px-2 sm:px-5 mt-4 sm:mt-12 cursor-pointer">
                    <div
                        class="text-center text-white text-sm sm:text-xl font-semibold font-[SourceSansPro] tracking-tight sm:tracking-[8px] mx-1 sm:mx-5">
                        MORE</div>
                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a> -->
            </div>
        </div>
    </div>

    <!-- <Accomodation /> -->

    <Activity />
    <CarouselActivity />

    <FooterEnd />


    <UpButton />
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import InfoBlock from '@/components/Info/Info.vue'
import SwiperBox from '@/components/Swiper.vue'
import CarouselActivity from '@/components/Carousel/Activity.vue'
import UpButton from '@/components/Navigation/upButton.vue'
import BannerDestination from '@/components/Banner/Destination.vue'
import Accomodation from '@/components/Banner/Accomodation.vue'
import Activity from '@/components/Banner/Activity.vue'
import FooterEnd from '@/components/Navigation/Footer.vue'
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router'
import Meta from '@/components/metadata.vue'

const emit = defineEmits(['open', 'name'])
const jumpId = ref();
const route = useRoute();

onMounted(() => {
    jumpId.value = route.params.jumpId;
    emit('name', "Distance Reacher");
    scrollToAnchor(route.params.jumpId);
})

const open = ref();

function openSearch() {
    emit('name', "Distance Reacher");

    emit('open', !open.value);
    open.value = !open.value;
}

const show = ref(false);

function openMoreAtt() {
    show.value = !show.value;
}

const container: any = ref(null);

const scrollToPosition = () => {
    if (container.value) {
        console.log('yes')
        container.value.scrollLeft = window.innerWidth;
    }
};

watch(() => route.params.jumpId, (newValue) => {
    scrollToAnchor(route.params.jumpId);
});


function scrollToAnchor(refName: any) {
    const el = document.getElementById(refName);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


</script>
