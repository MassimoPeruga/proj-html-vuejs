<script>
import Jumbo from './Jumbo.vue';
import Paragraph from './Paragraph.vue';
import News from './News/News.vue';
export default {
    name: 'Main',
    components: {
        Jumbo,
        Paragraph,
        News,
    }
};
</script>

<template>
    <main>
        <Jumbo />
        <Paragraph />
        <News />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 90px;
}
</style>