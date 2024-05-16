<template>
    <div :style="{ height: `${windowHeight}px` }" class="grid grid-cols-2 gap-10">
        <div :style="{ backgroundImage: `url(${LoginBg})`, backgroundSize: 'cover' }"></div>
        <div class="px-10 flex items-center flex-col justify-center">
            <form class="w-full pr-10" @submit.prevent="onRegister">
                <RegisterHeader />
                <RegisterContent />
                <PrimaryButton btnTitle="Register" :isLoading="isLoading" />
                <SpaceHeight height="38" />
                <div>
                    <span class="text-gray-helper">Has account already?</span>
                    <span>&nbsp;</span>
                    <span class="font-semibold text-primary cursor-pointer" @click="toLogin">Login</span>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import LoginBg from '../../../../assets/images/login_bg.jpg';
import RegisterHeader from "./partials/RegisterHeader.vue";
import RegisterContent from "./partials/RegisterContent.vue";
import PrimaryButton from "@components/ui/PrimaryButton.vue";
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import { extractFormData, } from '../../../../utils/form.js';
import { makeDataRequired, validateFields } from '../../../../utils/validate.js';

const windowHeight = ref(window.innerHeight);
const router = useRouter();
const store = useStore();

const updateHeight = () => {
    windowHeight.value = window.innerHeight;
};

onMounted(() => {
    window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateHeight);
});

const isLoading = computed(() => store.state.register.loading);

/**
 * Register a user based on the form data provided.
 *
 * @param {Event} e - The event object triggering the registration.
 * @return {void} No explicit return value.
 */
const onRegister = (e) => {
    const data = extractFormData(e, ['phone', 'password', 'first_name', 'last_name', 'confirm_password', 'gender']);
    const validationFields = makeDataRequired(data);
    const isErrors = validateFields(validationFields);

    if (!isErrors.length) {
        store.dispatch('register/performRegister', data)
            .then(() => router.push('/'))
            .catch((error) => {
                console.log(error)
            });
    }

}

/**
 * Navigates the user to the login page.
 *
 */
const toLogin = () => {
    router.push('login');
}
</script>