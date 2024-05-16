<template>
    <div>
        <button @click="startRecording" :disabled="isRecording" v-if="!isRecording"
            class="bg-primary w-9 h-9 rounded-full flex items-center justify-center relative">
            <MicIcon fill="#FFFFFF" />
        </button>

        <button @click="stopRecording" v-if="isRecording"
            class="bg-primary w-9 h-9 rounded-full flex items-center justify-center relative">
            <div class="absolute left-0 top-0 w-9 h-9 cursor-pointer">
                <div class="absolute w-9 h-9 rounded-ful circle"></div>
                <div class="absolute w-9 h-9 rounded-ful circle"></div>
                <div class="absolute w-9 h-9 rounded-ful circle"></div>
                <div class="absolute w-9 h-9 rounded-ful circle"></div>
            </div>
            <MicIcon fill="#FFFFFF" />
        </button>
        <!-- <audio v-if="audioUrl" :src="audioUrl" controls></audio> -->
    </div>
</template>

<script>
import MicIcon from "@components/icons/commons/MicIcon.vue"
import './style.css';

export default {
    components: {
        MicIcon
    },
    data() {
        return {
            audioUrl: null,
            mediaRecorder: null,
            audioChunks: [],
            isRecording: false,
        };
    },
    methods: {

        async startRecording() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.ondataavailable = (event) => {
                    this.audioChunks.push(event.data);
                };
                this.mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/mp3' });
                    this.audioUrl = URL.createObjectURL(audioBlob);
                    this.$emit('onResult', this.audioUrl)
                    this.audioChunks = [];
                };
                this.mediaRecorder.start();
                this.isRecording = true;
            } catch (error) {
                console.error('Error accessing the microphone', error);
            }
        },
        stopRecording() {
            if (this.mediaRecorder) {
                this.mediaRecorder.stop();
                this.isRecording = false;
            }
        },
    },
};
</script>