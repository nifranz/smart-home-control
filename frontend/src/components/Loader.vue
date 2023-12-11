<script setup>
const props = defineProps(['width', 'height', 'borderRadius']);

</script>
<template>
<span class="loader" :style="{
    'width': (props.width || '48') + 'px', 
    'height': (props.height || '48') + 'px',
    // 'border-radius': (props.borderRadius) || '5px',
    }
">
</span>  

</template>

<style>
.loader {
    border: 1px solid rgb(34, 77, 217);
    border-radius: 5px;
    /* border-style: solid;
    border-color: #000000; */
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>