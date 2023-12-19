<script>
export default {
    name: 'Logo',
    props: ['imgSrc',],
};
</script>

<template>
    <img :src="imgSrc" alt="Logo">
</template>

<style lang="scss" scoped>
img {
    height: 70%;
}
</style>