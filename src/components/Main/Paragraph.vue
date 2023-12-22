<script>
export default {
    // Nome del componente
    name: 'ParagraphSection',
};
</script>

<template>
    <section>
        <div class="container">
            <!-- Titolo della sezione -->
            <h5>Avada Forum is the place to be</h5>

            <!-- Paragrafo descrittivo -->
            <p>
                In quis lectus sed leo elementum faucibus in dapibus dictum.
                Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus
                dolor at, bibendum purus. Donec vehicula nec tortor ac finibus.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    padding: 120px 0;
    text-align: center;
    background-color: $bizarre-color;

    p {
        font-size: 24px;
        font-weight: 300;
        width: 56%;
        margin: 0 auto;
        line-height: 46px;
    }
}
</style>