<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'Jumbotron',
    components: {
        ButtonComponent,
    }
};
</script>

<template>
    <div class="ms_jumbo">
        <div class="container">
            <h1>Tech Forum!</h1>
            <h3>Discuss all the latest technology news and trands</h3>
            <ButtonComponent :text="'Get Avada now!'" :dimention="'ms_big'" :color="'ms_light'" :icon="'chevron'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.ms_jumbo {
    height: 850px;
    padding-top: 300px;
    background-image: url(../assets/img/home_slider_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: $white-color;

    h1 {
        font-size: 6rem;
        font-weight: 800;
        margin-bottom: 40px;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 35px;
    }
}
</style>