<template>
    <div :style="{ height: `${windowHeight}px` }" class="grid grid-cols-2 gap-10">
        <div :style="{ backgroundImage: `url(${LoginBg})`, backgroundSize: 'cover' }"></div>
        <div class="px-10 flex items-center flex-col justify-center">
            <form class="w-full pr-10" @submit.prevent="onVerify">
                <ChangePasswordHeader />
                <ChangePasswordContent />
                <SpaceHeight height="30" />
                <PrimaryButton :isLoading="isLoading" btnTitle="Change Password" />
                <SpaceHeight height="30" />
                <div>
                    <span class="text-gray-helper">Do you want to create a new account?</span>
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
import ChangePasswordHeader from "./partials/ChangePasswordHeader.vue";
import ChangePasswordContent from "./partials/ChangePasswordContent.vue";
import PrimaryButton from "@components/ui/PrimaryButton.vue";
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import { extractFormData } from '../../../../utils/form.js';
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

const isLoading = computed(() => store.state.user.loading);

const storeUserData = (data) => {
    const { token } = data;
    localStorage.setItem("xtoken", token);
    localStorage.setItem("user", JSON.stringify(data));
    store.dispatch('auth/setAuthInfo');
};


const onVerify = async (e) => {
    const data = extractFormData(e, ['password', 'confirm_password',]);
    const validationFields = makeDataRequired(data);
    const isErrors = validateFields(validationFields);
    const deviceInfo = await window.electron.getDeviceInfo();

    if (!isErrors.length) {
        const { password, confirm_password } = data;

        store.dispatch('user/changePassword', { password, confirm_password, ...deviceInfo })
            .then(({ data }) => {
                storeUserData(data);
                router.push('/');
            }).catch((error) => {
                console.log("Change password error: ", error)
            });
    }
}

const toSignUp = () => {
    router.push('signup');
}
</script>
