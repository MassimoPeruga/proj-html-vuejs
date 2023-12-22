<script>
// Importa il componente Button 
import Button from '../Common/Button.vue';

export default {
    // Nome del componente
    name: 'Call To Action',

    // Props ricevute dal componente padre
    props: ['text'],

    // Dichiarazione dei componenti utilizzati
    components: {
        Button,
    },
};
</script>

<template>
    <section>
        <!-- Utilizzo del componente Button con le props passate dal componente padre -->
        <Button :text="text" :dimention="'ms_big'" :color="'ms_dark'" :icon="'arrow'" />
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    background-color: $shark-color;
    color: $white-color;
    padding: 50px;
    display: flex;
    justify-content: center;
}
</style>