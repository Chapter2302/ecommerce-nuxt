<template>
    <div class="header-main-container w-full flex justify-center">
       <div class="header-main-wrapper w-full">
           <div class="w-full px-4 md:px-8 xl:px-12 flex flex-wrap items-center justify-between font-bold">
                <!--Desktop Menu-->
                <nav class="toggle hidden xl:flex w-auto text-bold text-xl mt-0">        
                    <a href="#" class="inline-block text-black-900 font-bold hover:text-yellow-400 mx-3 ml-0 my-3">NEW IN</a>
                    <a href="#" class="inline-block text-black-900 font-bold hover:text-yellow-400 mx-3 my-3">PRODUCT</a>
                    <a href="#" class="inline-block text-black-900 font-bold hover:text-yellow-400 mx-3 my-3">STYLE STORY</a>
                    <a href="#" class="inline-block text-black-900 font-bold hover:text-yellow-400 mx-3 my-3">SALE</a>
                </nav>

                <!--Search-->
                <a href="#" class="hidden xl:flex text-black-900 text-xl font-bold hover:text-yellow-400"><span class="flex items-stretch"><i class="fas fa-search self-center pr-2"></i>SEARCH</span></a>
            </div> 
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

<style lang="scss" scoped>
.header-main-wrapper {
    max-width: 1536px
}
</style>