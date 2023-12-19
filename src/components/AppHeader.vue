<script>
import LogoComponent from './LogoComponent.vue';
import HeaderMenu from './HeaderMenu.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: 'Header',
    data() {
        return {
            logoPath: '../../public/logo-2x.png',
            links: [
                { text: 'Home', url: '/', isActive: false },
                { text: 'Apple', url: '/', isActive: false },
                { text: 'Microsoft', url: '/', isActive: false },
                { text: 'Contact', url: '/', isActive: false },
                { text: 'Android', url: '/', isActive: false },
                { text: 'Forums', url: '/', isActive: false },
                { text: 'Contact Us', url: '/', isActive: true },

            ],
        }
    },
    components: {
        LogoComponent,
        HeaderMenu,
        ButtonComponent,
    }
};
</script>

<template>
    <header class="shadow">
        <div class="container d-flex align-items-center h-100">
            <LogoComponent :imgSrc="this.logoPath" />
            <HeaderMenu :links="this.links" />
            <ButtonComponent :text="'Join us'" :dimention="'ms_small'" :color="'ms_dark'" />
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ms_icon" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

header {
    height: 100px;
    background-color: $eastern-blue-color;
    color: $white-color;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    .ms_icon {
        margin-left: 50px;
        cursor: pointer;
    }
}
</style>