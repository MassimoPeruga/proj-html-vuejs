<script>
// Importa i componenti necessari
import Jumbo from './Jumbo.vue';
import Paragraph from './Paragraph.vue';
import News from './News/News.vue';
import CallToAction from './CallToAction.vue';
import Forums from './Forums.vue';
import SignUp from './SignUp.vue';
import Form from './Form.vue';

export default {
    // Nome del componente
    name: 'Main',

    // Dichiarazione dei componenti utilizzati
    components: {
        Jumbo,
        Paragraph,
        News,
        CallToAction,
        Forums,
        SignUp,
        Form,
    },
};
</script>

<template>
    <main>
        <!-- Componente Jumbo -->
        <Jumbo />

        <!-- Componente Paragraph -->
        <Paragraph />

        <!-- Componente News -->
        <News />

        <!-- Componente CallToAction -->
        <CallToAction :text="'Read our blog'" />

        <!-- Componente Forums -->
        <Forums />

        <!-- Componente CallToAction -->
        <CallToAction :text="'Go to our forum'" />

        <!-- Componente SignUp -->
        <SignUp />

        <!-- Componente Form -->
        <Form />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 90px;
}
</style>