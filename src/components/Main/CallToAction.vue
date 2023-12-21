<script>
import Button from '../Common/Button.vue';
export default {
    name: 'Call To Action',
    props: ['text',],
    components: {
        Button,
    }
};
</script>

<template>
    <section>
        <Button :text="text" :dimention="'ms_big'" :color="'ms_dark'" :icon="'arrow'" />
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

section {
    background-color: $shark-color;
    color: $white-color;
    padding: 50px;
    display: flex;
    justify-content: center;
}
</style>