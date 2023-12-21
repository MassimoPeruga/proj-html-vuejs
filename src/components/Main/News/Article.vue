<script>
import Button from '../../Common/Button.vue';
export default {
    name: 'Article',
    props: ['size', 'img', 'title', 'subtitle', 'description',],
    components: {
        Button,
    }
};
</script>

<template>
    <article :style="{ backgroundImage: `url(${img})` }">
        <h5 :class="{ 'ms_higher': size === 'big' }">{{ subtitle }}</h5>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <Button :text="'Read more'" :dimention="'ms_big'" :color="'ms_dark'" :icon="'chevron'" />
    </article>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/partial/variables' as *;

article {
    color: $white-color;
    padding: 96px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;

    .ms_higher {
        margin-top: 146px;
    }

    h3 {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 38px;
    }

    p {
        margin-bottom: 32px;
    }
}
</style>