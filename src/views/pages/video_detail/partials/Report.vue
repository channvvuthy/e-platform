<template>
    <div class="progress">
        <div class="barOverflow">
            <div class="bar"></div>
        </div>
        <span>100</span>%
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.querySelectorAll('.progress').forEach(function (progress) {
        var bar = progress.querySelector('.bar');
        var val = progress.querySelector('span');
        var perc = parseInt(val.textContent, 10);

        var animation = { p: 0 };
        var duration = 3000;

        var animate = function (currentTime) {
            if (!animation.startTime) {
                animation.startTime = currentTime;
            }
            var elapsedTime = currentTime - animation.startTime;
            var progress = Math.min(elapsedTime / duration, 1);

            bar.style.transform = 'rotate(' + (45 + (progress * 1.8 * perc)) + 'deg)';
            val.textContent = Math.floor(progress * perc);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    });

})
</script>
<style>
.progress {
    position: relative;
    margin: 4px;
    float: left;
    text-align: center;
}

.barOverflow {
    position: relative;
    overflow: hidden;
    width: 90px;
    height: 45px;
    margin-bottom: -14px;
}

.bar {
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;
    border-bottom-color: #0bf;
    border-right-color: #0bf;
}
</style>