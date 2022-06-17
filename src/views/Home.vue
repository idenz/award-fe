<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Form, Field } from 'vee-validate'
  import { Actions } from "@/stores/enums/StoreEnums";
  import { useStore } from "vuex"
  import { useRouter } from "vue-router";
  import Swal from "sweetalert2/dist/sweetalert2.min.js";

  export default defineComponent({
    name: "login",
    components: {
      Form,
      Field
    },
    setup(){
      const store  = useStore()
      const router = useRouter()

      const submitButton = ref<HTMLButtonElement | null>(null)

      const onSubmitLogin = async (values) => {
        // Clear existing errors
        store.dispatch(Actions.LOGOUT);
        
        if(submitButton.value){
          // eslint-disable-next-line
          submitButton.value!.disabled = true;
        }

        await store.dispatch(Actions.LOGIN, values);
        const error = store.getters.getErrors['error']
        
        if(!error){
          Swal.fire({
            text: "You have successfully logged in!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none",
            },
          }).then(function () {

          // Go to page after successfully login
          router.push({ name: "award" });
          });
        } else {
          Swal.fire({
            text: error.message,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            customClass: {
              confirmButton: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",
            },
          });
        }

        // eslint-disable-next-line
        submitButton.value!.disabled = false;
      }

      return {
        onSubmitLogin,
        submitButton
      }
    }
  })
</script>

<template>
 <div class="min-h-full fixed top-0 left-0 right-0 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">AWARD</h2>
        <p class="mt-2 mx-5 text-center text-lg text-gray-600">
          Enter your email address
          <br> {{ errors }}
        </p>
      </div>
      <Form class="mt-8 space-y-6" @submit="onSubmitLogin" >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <Field
              id="email-address"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              type="email"
              name="email"
              autocomplete="off"
            />
            <!-- <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address" /> -->
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button ref="submitButton" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-grey-700">
            Sign in
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
