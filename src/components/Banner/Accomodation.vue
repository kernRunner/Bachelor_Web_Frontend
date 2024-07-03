<template>
    <div id="accomodation" class=" h-auto w-full flex justify-center bg-[#F5F5F5] bg-cover mt-32 bg-right scroll-mt-16"
        style="background-image: url('/src/assets/img/StartPage/Accomodation.jpg');">
        <div class="py-16  lg:py-28 max-w-6xl mx-4 sm:mx-10 w-full flex justify-end">


            <div class="w-full sm:w-auto bg-black/50 py-16 rounded-2xl px-12 pr-36">
                <p class="font-[SourceSansPro] text-xl sm:text-4xl font-bold text-white">Book your Accomodation</p>

                <div class=" flex mt-6">
                    <div class=" w-96 py-2 bg-white rounded-full shadow flex items-center justify-between px-5 cursor-pointer mr-6"
                        >
                        <p class="text-center text-lightgray text-base font-[SourceSansPro]">Search ...</p>
                    </div>
                </div>

                <div class="mt-4">
                    <a href="https://www.booking.com/" class="block" target="_blank">
                        <div class=" py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer"
                            >
                            <p class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                Booking.com</p>
                            <img src="@/assets/icons/accomodation/booking.png" alt="" class=" ml-4">
                        </div>
                    </a>

                    <a href="https://www.hostelworld.com/" class="block mt-2" target="_blank">
                        <div class="  py-2 bg-secondaryColor rounded-full shadow inline-flex items-center justify-between px-5 cursor-pointer"
                            >
                            <p class="text-center text-white text-sm sm:text-[17px] font-semibold font-[SourceSansPro]">
                                Hostelworld</p>
                            <img src="@/assets/icons/accomodation/hostelworld.png" alt="" class=" ml-4">
                        </div>
                    </a>
                </div>


            </div>

        </div>
    </div>
</template>