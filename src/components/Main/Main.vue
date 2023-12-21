<script>
import Jumbo from './Jumbo.vue';
import Paragraph from './Paragraph.vue';
import News from './News/News.vue';
import CallToAction from './CallToAction.vue';
import Forums from './Forums.vue';
import SignUp from './SignUp.vue';
import Form from './Form.vue';
export default {
    name: 'Main',
    components: {
        Jumbo,
        Paragraph,
        News,
        CallToAction,
        Forums,
        SignUp,
        Form,
    }
};
</script>

<template>
    <main>
        <Jumbo />
        <Paragraph />
        <News />
        <CallToAction :text="'Read our blog'" />
        <Forums />
        <CallToAction :text="'Go to our forum'" />
        <SignUp />
        <Form />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 90px;
}
</style>