<template>
    <div>
        <TextInput placeholder="Phone Number" name="phone">
            <template #prefix-icon>
                <PhoneIcon fill="#818181" />
            </template>
        </TextInput>
    </div>
</template>
<script setup>
import PhoneIcon from "@components/icons/commons/PhoneIcon.vue";
import TextInput from "@components/ui/TextInput.vue";

</script>