<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1 hidden md:flex">
          <a href="#" class="font-bold text-lg">
            AWARD
          </a>
        </div>
        <div class="flex justify-start lg:w-0 lg:flex-1 md:hidden">
          <a href="#">
            <PopoverButton :as="Navbar">
            </PopoverButton>
          </a>
        </div>

        <div class="flex justify-start lg:w-0 lg:flex-1 md:hidden">
          <a href="#" class="font-bold text-lg">
            AWARD
        </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton :as="Filter" @add:filter="addFilter">
            </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Cards </a>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <PopoverButton :as="Filter">
            </PopoverButton>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900"> Profile </a>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    addFilter: Function,
  }
})
</script>


<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  FilterIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Cards',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  { name: 'Profile', description: "Your customers' data will be safe and secure.", href: '#' },
]
</script>