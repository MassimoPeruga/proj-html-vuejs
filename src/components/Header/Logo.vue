<script>
export default {
    // Nome del componente
    name: 'Logo',

    // Path dinamica ricevuta dal componente genitore
    props: ['imgSrc'],
};
</script>

<template>
    <!-- Immagine del logo con percorso dinamico -->
    <img :src="imgSrc" alt="Logo">
</template>

<style lang="scss" scoped>
img {
    height: 100%;
}
</style>