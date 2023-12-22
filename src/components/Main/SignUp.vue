<script>
// Importa il componente Button 
import Button from '../Common/Button.vue';

export default {
    // Nome del componente
    name: 'Sign Up',

    // Dichiarazione dei componenti utilizzati
    components: {
        Button,
    },
};
</script>

<template>
    <section class="row m-0">
        <div class="col-3">
            <h2>Hey! Join to our Community</h2>

            <p>
                Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus.
                Curabitur feugiat voluptate purus ipsum dolores ficilis uns era
            </p>

            <!-- Utilizzo del componente Button per il pulsante di registrazione -->
            <Button :text="'Sign Up'" :dimention="'ms_big'" :color="'ms_light'" :icon="'chevron'" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    height: 540px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $white-color;
    background-image: url('../../assets/img/join_now_cta_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            line-height: 65px;
            margin-bottom: 38px;
        }

        p {
            font-size: 12px;
            margin-bottom: 36px;
        }
    }
}
</style>