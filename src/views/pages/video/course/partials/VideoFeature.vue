<template>
  <div class="flex justify-between items-center" :class="appendClass">
    <FeatureItem v-for="item in featureItems" :key="item.text">
      <template #icon>
        <component :is="item.icon" />
      </template>
      <template #text>
        {{ item.value }}
      </template>
    </FeatureItem>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import VideoIcon from '@components/icons/features/VideoIcon.vue';
import QuizIcon from '@components/icons/features/QuizIcon.vue';
import PdfIcon from '@components/icons/commons/PdfIcon.vue';
import ChatIcon from '@components/icons/commons/ChatIcon.vue';
import CertificateIcon from '@components/icons/commons/CertificateIcon.vue';
import FeatureItem from './FeatureItem.vue';

const props = defineProps({
  features: {
    type: Object,
    default: () => ({
      has_certificate: 0,
      has_quiz: 0,
      has_support: 0,
      total_pdf: 0,
      total_video: 0,
    }),
  },
  appendClass: {
    type: String,
    default: () => 'px-5 mt-5 ',
  }
});

const featureItems = [
  { icon: VideoIcon, text: 'total_video', value: props.features.total_video || '0' },
  { icon: PdfIcon, text: 'total_pdf', value: props.features.total_pdf || '0' },
  { icon: ChatIcon, text: 'has_support', value: props.features.has_support ? 'Yes' : 'No' },
  { icon: QuizIcon, text: 'has_quiz', value: props.features.has_quiz ? 'Yes' : 'No' },
  { icon: CertificateIcon, text: 'has_certificate', value: props.features.has_certificate ? 'Yes' : 'No' },
];
</script>