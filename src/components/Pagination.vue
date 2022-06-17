<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: "card",
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
    props: {
        total: Number,
        limit: Number,
        page: Number
    },
    setup(props) {
        const { total, limit } = toRefs(props);
        const total_page: Number = Math.ceil(total.value / limit.value);
        
        const current_page_class = {
            current: 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600',
            default: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
        }

        return {
            total_page,
            current_page_class
        }
    }
})
</script>

<template>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <!-- <a href="#" v-for="index in total_page" v-bind:key="index" aria-current="page" v-bind:class="page === index ? current_page_class['current'] : current_page_class['default']" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ index }} </a> -->
          <!-- <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a> -->

          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
</template>