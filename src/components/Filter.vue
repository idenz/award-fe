<script lang=ts>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    FilterIcon,
    XIcon
  } from '@heroicons/vue/outline'
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: "filter",
    components: {
      FilterIcon,
      XIcon,
      Popover,
      PopoverButton,
      PopoverGroup,
      PopoverPanel
    },
    data () {
      return {
        checkedCategories: [],
        mainCategories: [
          {
            name: "All Type",
            value: 'all',
            checked: false
          }, {
            name: "Voucher",
            value: 'voucher',
            checked: false
          }]
        }
    },
    emits: ["add:filter", 'submit:filter', 'delete:filter'],
    methods: {
      onCLick: function (e) {
        console.log(e.target.checked, "CHECKED");
        const index = this.mainCategories.findIndex((v) => v.value === e.target.value)
        if(e.target.checked){
          this.mainCategories[index].checked = true
          this.$emit('add:filter', e.target.value)
        }else{
          this.mainCategories[index].checked = false
          this.$emit('delete:filter', e.target.value)
        }
      },
      onSubmit: function (e) {
        this.$emit('submit:filter')
      }
    }
  })
</script>

<template>
  <Popover>
    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
      <span class="sr-only">Open menu</span>
      <FilterIcon class="h-6 w-6" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="fixed inset-0 z-10" :as="form">
          <form>
            <div class="h-full shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 flex flex-col justify-between">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                      <a href="#" class="font-bold text-lg">
                        Filter
                      </a>
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  
                  <div class="pb-12">
                    <label for="minmax-range" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-700">Point Needed</label>
                    <div class="flex justify-between">
                      <div class="text-xl text-blue-600">IDR 10.000</div>
                      <div class="text-xl text-blue-600">IDR 500.000</div>
                    </div>
                    <input id="minmax-range" type="range" min="10000" max="500000" value="10000" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-200">
                  </div>

                  <div>
                  <fieldset>
                    <label for="select-type" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-700">Award Type</label>
                    <div class="mt-4 space-y-4">

                      <div class="flex items-start" v-for="mainCat in mainCategories" v-bind:key="mainCat.value">
                        <div class="flex items-center h-5">
                          <input :id="mainCat.value" v-on:click="onCLick" :name="mainCat.value" :value="mainCat.value" v-model="mainCat.checked" type="checkbox" class="focus:ring-blue-500 h-5 w-5 text-blue-600 border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-md">
                          <label for="mainCat.value" class="font-medium text-gray-700">{{ mainCat.name }}</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  </div>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div>
                  <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-900"> Filter </a>
                </div>
              </div>
            </div>
          </form>
        </PopoverPanel>
    </transition>
  </Popover>
</template>