<script>
// Importa il componente Button 
import Button from '../Common/Button.vue';

export default {
    // Nome del componente
    name: 'Form section',

    // Dichiarazione dei componenti utilizzati
    components: {
        Button,
    },
};
</script>

<template>
    <section>
        <div class="ms_container">
            <h3>Subscribe to our Newsletter</h3>

            <!-- Modulo di iscrizione alla newsletter -->
            <form class="row">
                <!-- Campo di input per l'indirizzo email -->
                <div class="col-8">
                    <input type="email" required placeholder="Insert your email*">
                </div>

                <!-- Pulsante di invio (utilizzando il componente Button) -->
                <div class="col-4">
                    <Button :text="'Send'" :dimention="'ms_big'" :color="'ms_dark'" />
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    background-color: $bizarre-color;
    text-align: center;
    padding: 100px 0 120px 0;

    .ms_container {
        width: 50%;
        margin: 0 auto;

        h3 {
            margin-bottom: 42px;
        }

        form {
            color: $white-color;

            input {
                width: 100%;
                height: 100%;
                border: 1px solid $silver-calice-color;
                padding-left: 12px;

                &::placeholder {
                    color: $shark-color;
                }
            }

            button {
                width: 100%;
                justify-content: center;
            }
        }
    }
}
</style>