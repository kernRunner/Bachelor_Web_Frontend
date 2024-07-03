<template>
    <div class="h-auto w-full flex justify-center">
        <div class="pt-0 sm:pt-16 md:pt-16 lg:pt-24 pb-16 max-w-6xl mx-4 sm:mx-10 w-full">

            <div class="mt-8 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="sm:sticky sm:block hidden top-[150px] h-fit">
                    <a href="#info_content" class="flex items-center mt-3">
                        <img src="@/assets/icons/content/info.svg" alt="info">
                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer">
                            Info
                        </p>
                    </a>
                    <a href="#attractions" class="flex items-center mt-3">
                        <img src="@/assets/icons/content/attraction.svg" alt="attraction">
                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer" >
                            {{ name }}
                        </p>
                    </a>
                    <div class="border-l border-black/10 ml-3">
                        <div v-for="(item, index) in content" :key="index" class="flex items-center my-3">
                            <div class="w-3 border-b border-black/10"></div>
                            <p class="ml-8 cursor-pointer" @click="jumpToId(item.id)"
                                :class="[currentSection == item.id ? 'text-secondaryColor font-bold' : 'text-gray']">
                                {{ item.attributes.name }}
                            </p>
                        </div>
                    </div>
                    <a href="#activity" class="flex items-center mt-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.48 3.499C11.5223 3.39583 11.5944 3.30758 11.6869 3.24546C11.7795 3.18334 11.8885 3.15018 12 3.15018C12.1115 3.15018 12.2205 3.18334 12.3131 3.24546C12.4057 3.30758 12.4777 3.39583 12.52 3.499L14.645 8.61C14.6848 8.70564 14.7502 8.78844 14.834 8.84931C14.9178 8.91018 15.0168 8.94675 15.12 8.955L20.638 9.397C21.137 9.437 21.339 10.06 20.959 10.385L16.755 13.987C16.6765 14.0542 16.618 14.1417 16.5859 14.24C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8839 20.037 17.8771 20.1503 17.8386 20.2545C17.8001 20.3587 17.7315 20.4491 17.6417 20.5144C17.5518 20.5797 17.4446 20.6169 17.3336 20.6212C17.2226 20.6256 17.1128 20.597 17.018 20.539L12.293 17.654C12.2048 17.6002 12.1034 17.5717 12 17.5717C11.8967 17.5717 11.7953 17.6002 11.707 17.654L6.98203 20.54C6.88729 20.598 6.77748 20.6266 6.66649 20.6222C6.55549 20.6179 6.44828 20.5807 6.3584 20.5154C6.26851 20.4501 6.19999 20.3597 6.16148 20.2555C6.12297 20.1513 6.1162 20.038 6.14203 19.93L7.42703 14.544C7.45086 14.4434 7.44648 14.3382 7.41437 14.2399C7.38226 14.1416 7.32366 14.0541 7.24503 13.987L3.04103 10.385C2.95684 10.3126 2.89594 10.2169 2.86598 10.11C2.83602 10.0031 2.83834 9.88974 2.87264 9.78415C2.90695 9.67855 2.97172 9.58546 3.05879 9.51657C3.14587 9.44769 3.25137 9.40609 3.36203 9.397L8.88003 8.955C8.98328 8.94675 9.08225 8.91018 9.16606 8.84931C9.24986 8.78844 9.31525 8.70564 9.35503 8.61L11.48 3.499Z"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer" >Activities</p>
                    </a>
                    <!-- <a href="#acomodation" class="flex items-center mt-3">
                        <img src="@/assets/icons/content/home.svg" alt="">
                        <p class="text-xl text-gray mb-1 ml-4 cursor-pointer" >Accomodation</p>
                    </a> -->
                </div>

                <div class="col-span-2 ml-3  scroll-mt-32" id="attractions">
                    <p class="font-[Oswald] text-secondaryColor font-semibold text-lg sm:text-xl md:text-2xl uppercase mt-2">Attractions</p>
                    <div v-for="(item, index) in content" :key="index" class="content scroll-mt-24" :id="item.id">
                        <div class="slideText">
                            <p class="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-8 md:mt-12">{{ item.attributes.name }}</p>
                            <p class="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base">{{ item.attributes.description }}</p>
                        </div>
                        <div class="relative w-3/4 contentSlot">
                            <div class="absolute bottom-0 right-0 p-3 bg-black/50 rounded-tl-[19px] rounded-br-[19px] cursor-pointer"
                                @click="counter.toggelFavorite({ id: item.id, name: item.attributes.name, description: item.attributes.description, img: myGlobalVariable.substring(0, myGlobalVariable.length - 1) + item.attributes.image.data.attributes.url }, name)">
                                <svg v-if="counter.favorite" width="20" height="20" viewBox="0 0 20 20">
                                    <path
                                        :class="counter.favorite.some(fav => fav.id === item.id) ? 'stroke-red fill-red' : ' stroke-white fill-none'"
                                        d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg v-else width="20" height="20" viewBox="0 0 20 20">
                                    <path class="stroke-white fill-none"
                                        d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                
                                <!-- <div class="heart" @click="counter.toggelFavorite(index)"></div> -->
                                <!-- <div class="heart" :style="{ 'background-position': heartPosition }" @click="animateHeart(), counter.toggelFavorite(index)">
                                </div> -->
                                <div :class="counter.favorite.includes(item.attributes.uid) ? 'heart' : 'opacity-0'"
                                    :style="{ 'background-position': counter.favorite.includes(item.attributes.uid) ? '-2800px 0' : '0 0' }">
                                </div>
                            </div>
                            <img :src="myGlobalVariable.substring(0, myGlobalVariable.length - 1) + item.attributes.image.data.attributes.url" :alt="item.attributes.alt" 
                                class="rounded-[20px] mt-6 aspect-video bg-lightbrown" :longdesc="item.attributes.image.data.attributes.caption">
                        </div>
                        
                        <RouterLink
                            :to="{ name: 'contentView', params: { name: item.attributes.name, country: 'au', id: 0 } }"
                            @click="toTop()" v-if="item.attributes.more">
                            <div
                                class="w-fit bg-secondaryColor rounded-[100px] shadow flex items-center justify-around px-5 mt-6 cursor-pointer py-2">
                                <div
                                    class="text-center text-white text-base font-semibold font-[SourceSansPro]  mx-5">
                                    DISCOVER MORE
                                </div>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.06545 10.1312L2.75977 2.63917C8.27518 4.24299 13.4763 6.77673 18.1389 10.1312C13.4766 13.4861 8.27583 16.0204 2.76061 17.6248L5.06545 10.1312ZM5.06545 10.1312H11.3974"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </RouterLink>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineComponent, computed, watch, inject } from 'vue'
import { useAttractionStore } from '@/stores/favAttraction'
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router'


const props = defineProps({
    idBubble: {
        type: Number,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

console.log(props.content)
const counter = useAttractionStore();
const currentSection: any = ref('');
const jumpId = ref();
const route = useRoute();
const myGlobalVariable:any = inject('endpointUrl');

const currentIndex = ref(0);
const carouselItems = [
    { src: '/src/assets/regiontest/1.jpg', alt: 'Slide 1' },
    { src: '/src/assets/regiontest/2.jpg', alt: 'Slide 2' },
];

const currentIndex1 = ref(0);

const nextSlide1 = () => {
    currentIndex1.value = (currentIndex1.value + 1) % images.length;
};

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const images = [
    { src: '/src/assets/regiontest/1.jpg' },
    { src: '/src/assets/regiontest/2.jpg' },
    { src: '/src/assets/regiontest/3.jpg' }
];

watch(() => props.name, (newValue) => {
    console.log(props.name);
    counter.getItems(props.name);
});

watch(() => route.params.jumpId, (newValue) => {
    scrollToAnchor(route.params.jumpId);
});

onMounted(() => {

    // const routeName = route.name;
    // counter.someMethodThatUsesRouteName(routeName);
    console.log(route.params.jumpId);
    console.log(props.name);
    counter.getItems(props.name);

    jumpId.value = route.params.jumpId;

    // const obs: any = document.querySelectorAll('.content');
    // // console.log(obs);
    // const img: any = document.querySelectorAll('.contentSlot');
    // const text: any = document.querySelectorAll('.slideText');
    // console.log(currentSection.value);
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.intersectionRatio > 0) {
    //             currentSection.value = entry.target.getAttribute('id');
    //             console.log(entry.target.getAttribute('id'));
    //             // img[currentSection.value].classList.add('animate');
    //             // text[currentSection.value].classList.add('animate');
    //         }
    //     })
    // },
    //     {
    //         rootMargin: '0px 900px -200px 900px',
    //         threshold: 0,
    //     }
    // )
    // obs.forEach((section: any) => {
    //     observer.observe(section);
    //     // console.log(section);
    // })

    scrollToAnchor(jumpId.value);

    const interval = setInterval(nextSlide1, 3000); // Change image every 2 seconds (2000 milliseconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
}
)

function jumpToId(id: any) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToAnchor(refName: any) {
    const el = document.getElementById(refName);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const goToSlide = (index: any) => {
    currentIndex.value = index;
};

const heartPosition = ref('0 0');

const animateHeart = () => {
    heartPosition.value = '-2800px 0';
    setTimeout(() => {      
        heartPosition.value = '0 0';
    }, 1000);
};


const toggleHeart = () => {
    setTimeout(() => {
    }, 1000);
};


</script>

<style>
.heart {
    width: 100px;
    height: 100px;
    scale: .66;
    position: absolute;
    left: -29px;
    top: -27px;
    transform: translate(0%, 0%);
    background: url('@/assets/icons/Heart1.png') no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background 1s steps(28);
}

/* .heart:hover {
    background-position: -2800px 0;
    transition: background 1s steps(28);
}

@keyframes fave-heart {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -2800px 0;
    }
} */

.animateHeart {
    background-position: -2800px 0;
}

.contentSlot {
    transform: translateY(0px) !important;
    opacity: 1 !important;
    transition: ease-in-out .7s;
}

.slideText {
    transform: translateX(0px) !important;
    opacity: 1 !important;
    transition: ease-in-out .7s;
}


.animate {
    transform: translateX(0px);
    opacity: 1 !important;
}

.slideshow-container {
    max-width: 400px;
    position: relative;
    margin: auto;
}

/* CSS for the images in the slideshow */
.mySlides {
    display: none;
    width: 100%;
    height: auto;
}

.active {
    display: block;
}
</style>