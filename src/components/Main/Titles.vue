<script>
export default {
    name: 'Heading of a Section',
    props: ['title',],
};
</script>

<template>
    <div class="text-center">
        <h5>Phasellus eget metus</h5>
        <h2 class="pseudo_element">{{ title }}</h2>
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