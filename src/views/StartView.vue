<template class=" overflow-x-hidden">
    <div class="h-auto w-full flex justify-center" id="top">
        <div class="pt-16 md:pt-32 lg:pt-44 pb-16 max-w-6xl mx-10 my-auto w-full flex">

            <div class="w-1/2 mx-2">
                <div class="text-left text-gray-900 text-8xl font-semibold font-[Oswald]">EXPLORE</div>
                <div class="text-left text-gray-900 text-8xl font-normal font-[BubblerOne] mt-4">DISCOVER</div>
                <div class="text-left text-gray-900 text-8xl font-normal font-[SourceSansPro] tracking-[14.40px]">ESCAPE
                </div>

                <div class="mt-12 mr-8 text-black text-sm font-normal font-[SourceSansPro]">Choose your travel favorites and
                    embark on a journey of unforgettable adventures. Discover the destinations, experiences, and moments
                    that capture your heart and create cherished memories. Craft your own personalized collection of travel
                    treasures, and let them guide you towards extraordinary experiences. It's time to select your favorites
                    and create a travel story that's uniquely yours.</div>
                <div class="w-2/4 h-[42px] bg-secondaryColor rounded-[100px] shadow flex items-center justify-between px-5 mt-12 cursor-pointer"
                    @click="openSearch()">

                    <p class="text-center text-white text-[17px] font-semibold font-[SourceSansPro]">Search for
                        destination</p>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                            d="M18.375 18.375L13.8276 13.8276M13.8276 13.8276C15.0583 12.5968 15.7498 10.9276 15.7498 9.18701C15.7498 7.44647 15.0583 5.77721 13.8276 4.54645C12.5968 3.3157 10.9276 2.62427 9.18701 2.62427C7.44647 2.62427 5.77721 3.3157 4.54645 4.54645C3.3157 5.77721 2.62427 7.44647 2.62427 9.18701C2.62427 10.9276 3.3157 12.5968 4.54645 13.8276C5.77721 15.0583 7.44647 15.7498 9.18701 15.7498C10.9276 15.7498 12.5968 15.0583 13.8276 13.8276Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="w-1/2 relative flex justify-center min-h-[550px]">
                <img class="w-[320px] h-[450px] rounded-[25px] absolute shadow-2xl" src="@/assets/img/StartPage/Road.jpg" />
                <img class="w-[200px] h-[350px] rounded-[25px] absolute mt-44 ml-80 shadow-2xl"
                    src="@/assets/img/StartPage/Map.png" />
            </div>
        </div>
    </div>

    <!-- <div class="h-auto w-full flex justify-center mt-14">
        <div className="w-2/5 h-[42px] bg-secondaryColor rounded-[100px] shadow flex items-center justify-between px-10">

            <p className="text-center text-white text-[17px] font-semibold font-[SourceSansPro]">Search for destination</p>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                    d="M18.375 18.375L13.8276 13.8276M13.8276 13.8276C15.0583 12.5968 15.7498 10.9276 15.7498 9.18701C15.7498 7.44647 15.0583 5.77721 13.8276 4.54645C12.5968 3.3157 10.9276 2.62427 9.18701 2.62427C7.44647 2.62427 5.77721 3.3157 4.54645 4.54645C3.3157 5.77721 2.62427 7.44647 2.62427 9.18701C2.62427 10.9276 3.3157 12.5968 4.54645 13.8276C5.77721 15.0583 7.44647 15.7498 9.18701 15.7498C10.9276 15.7498 12.5968 15.0583 13.8276 13.8276Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    </div> -->

    <InfoBlock />

    <div class="h-auto w-full flex justify-center">
        <div class="pt-16 md:pt-32 lg:pt-44 pb-16 max-w-6xl mx-10 my-auto w-full flex" id="Discover">
            <div class="w-full">
                <p class="font-bold text-4xl"><span class="text-secondaryColor">Discover</span> Fantastic Places</p>
            </div>
        </div>
    </div>



    <div class=" relative  transition-all duration-700 " :class="[show ? 'translate-x-0' : ' translate-x-[100vw]']">


        <div class="h-auto flex absolute bg-white z-10 overflow-scroll w-screen max-w-6xl m-auto right-0 left-0"
            id="container" ref="container">
            <div class="w-[200vw] flex">
                <div class="pb-16 my-auto w-screen flex overflow-scroll mr-2  ">
                    <div class="w-full overflow-scroll">
                        <div class="grid grid-cols-8 h-[600px] gap-2">

                            <div class="row-span-2 bg-red rounded-lg overflow-hidden relative">
                                <p class="absolute bottom-[15px] text-white font-bold ml-6 z-10">Sydney</p>
                                <img src="@/assets/img/au/City/goldcoast.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/sydney.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/goldcoast.png" alt="" class="h-full w-full object-cover ">
                            </div>



                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/sydney.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-1 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>

                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full object-cover ">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-16 my-auto w-screen flex overflow-scroll">
                    <div class="w-full overflow-scroll">
                        <div class="grid grid-cols-8 h-[600px] gap-2">

                            <div class="row-span-2 bg-red rounded-lg overflow-hidden">
                                <img src="@/assets/img/au/City/goldcoast.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/sydney.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/goldcoast.png" alt="" class="h-full w-full object-cover ">
                            </div>



                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 row-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/sydney.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-1 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>

                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="col-span-2 bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/uluru.png" alt="" class="h-full w-full object-cover ">
                            </div>
                            <div class="bg-red rounded-lg  overflow-hidden">
                                <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="h-full object-cover ">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-auto w-full flex justify-center z-10 absolute  m-4">
            <div class=" max-w-6xl mx-10 my-auto w-full flex" id="Discover">
                <div class="w-full">
                    <div class="w-fit h-[42px] bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5  cursor-pointer max-w-6xl "
                        @click="openMoreAtt()">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class=" rotate-180">
                            <path
                                d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="text-center text-white text-xl font-semibold font-[SourceSansPro] tracking-[8px] mx-5">
                            LESS
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="h-auto justify-center overflow-scroll  flex ">

        <div class=" pb-16 max-w-6xl mr-10 my-auto w-full flex transition-all duration-700"
            :class="[show ? '-translate-x-[100vw]' : ' translate-x-0']">

            <div class="w-1/2 px-6">
                <div class="grid grid-rows-5 grid-cols-2 grid-flow-col gap-4">
                    <RouterLink :to="{ name: 'contentView', params: { name: 'Sydney', country: 'au', id: 0 } }"
                        class="cursor-pointer relative row-span-2 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6 overflow-hidden ">Uluru</p>
                        <img src="@/assets/img/au/City/uluru.png" alt="" class="object-cover h-64 w-64">
                    </RouterLink>
                    <RouterLink :to="{ name: 'contentView', params: { name: 'gold-coast', country: 'au' } }"
                        class="cursor-pointer relative row-span-3 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Gold Coast</p>
                        <img src="@/assets/img/au/City/goldcoast.png" alt="" class="object-cover h-full w-full">
                    </RouterLink>
                    <RouterLink :to="{ name: 'contentView', params: { name: 'queensland', country: 'au' } }"
                        class="cursor-pointer relative row-span-3 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Sydney</p>
                        <img src="@/assets/img/au/City/sydney.png" alt="" class="object-cover h-full w-full">
                    </RouterLink>
                    <RouterLink :to="{ name: 'contentView', params: { name: 'melbourne', country: 'au' } }"
                        class="cursor-pointer relative row-span-2 bg-secondaryColor rounded-2xl overflow-hidden">
                        <p class="absolute bottom-[15px] text-white font-bold ml-6">Melbourne</p>
                        <img src="@/assets/img/au/City/melbourne.jpg" alt="" class="object-cover h-64 w-64">
                    </RouterLink>
                </div>
            </div>
            <div class="w-1/2 relative pl-32">
                <div class="mr-8 text-black text-sm font-normal font-[SourceSansPro]">Choose your travel favorites and
                    embark on a journey of unforgettable adventures. Discover the destinations, experiences, and moments
                    that capture your heart and create cherished memories. Craft your own personalized collection of
                    travel
                    treasures, and let them guide you towards extraordinary experiences. It's time to select your
                    favorites
                    and create a travel story that's uniquely yours.
                </div>
                <!-- <div class="w-fit h-[42px] bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-12 cursor-pointer"
                    @click="openMoreAtt()">                 -->
                <a href="#swiper" class="w-fit h-[42px] bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-12 cursor-pointer">
                    
                    <div class="text-center text-white text-xl font-semibold font-[SourceSansPro] tracking-[8px] mx-5">MORE
                    </div>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </div>


    <SwiperBox :name="''" id="swiper"></SwiperBox>

    <!-- <div class="h-auto w-full flex justify-center bg-[#F5F5F5] mt-32">
        <div class="pt-16 md:pt-32 lg:pt-32 pb-16 max-w-6xl mx-10 my-auto w-full flex">
            <div class="w-1/2">
                <p class="font-[Oswald] font-bold text-4xl lg:text-4xl md:text-2xl text-secondaryColor text-left">Explore
                    Like Never Before</p>
                <p class="font-bold text-2xl mt-4 text-left">Navigate with Ease using Our Interactive Map</p>
                <p class="mt-6 text-sm text-left">Discover the incredible attractions of Otago on our interactive map! With
                    our map feature, <br> exploring Otago has never been easier.</p>
            </div>
            <RouterLink :to="{ name: 'map' }" class="w-1/2">
                <img src="@/assets/img/Map.png" class="rounded-[5px] mx-auto  " />
            </RouterLink>
        </div>
    </div> -->

    <div class="h-auto w-full flex justify-center" id="Contact">
        <div class="py-16 md:py-32 lg:py-44 max-w-6xl mx-10 my-auto w-full">
            <p class="font-[Oswald] text-secondaryColor font-semibold text-xl uppercase text-center" id="Attractions">ALL
                We're here to help!</p>
            <div className="text-black text-[32px] font-bold font-[SourceSansPro] mt-4 text-center">Still have questions ?
            </div>
            <div class=" bg-secondaryColor rounded-md w-fit m-auto mt-10">
                <a href="mailto: abc@example.com">
                    <p class=" text-white p-2 px-12 font-bold">Get in Touch Now!</p>
                </a>
            </div>
        </div>
    </div>

    <UpButton />
</template>
  
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import InfoBlock from '@/components/Info.vue'
import SwiperBox from '@/components/Swiper.vue'
import MapPreview from '@/components/MapPreview.vue'
import FooterText from '@/components/Navigation/Footer.vue'
import UpButton from '@/components/Navigation/upButton.vue'
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router'

const emit = defineEmits(['open', 'name'])
const jumpId = ref();
const route = useRoute();

onMounted(() => {
    jumpId.value = route.params.jumpId;
    emit('name', "Distance Reacher");
    scrollToAnchor(jumpId.value)
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

const container:any = ref(null);

const scrollToPosition = () => {
    if (container.value) {
        console.log('yes')
        container.value.scrollLeft = window.innerWidth;
    }
};

function scrollToAnchor(refName: any) {
    const el = document.getElementById(refName);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}



</script>
  
