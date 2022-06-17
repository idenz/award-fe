<script lang="ts">
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import ApiService from '@/core/services/ApiService'
import { defineComponent } from "vue"
import AwardData from '@/core/data/Award'
import Pagination from '@/components/Pagination.vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: "award",
    components: {
        Card,
        Header,
        Pagination,
        ChevronLeftIcon,
        ChevronRightIcon
    },
    data () {
        return {
            data: {},
            error: {},
            pagination: {
                limit: 9,
                page: 1,
            },
            filter: {
                type: []
            }
        }
    },
    mounted(){
        const set_header = ApiService.setHeader()
        const get_award = ApiService.get(`/award?page=${this.pagination.page}&limit=${this.pagination.limit}`)
        .then(({data}) => {
            this.data = data
            this.pagination['total'] = data.totalItem
            this.pagination['total_page'] = Math.ceil(data.totalItem / this.pagination.limit)
            })
        .catch(({ response }) => {
            this.error = response.data
            this.data = { totalItem: AwardData.length, items: AwardData }
        })
    },
    methods: {
        addFilter: function (value: string) {
            let self = this;
            self.filter.type.push(value)
        },
        changePage: function (page, limit) {
            let self = this
            const get_award = ApiService.get(`/award?page=${page}&limit=${limit}`)
            .then(({ data }) => {                
                self.data = data
                self.pagination['total'] = data.totalItem
                self.pagination['total_page'] = Math.ceil(data.totalItem / self.pagination.limit)
                self.pagination['page'] = page
                self.pagination['limit'] = limit
            })
        },
    },
    setup(){
        const current_page_class = {
            current: 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600',
            default: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
        }

        return {
            current_page_class
        }
    }
})
</script>


<template>
    <div class="mx-auto px-4 sm:px-6" style="max-width: 90rem">
        <Header :addFilter="addFilter" />
        <div class="flex flex-wrap justify-center pt-8">
            <Card v-for="item in data.items" v-bind:key="item._i" :data="item" />
        </div>
        <div class="flex flex-wrap justify-center pt-12 pb-12 z-0">
        <nav v-if="pagination.total_page" class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a href="#" v-for="index in pagination.total_page" v-bind:key="index" aria-current="page" v-bind:class="pagination.page === index ? current_page_class['current'] : current_page_class['default']" v-on:click="changePage(index, pagination.limit)" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ index }} </a>
          <!-- <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a> -->
    
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
        </div>
    </div>
</template>