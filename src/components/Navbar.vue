<template>
  <Popover>
    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
      <span class="sr-only">Open menu</span>
      <MenuIcon class="h-6 w-6" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="fixed inset-0 right-1/4 z-10">
          <div class="h-full shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 flex flex-col justify-between">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                    <a href="#" class="font-bold text-lg">
                      AWARD
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
                <nav class="grid gap-y-8">
                  <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div>
                <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900"> Logout </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  MenuIcon,
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