<template>
    <div>
        <TextInput placeholder="Phone Number" name="phone">
            <template #prefix-icon>
                <PhoneIcon fill="#818181" />
            </template>
        </TextInput>
        <SpaceHeight :height="38" />
        <TextInput placeholder="Password" type="password" name="password">
            <template #prefix-icon>
                <LockIcon fill="#818181" />
            </template>
            <template #suffix-icon>
                <div class="cursor-pointer">
                    <InvisibleIcon fill="#818181" />
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
import SpaceHeight from "@components/ui/SpaceHeight.vue";
import TextInput from "@components/ui/TextInput.vue";
</script>