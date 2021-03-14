<template>
    <div 
        class="top-header-container 
        w-full fixed xl:relative 
        flex justify-center bg-white" 
    >
        <div class="top-header-wrapper w-full">
            <div class="w-full flex my-4 px-4 md:px-8 xl:px-12 h-10 xl:h-16">
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
                            <h1 class="text-sm md:text-md xl:text-xl font-bold">LOGO</h1>
                        </a>
                    </div>  
                </div>
                <div class="top-header-right h-full flex justify-end flex-1">
                    <a href="#" class="xs:mx-4 mx-6 flex items-end no-underline text-sm md:text-md xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                        LOGIN
                    </a>
                    <a href="#" class="flex items-end no-underline text-sm md:text-md xl:text-xl font-bold text-gray-400 hover:text-yellow-400">
                        BAG
                    </a>
                </div>
            </div>
            <!--Mobile Menu-->
            <div id="mobileNav" style="transition: height 1s; overflow: hidden" :style="{'height': isOpenMobileNav ? '100%' : '0px'}" class="fixed text-bold w-full bg-white">       
                <a href="#" class="block text-black-900 text-sm md:text-md font-bold hover:text-yellow-400 px-8 py-2 border-t-2 border-b border-yellow-500">NEW IN</a>
                <a href="#" class="block text-black-900 text-sm md:text-md font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">PRODUCT</a>
                <a href="#" class="block text-black-900 text-sm md:text-md font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">STYLE STORY</a>
                <a href="#" class="block text-black-900 text-sm md:text-md font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">SALE</a>
                <a href="#" class="block text-black-900 text-sm md:text-md font-bold hover:text-yellow-400 px-8 py-2 border-b border-yellow-500">
                    <span class="flex items-stretch ">
                        <i class="fas fa-search self-center pr-2"></i>SEARCH
                    </span>
                </a>
            </div>
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

<style lang="scss" scoped>
.top-header-container {
    z-index: 7
}

.top-header-wrapper {
    max-width: 1536px;
}
</style>