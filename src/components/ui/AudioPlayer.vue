    <template>
        <div class="bg-chat rounded-2xl px-5 py-3 rounded-lg w-300 shadow">
            <div class=" flex items-center">
                <div class="bg-primary w-8 h-8 rounded-full flex items-center justify-center cursor-pointer mr-4"
                    @click="play" v-if="!isPlay">
                    <PlayIcon :size="18" />
                </div>
                <div class="bg-primary w-8 h-8 rounded-full flex items-center justify-center cursor-pointer mr-4"
                    @click="pause" v-if="isPlay">
                    <PauseIcon :size="18" />
                </div>
                <div :id="audioId" class="w-full flex-1"></div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-helper mt-2 text-xs">{{ duration }}</div>
                <div class="flex items-center">
                    <div class="bg-primary rounded-full items-center justify-center flex w-4 h-4 mr-3 mt-2">
                        <CheckIcon :size="16" fill="#FFFFFF" />
                    </div>
                    <div class="text-gray-helper mt-2 text-xs">{{ time }}</div>
                </div>
            </div>

        </div>
    </template>
<script setup>
import { onMounted, ref, defineProps } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import PlayIcon from "@components/icons/commons/PlayIcon.vue";
import PauseIcon from "@components/icons/commons/PauseIcon.vue";
import CheckIcon from "@components/icons/commons/CheckIcon.vue";
import { randomString } from '../../utils/common';

const waveform = ref(null);
const isPlay = ref(false);
const duration = ref(0);
const randomId = ref();

const props = defineProps({
    audioUrl: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    audioId: {
        type: String,
        required: true
    }
});

const play = () => {
    if (waveform.value) {
        waveform.value.play();
        isPlay.value = true;
    }
}

const pause = () => {
    if (waveform.value) {
        waveform.value.pause();
        isPlay.value = false;
    }
}

onMounted(() => {
    randomId.value = randomString();
    if (props.audioUrl) {
        waveform.value = WaveSurfer.create({
            container: `#${props.audioId}`,
            waveColor: '#818181',
            progressColor: '#383351',
            barGap: 6,
            barHeight: 1,
            barMinHeight: 1,
            barRadius: 6,
            barWidth: 4,
            url: props.audioUrl,
            height: 40,
        });

        waveform.value.on('ready', () => {
            duration.value = formatDuration(waveform.value.getDuration());
        });

        waveform.value.on('error', (error) => {
            console.error("Error loading waveform:", error);
        });
    }
});

function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
</script>
