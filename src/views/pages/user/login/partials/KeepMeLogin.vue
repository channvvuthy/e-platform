<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            <div class="flex items-center justify-center h-7 w-7 bg-primary cursor-pointer rounded-md"
                @click="setRememberMe">
                <CheckIcon fill="#fff" v-if="isRememberMe" />
            </div>
            <p class="text-gray-helper pl-3">Keep me logged in </p>
        </div>
        <div class="cursor-ponter text-primary cursor-pointer">
            <p>Forget password?</p>
        </div>
        <input type="hidden" name="remember_me" v-model="isRememberMe"/>
    </div>
</template>
<script>
import CheckIcon from "@components/icons/commons/CheckIcon";
export default {
    components: {
        CheckIcon
    },
    data() {
        return {
            isRememberMe: true
        }
    },
    methods: {
        setRememberMe() {
            this.isRememberMe = !this.isRememberMe;
        }
    }

}
</script>