<template>
    <div class="header-mid-container w-full flex justify-center">
       <div class="w-full px-16 flex flex-wrap items-center justify-between font-bold" style="max-width: 1280px;">
            <!--Desktop Menu-->
            <nav class="toggle hidden lg:flex xl:flex w-auto text-bold mt-0">        
                <a href="#" class="inline-block text-black-900 text-base font-bold hover:text-yellow-400 mx-3 ml-0 my-3">NEW IN</a>
                <a href="#" class="inline-block text-black-900 text-base font-bold hover:text-yellow-400 mx-3 my-3">PRODUCT</a>
                <a href="#" class="inline-block text-black-900 text-base font-bold hover:text-yellow-400 mx-3 my-3">STYLE STORY</a>
                <a href="#" class="inline-block text-black-900 text-base font-bold hover:text-yellow-400 mx-3 my-3">SALE</a>
            </nav>

            <!--Search-->
            <a href="#" class="hidden lg:flex xl:flex text-black-900 text-base font-bold hover:text-yellow-400"><span class="flex items-stretch"><i class="fas fa-search self-center pr-2"></i>SEARCH</span></a>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset > 0){
                
            } else {
                
            }
        }
    }
}
</script>

<style>
</style>