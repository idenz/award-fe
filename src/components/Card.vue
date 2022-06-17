<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "card",
    props: {
        data: Object
    },
    methods: {
        formatCurrency: function (value: number) {
            return new Intl.NumberFormat().format(value).replace(/[,]/g, '.')
        }
    },
    setup(){
        const type = {
            product: 'bg-red-400',
            voucher: 'bg-blue-600',
            giftcard: 'bg-green-600'
        }

        return { type }
    }
})
</script>


<template>
        <div class="w-full max-w-sm pb-3">
            <div class="rounded-xl rounded flex flex-col justify-between overflow-hidden shadow-lg mb-4 mx-4" style="height: 180px">
                <div class="px-3 pt-4 pb-2 flex justify-end">
                    <span v-bind:class="type[data.type]" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" >{{ data.type }}</span>
                </div>
                <div class="px-6 pt-2 py-2">
                    <div class="font-bold text-l text-gray-400 mb-2">{{ formatCurrency(data.point) }} Point</div>
                </div>
            </div>
            <div class="px-8">
                    <div class="font-bold text-xl text-gray-600 mb-2">{{ data.name }}</div>
            </div>
        </div>
</template>