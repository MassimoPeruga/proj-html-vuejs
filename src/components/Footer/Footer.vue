<script>
import Topics from './Topics.vue';
import FooterLinks from './FooterLinks.vue';
export default {
    name: 'Footer',
    components: {
        Topics,
        FooterLinks,
    }
};
</script>

<template>
    <footer>
        <Topics />
        <FooterLinks />
    </footer>
</template>

<style lang="scss" scoped></style>