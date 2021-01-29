<template>
    <div class="product-detail-container w-full flex justify-center">
        <div class="product-detail-wrapper w-full py-10 px-8 sm:px-16 md:px-16 lg:px-16 xl:px-16 grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-8" style="max-width: 1280px">
            <div class="col-span-1 lg:col-span-7 xl:col-span-7 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                <div class="col-span-1 grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-items-center place-content-between gap-4 xs:row-start-2 sm:row-start-2">
                    <img v-for="imgURL in productImgs" :key="imgURL" :src="require(`@/assets/imgs/product/${imgURL}.jpg`)" class="object-fill w-full box-content border-4 border-transparent hover:border-yellow-400 cursor-pointer xs:justify-self-start" style="max-height: 143px" alt="" />
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4 xs:row-start-1 sm:row-start-1"> 
                    <img class="object-fill w-full h-full" style="max-height: 620px" src="@/assets/imgs/product/photo1.jpg" alt=""/>
                </div>
            </div>
            <div class="col-span-1 md:col-span-5 lg:col-span-5 xl:col-span-5">
                <div class="font-bold text-3xl lg:text-2xl">ĐẦM BODY XẺ LAI</div>
                <div class="text-gray-400 xs:text-sm">SKU: MACI2012017</div>

                <div class="font-bold text-2xl py-2.5">499,000<span class="text-lg align-top">đ</span></div>

                <div class="product-color-detail py-2.5"> 
                    <div class="font-semibold">MÀU SẮC: XANH</div>
                    <div class="flex">
                        <div class="rounded-full h-5 w-5 bg-gray-300 mr-2"></div>
                        <div class="rounded-full h-5 w-5 bg-green-300"></div>
                    </div>
                </div>
                
                <div class="product-size-detail py-2.5">
                    <div class="font-semibold">KÍCH THƯỚC</div>
                    <div class="product-size-items flex">
                        <div class="border border-black w-7 mr-1 text-center hover:text-white hover:bg-black cursor-pointer">S</div>
                        <div class="border border-black w-7 mr-1 text-center hover:text-white hover:bg-black cursor-pointer">M</div>
                        <div class="border border-black w-7 mr-1 text-center hover:text-white hover:bg-black cursor-pointer">L</div>
                    </div>
                </div>
                
                <div class="product-count-detail py-2.5">
                    <div>SỐ LƯỢNG: </div>
                    <div class="custom-number-input">
                        <div class="flex flex-row mt-1" style="z-index: -1">
                            <div class="flex justify-center flex-wrap content-center text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-6 cursor-pointer outline-none border border-r-0 border-black">
                            -
                            </div>
                            <input type="number" class="bg-transparent outline-none focus:outline-none text-center w-6 h-8 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none border-b border-t border-black" name="custom-input-number" value="0"/>
                            <div class="flex justify-center flex-wrap content-center text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-6 cursor-pointer outline-none border border-l-0 border-black">
                            +
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-3/6 lg:w-3/6 xl:w-3/6 cursor-pointer text-center mt-2.5 py-2 bg-yellow-400 font-bold text-white text-base">
                    LIÊN HỆ
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// components

export default {
    components: { 
    },
    data() {
        return {
            productImgs: ["photo2", "photo3", "photo2", "photo3"]
        }
    },
    beforeMount() {
    }
}
</script>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.custom-number-input input:focus {
    outline: none !important;
}

.custom-number-input button:focus {
    outline: none !important;
}
</style>