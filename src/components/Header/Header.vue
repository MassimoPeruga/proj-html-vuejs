<script>
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import Button from '../Common/Button.vue';
export default {
    name: 'Header',
    data() {
        return {
            logoPath: '/logo-2x.png',
            links: [
                { text: 'Home', url: '/', isActive: true },
                { text: 'Apple', url: '/', isActive: false },
                { text: 'Microsoft', url: '/', isActive: false },
                { text: 'Contact', url: '/', isActive: false },
                { text: 'Android', url: '/', isActive: false },
                { text: 'Forums', url: '/', isActive: false },
                { text: 'Contact Us', url: '/', isActive: false },

            ],
        }
    },
    components: {
        Logo,
        Menu,
        Button,
    }
};
</script>

<template>
    <header class="shadow">
        <div class="container d-flex align-items-center h-100">
            <Logo :imgSrc="this.logoPath" />
            <Menu :links="this.links" />
            <Button :text="'Join us'" :dimention="'ms_small'" :color="'ms_dark'" />
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ms_icon" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

header {
    height: 90px;
    padding: 16px 0;
    background-color: $eastern-blue-color;
    color: $white-color;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;

    .ms_icon {
        margin-left: 50px;
        cursor: pointer;
    }
}
</style>