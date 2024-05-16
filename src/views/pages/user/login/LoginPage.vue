<template>
    <div :style="{ height: `${windowHeight}px` }" class="grid grid-cols-2 gap-10">
        <div :style="{ backgroundImage: `url(${LoginBg})`, backgroundSize: 'cover' }"></div>
        <div class="px-10 flex items-center flex-col justify-center">
            <form class="w-full pr-10" @submit.prevent="onLogin">
                <LoginHeader />
                <LoginContent />
                <KeepMeLogin />
                <SpaceHeight height="38" />
                <PrimaryButton :isLoading="isLoading" />
                <SpaceHeight height="38" />
                <div>
                    <span class="text-gray-helper">Don’t have an account?</span>
                    <span>&nbsp;</span>
                    <span class="font-semibold text-primary cursor-pointer" @click="toSignUp">Sign up</span>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LoginBg from '../../../../assets/images/login_bg.jpg';
import LoginHeader from "./partials/LoginHeader.vue";
import LoginContent from "./partials/LoginContent.vue";
import KeepMeLogin from "./partials/KeepMeLogin.vue";
import PrimaryButton from "@components/ui/PrimaryButton.vue";
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import { extractFormData } from '../../../../utils/form.js';
import { makeRequiredOnly, validateFields } from '../../../../utils/validate.js';


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

const isLoading = computed(() => store.state.login.loading);

const storeUserData = (data) => {
    const { token } = data;
    localStorage.setItem("xtoken", token);
    localStorage.setItem("user", JSON.stringify(data));
    store.dispatch('auth/setAuthInfo');
};


const onLogin = (e) => {
    const { phone, password } = extractFormData(e, ['phone', 'password']);
    const validationFields = makeRequiredOnly([{ 'field': 'phone', 'val': phone, }, { 'field': 'password', 'val': password }]);
    const isErrors = validateFields(validationFields);

    if (!isErrors.length) {
        store.dispatch('login/performLogin', { phone, password })
            .then(({ data }) => {
                storeUserData(data);
                router.push('/');
            }).catch((error) => {
                console.log("Login error: ", error)
            });
    }
}

const toSignUp = () => {
    router.push('signup');
}
</script>
