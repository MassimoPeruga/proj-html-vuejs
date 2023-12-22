<script>
// Importo i componenti necessari
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import Button from '../Common/Button.vue';

export default {
    // Nome del componente
    name: 'Header',

    // Dati locali del componente
    data() {
        return {
            // Percorso del logo
            logoPath: '/logo-2x.png',

            // Array di link per il menu
            links: [
                { text: 'Home', url: '/', isActive: true },
                { text: 'Apple', url: '/', isActive: false },
                { text: 'Microsoft', url: '/', isActive: false },
                { text: 'Contact', url: '/', isActive: false },
                { text: 'Android', url: '/', isActive: false },
                { text: 'Forums', url: '/', isActive: false },
                { text: 'Contact Us', url: '/', isActive: false },
            ],
        };
    },

    // Dichiarazione dei componenti utilizzati 
    components: {
        Logo,
        Menu,
        Button,
    },
};
</script>

<template>
    <!-- Intestazione dell'app con logo e menu -->
    <header class="shadow">
        <div class="container d-flex align-items-center h-100">
            <!-- Componente Logo con percorso immagine dinamico -->
            <Logo :imgSrc="this.logoPath" />

            <!-- Componente Menu con array di link -->
            <Menu :links="this.links" />

            <!-- Componente Button con testo, dimensione e colore dinamici -->
            <Button :text="'Join us'" :dimention="'ms_small'" :color="'ms_dark'" />

            <!-- Icona di ricerca FontAwesome -->
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ms_icon" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
/* Importo le variabili definite in _variables.scss */
@use '../../assets/scss/partial/variables' as *;

header {
    height: 90px;
    padding: 16px 0;
    background-color: $eastern-blue-color;
    color: $white-color;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;

    .ms_icon {
        margin-left: 50px;
        cursor: pointer;
    }
}
</style>