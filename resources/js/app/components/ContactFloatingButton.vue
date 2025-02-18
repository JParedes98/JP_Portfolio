<template>
<div>
    <!-- FLOATING BUTTON -->
    <button
        @click="show_message_box= !show_message_box"
        class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-theme-500 transition duration-150 hover:opacity-75">
        <div class="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-theme-500 animate-ping"></div>

        <div class="relative z-20">
            <span class="text-3xl text-white text-center">
                <i class="fa-regular fa-comment"></i>
            </span>
        </div>
    </button>

    <div v-if="show_message_box" class="w-full md:max-w-[375px] fixed bottom-24 right-0.5 md:right-8 p-4">
        <div class="bg-white p-6 shadow-neutral-400 shadow-2xl rounded-3xl">
            <span @click="show_message_box= !show_message_box" class="absolute top-6 right-8 cursor-pointer hover:text-neutral-700">
                <i class="fa-solid fa-xmark"></i>
            </span>

            <p class="font-medium text-xl text-neutral-600 text-center">
                Hi 😁
            </p>

            <p class="mt-2 text-md font-light text-neutral-500 text-center">
                I'm glad to see you here.
            </p>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-bold text-neutral-500" for="email">
                    <i class="fa-regular fa-envelope"></i>&nbsp;
                    Email
                    <span class="text-theme-400">
                        &lowast;
                    </span>
                </label>
                <input v-model="contact_email"
                       id="email"
                       class="block w-full px-6 py-3 text-neutral-700 bg-white border rounded-full focus:border-theme-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-theme-300"
                       type="text"
                       placeholder="E.g. Juan Lopez"/>

                <p v-if="v$.contact_email.$error" class="mt-3 text-xs font-bold text-red-500">
                    <i class="fa-solid fa-circle-exclamation"></i>&nbsp;
                    {{ v$.contact_email.$errors[0].$message }}
                </p>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-bold text-neutral-500" for="email">
                    <i class="fa-solid fa-align-center"></i>&nbsp;
                    Message
                    <span class="text-theme-400">
                        &lowast;
                    </span>
                </label>
                <textarea
                    v-model="contact_message"
                    class="block w-full h-32 px-5 py-3 mt-2 text-gray-500 placeholder-gray-400 bg-white border border-gray-200 rounded-3xl md:h-48 focus:border-theme-400 focus:ring-theme-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="How can I help you?"></textarea>

                <p v-if="v$.contact_message.$error" class="mt-3 text-xs font-bold text-red-500">
                    <i class="fa-solid fa-circle-exclamation"></i>&nbsp;
                    {{ v$.contact_message.$errors[0].$message }}
                </p>
            </div>

            <button @click="send_contact_form" class="w-full px-6 py-3 mt-6 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-theme-500 rounded-full hover:bg-theme-400 focus:outline-none focus:ring focus:ring-theme-300 focus:ring-opacity-50">
                Send Message
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import {helpers, required, email, maxLength} from '@vuelidate/validators'

export default {
    data() {
        return {
            v$: useVuelidate(),
            show_message_box: false,

            contact_email: '',
            contact_message: '',
        }
    },
    validations () {
        return {
            contact_email: {
                required: helpers.withMessage('Email field is required', required),
                email: helpers.withMessage('Email must be a valid email', email),
                maxLength: helpers.withMessage('Email must be max 255 chars', maxLength(255))
            },
            contact_message: {
                required: helpers.withMessage('Message field is required', required),
                maxLength: helpers.withMessage('Message must be max 500 chars', maxLength(500)),
            },
        }
    },
    methods: {
        async send_contact_form() {
            this.v$.$validate()

            if (!this.v$.$error) {
                let response = await this.send_http_request(
                    "/contact",
                    "POST",
                    {},
                    {},
                    {
                        email: this.contact_email,
                        message: this.contact_message
                    }
                )

                if (response.data.error) {
                    this.toast_notification({ message: response.data.error, type: 'error' })
                } else {
                    this.toast_notification({ message: response.data.message })
                    this.v$.$reset()
                    this.show_message_box = !this.show_message_box;
                }
            }
        }
    }
}
</script>
