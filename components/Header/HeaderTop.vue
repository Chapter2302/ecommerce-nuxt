<template>
    <div class="top-header-container w-full fixed xl:relative" style="z-index: 7">
        <div 
            :class="this.$route.path == '/' ? 'bg-white' : 'bg-red-100'" 
            class="w-full flex justify-center py-5"
        >
            <div class="top-header-wrapper w-full flex px-8 xl:px-16 h-8 xl:h-16" style="max-width: 1024px">
                <div class="top-header-left flex-1 flex">
                     <!-- hamburger -->
                    <div id="hamburger" class="px-3 my-0 mr-1 h-full flex cursor-pointer xl:hidden items-center hover:bg-black hover:text-white border-2 border-black rounded"  @click="setIsOpenMobileNav">
                        <i class="fas fa-bars" :class="{'fa-times': isOpenMobileNav, 'fa-barsblock': !isOpenMobileNav}"></i>
                    </div>
                </div>
                <div class="top-header-mid flex justify-center xl:justify-center flex-1">
                    <div>
                        <a href="#" class="flex rounded items-center justify-center h-full no-underline py-1 bg-yellow-300 py-0 w-20 md:w-32 xl:w-52">
                            <!-- <img src="" class="logo"/> -->
                            <h1 class="text-base md:text-md xl:text-3xl font-bold">LOGO</h1>
                        </a>
                    </div>  
                </div>
                <div class="top-header-right h-full flex justify-end flex-1">
                    <a href="#" class="ml-4 flex items-end no-underline text-base md:text-xl xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                        LOGIN
                    </a>
                    <a href="#" class="ml-4 flex items-end no-underline text-base md:text-xl xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                        BAG
                    </a>
                </div>
            </div>
        </div>
        <!--Mobile Menu-->
        <div id="mobileNav" style="transition: height 1s; overflow: hidden" :style="{'height': isOpenMobileNav ? '100%' : '0px'}" class="fixed text-bold w-full bg-white">       
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-8 py-2 border-t-2 border-b border-yellow-500">NEW IN</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">PRODUCT</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">STYLE STORY</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">SALE</a>
            <a href="#" class="block text-black-900 text-base font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">
                <span class="flex items-stretch ">
                    <i class="fas fa-search self-center pr-2"></i>SEARCH
                </span>
            </a>
        </div>
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