<script>
export default {
    // Nome del componente
    name: 'Menu',

    // Props ricevute dal componente genitore
    props: ['links'],
};
</script>

<template>
    <ul>
        <!-- Itera attraverso gli elementi dell'array di link -->
        <li v-for="link in links" :class="{ 'ms_active': link.isActive }">
            <!-- Link con URL dinamico e testo -->
            <a :href="link.url">{{ link.text }}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

ul {
    display: flex;
    margin: 0 25px 0 auto;
    height: 100%;

    li {
        padding: 0 25px;
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;

        /* Stile aggiunto se il link è attivo */
        &.ms_active::after {
            content: '◢';
            color: $eastern-blue-color;
            width: 100%;
            text-align: center;
            font-size: 2rem;
            rotate: 45deg;
            position: absolute;
            bottom: -38px;
            left: 0;
            z-index: 99;
        }

        a:hover {
            text-decoration: underline !important;
        }
    }
}
</style>