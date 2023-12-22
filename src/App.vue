<script>
// Importo i componenti principali
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  // Nome dell'App 
  name: 'Avada Forum',

  // Dichiarazione dei componenti utilizzati
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<template>
  <!-- Struttura principale dell'applicazione Avada Forum -->
  <div>
    <!-- Componente per l'intestazione dell'app -->
    <Header />

    <!-- Contenuto principale dell'app -->
    <Main />

    <!-- Componente per il piè di pagina dell'app -->
    <Footer />
  </div>
</template>