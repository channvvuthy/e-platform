<template>
    <div>
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

    </div>
</template>
<script setup>
import { ref } from "vue";
import PhoneIcon from "@components/icons/commons/PhoneIcon.vue";
import LockIcon from "@components/icons/commons/LockIcon.vue";
import InvisibleIcon from "@components/icons/commons/InvisibleIcon.vue";
import VisibleIcon from "@components/icons/commons/VisibleIcon.vue";
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import TextInput from "@components/ui/TextInput.vue";

const passwordType = ref(true);
const togglePasswordType = () => {
    passwordType.value = !passwordType.value;
}
</script>