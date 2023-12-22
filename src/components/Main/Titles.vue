<script>
export default {
    // Nome del componente
    name: 'Heading of a Section',
    // Props ricevute dal componente padre
    props: ['title',],
};
</script>

<template>
    <div class="text-center">
        <h5>Phasellus eget metus</h5>
        <h2 class="pseudo_element">{{ title }}</h2>
        <!-- Stili dello Pseudo elemento per la linea decorativa definiti nel file _common.scss -->
    </div>
</template>

<style lang="scss" scoped>
div {
    padding-top: 120px;
}

h2 {
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 64px;
}
</style>