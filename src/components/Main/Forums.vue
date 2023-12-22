<script>
// Importa il componente Titles
import Titles from './Titles.vue';
export default {
    // Nome del componente
    name: 'Forums Section',
    // Dichiarazione dei componenti utilizzati
    components: {
        Titles,
    },
    // Dati locali del componente
    data() {
        return {
            // Array di oggetti link per le sezioni del forum
            links: [
                {
                    icon: 'fa-solid fa-file-lines',
                    text: 'News & Community',
                },
                {
                    icon: 'fa-brands fa-apple',
                    text: 'Apple Forum',
                },
                {
                    icon: 'fa-brands fa-windows',
                    text: 'Microsoft Forum',
                },
                {
                    icon: 'fa-brands fa-android',
                    text: 'Android Forum',
                },
                {
                    icon: 'fa-solid fa-mug-saucer',
                    text: 'General Discussion',
                },
                {
                    icon: 'fa-solid fa-cubes',
                    text: 'Apps & Software',
                },
                {
                    icon: 'fa-solid fa-laptop',
                    text: 'Gadgets & Stuff',
                },
                {
                    icon: 'fa-solid fa-wrench',
                    text: 'Tutorials & Guides',
                },
            ]
        }
    }
};
</script>

<template>
    <section>
        <div class="container">
            <!-- Utilizzo del componente Titles -->
            <Titles :title="'Forum Sections'" />
            <ul class="row g-5">
                <!-- Itero per ogni oggetto dell'array -->
                <li v-for="link in this.links" class="col-3">
                    <a href="/">
                        <div>
                            <font-awesome-icon :icon="link.icon" class="ms_icon" />
                        </div>
                        <strong>{{ link.text }}</strong>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

section {
    background-color: $bizarre-color;
    padding-bottom: 135px;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: $white-color;
        border-top: 3px solid $eastern-blue-color;
        padding: 44px 0 75px 0;

        div {
            background-color: $salmon-color;
            color: $white-color;
            width: 77.5px;
            height: 77.5px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .ms_icon {
                font-size: 40px;
            }
        }

        strong {
            margin-top: 20px;
            font-size: 19px;
            font-weight: 800;
        }
    }
}
</style>