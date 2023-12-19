<script>
export default {
    name: 'Menu',
    props: ['links',],
};
</script>

<template>
    <ul>
        <li v-for="link in links" :class="{ 'ms_active': link.isActive }">
            <a :href="link.url">{{ link.text }}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

ul {
    display: flex;
    margin: 0 25px 0 auto;
    height: 100%;

    li {
        padding: 0 25px;
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;

        &.ms_active::after {
            content: '◢';
            color: $eastern-blue-color;
            width: 100%;
            text-align: center;
            font-size: 2rem;
            rotate: 45deg;
            position: absolute;
            bottom: -23px;
            left: 0;
        }
    }
}
</style>