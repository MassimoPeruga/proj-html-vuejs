<script>
export default {
    // Nome del componente
    name: 'ButtonComponent',

    // Props ricevute dal componente genitore
    props: ['text', 'dimention', 'color', 'icon'],
};
</script>

<template>
    <!-- Pulsante con classi, testo e icone dinamiche in base alle props ricevute -->
    <button :class="[dimention, color]">
        {{ text }}

        <font-awesome-icon icon="fa-solid fa-chevron-right" v-if="icon === 'chevron'" class="ms_icon" />
        <font-awesome-icon icon="fa-solid fa-right-long" v-if="icon === 'arrow'" class="ms_icon" />
    </button>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

button {
    text-transform: uppercase;
    color: inherit;
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;

    .ms_icon {
        margin-left: 10px;
        font-size: 12px;
    }

    /* Classi dinamiche in base alle proprietà ricevute */
    &.ms_big {
        padding: 18px 45px;
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
}
</style>