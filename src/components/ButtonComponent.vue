<script>
import { text } from '@fortawesome/fontawesome-svg-core';

export default {
    name: 'Button Component',
    props: ['text', 'dimention', 'color', 'icon']
};
</script>

<template>
    <button :class="[dimention, color]">
        {{ text }}
        <font-awesome-icon icon="fa-solid fa-chevron-right" v-if="icon === 'chevron'" class="ms_icon" />
        <font-awesome-icon icon="fa-solid fa-right-long" v-if="icon === 'arrow'" class="ms_icon" />
    </button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

button {
    text-transform: uppercase;
    color: inherit;
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;

    &.ms_big {
        padding: 18px 45px;
        font-size: 1.25rem;
    }

    &.ms_small {
        padding: 12px 24px;
    }

    &.ms_dark {
        background-color: $shark-color;
    }

    &.ms_light {
        background-color: $eastern-blue-color;
    }

    .ms_icon {
        margin-left: 10px;
        font-size: 12px;
    }
}
</style>