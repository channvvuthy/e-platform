<template>
    <div>
        <div class="grid grid-cols-2 gap-5">
            <TextInput placeholder="First Name" name="first_name">
                <template #prefix-icon>
                    <UserIcon fill="#818181" />
                </template>
            </TextInput>
            <TextInput placeholder="Last Name" name="last_name">
                <template #prefix-icon>
                    <UserIcon fill="#818181" />
                </template>
            </TextInput>
        </div>
        <SpaceHeight :height="38" />
        <Gender />
        <SpaceHeight :height="38" />

        <TextInput placeholder="Phone Number" name="phone">
            <template #prefix-icon>
                <PhoneIcon fill="#818181" />
            </template>
        </TextInput>
        <SpaceHeight :height="38" />
        <TextInput placeholder="Password" :type="passwordType ? 'password' : 'text'" name="password">
            <template #prefix-icon>
                <LockIcon fill="#818181" />
            </template>
            <template #suffix-icon>
                <div class="cursor-pointer" @click="togglePasswordType">
                    <InvisibleIcon fill="#818181" v-if="passwordType" />
                    <VisibleIcon fill="#818181" v-else />

                </div>
            </template>
        </TextInput>
        <SpaceHeight :height="38" />
        <TextInput placeholder="Confirm Password" :type="confirmPasswordType ? 'password' : 'text'" name="confirm_password">
            <template #prefix-icon>
                <LockIcon fill="#818181" />
            </template>
            <template #suffix-icon>
                <div class="cursor-pointer" @click="toggleConfirmPasswordType">
                    <InvisibleIcon fill="#818181" v-if="confirmPasswordType" />
                    <VisibleIcon fill="#818181" v-else />
                </div>
            </template>
        </TextInput>
        <SpaceHeight :height="38" />

    </div>
</template>
<script setup>
import PhoneIcon from "@components/icons/commons/PhoneIcon.vue";
import LockIcon from "@components/icons/commons/LockIcon.vue";
import InvisibleIcon from "@components/icons/commons/InvisibleIcon.vue";
import VisibleIcon from "@components/icons/commons/VisibleIcon.vue";
import UserIcon from "@components/icons/commons/UserIcon.vue";
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import TextInput from "@components/ui/TextInput.vue";
import Gender from "./Gender.vue";
import { ref } from "vue";


const passwordType = ref(true);
const confirmPasswordType = ref(true);

const togglePasswordType = () => {
    passwordType.value = !passwordType.value;
}

const toggleConfirmPasswordType = () => {
    confirmPasswordType.value = !confirmPasswordType.value;
}
</script>