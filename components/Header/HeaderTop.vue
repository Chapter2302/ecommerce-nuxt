<template>
    <div class="top-header-container bg-red-100 w-full flex justify-center py-5 fixed lg:relative xl:relative">
        <div class="top-header-wrapper w-full flex px-8 lg:px-16 xl:px-16 h-8 sm:h-12 md:h-14 lg:h-16 xl:h-16" style="max-width: 1280px">
            <div class="top-header-left flex-1 hidden lg:block xl:block"></div>
            <div class="top-header-mid flex justify-start xl:justify-center lg:justify-center flex-1">
                <!-- hamburger -->
                <a href="#" id="hamburger" class="px-3 my-0 mr-1 h-full flex lg:hidden xl:hidden items-center hover:bg-black hover:text-white border-2 border-black content-box rounded"  @click="setIsOpenMobileNav">
                    <i class="fas fa-bars" :class="{'fa-times': isOpenMobileNav, 'fa-barsblock': !isOpenMobileNav}"></i>
                </a>
                <div>
                    <a href="#" class="flex items-center justify-center h-full no-underline py-1 bg-yellow-300 py-0 w-20 sm:w-32 md:w-32 lg:w-52 xl:w-52">
                        <!-- <img src="" class="logo"/> -->
                        <h1 class="text-base md:text-xl xl:text-3xl font-bold">LOGO</h1>
                    </a>
                </div>  
            </div>
            <div class="top-header-right h-full flex justify-end flex-1">
                <a href="#" class="pl-4 flex items-end no-underline text-base md:text-xl lg:text-xl xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                    LOGIN
                </a>
                <a href="#" class="pl-4 flex items-end no-underline text-base md:text-xl lg:text-xl xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                    BAG
                </a>
            </div>
        </div>
        <!--Desktop Menu-->
        <nav v-if="isOpenMobileNav" class="block lg:hidden xl:hidden fixed text-bold mt-16 w-full bg-white border-b-2 border-t-2 border-yellow-500">        
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-16 py-2 border-b-2 border-yellow-500">NEW IN</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-16 py-2 border-b-2 border-yellow-500">PRODUCT</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-16 py-2 border-b-2 border-yellow-500">STYLE STORY</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-16 py-2 border-b-2 border-yellow-500">SALE</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-16 py-2"><span class="flex items-stretch "><i class="fas fa-search self-center pr-2"></i>SEARCH</span></a>
        </nav>
    </div>
</template>

<script>
// components
export default {
    data() {
        return {
            isOpenMobileNav: false,
        }
    },
    methods: {
        setIsOpenMobileNav() {
            this.isOpenMobileNav = !this.isOpenMobileNav
        }
    }
}
</script>

<style>

</style>