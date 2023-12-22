<script>
export default {
    // Nome del componente
    name: 'Topics Section',
    // Props ricevute dal componente padre
    props: ['sections',],
};
</script>

<template>
    <section>
        <div class="container">
            <ul class="row g-5">
                <!-- Itera sulle sezioni passate come prop -->
                <li v-for="section in sections" class="col-3">
                    <div>
                        <!-- Titolo della sezione -->
                        <h4>{{ section.title }}</h4>
                        <!-- Mostra il paragrafo se presente -->
                        <p v-if="section.paragraph">{{ section.paragraph }}</p>
                        <!-- Se presentI mostra gli argomenti della sezione -->
                        <ul v-if="section.topics" class="p-0">
                            <!-- Itera sugli argomenti della sezione -->
                            <li v-for="topic in section.topics" class="ms_accordion">
                                <div>
                                    <!-- Titolo dell'argomento -->
                                    <h5 class="m-0">{{ topic.title }}</h5>
                                    <!-- Paragrafo dell'argomento -->
                                    <p>{{ topic.paragraph }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    padding: 78px 0;

    h4 {
        font-weight: 800;
        margin-bottom: 40px;
    }

    .ms_accordion {
        padding-left: 16px;
        position: relative;
        border-bottom: 1px solid $silver-calice-color;
        padding-bottom: 18px;
        margin-bottom: 18px;

        &::before {
            content: url('../../assets/img/chevron-right-solid.svg');
            color: inherit;
            position: absolute;
            top: 2px;
            left: 0;
        }

        h5 {
            letter-spacing: initial !important;
            font-weight: 600 !important;
            line-height: 30px;
        }

        p {
            display: none;
        }

        &:hover p {
            display: block;
        }
    }
}
</style>