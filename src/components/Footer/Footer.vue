<script>
import Topics from './Topics.vue';
import FooterLinks from './FooterLinks.vue';
export default {
    name: 'Footer',
    components: {
        Topics,
        FooterLinks,
    },
    data() {
        return {
            sections: [
                {
                    title: 'Avada tech forum',
                    paragraph: 'Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.',
                },
                {
                    title: 'Popular Topics',
                    topics: [
                        {
                            title: 'Nam a dolor voluptat massa auctor semper',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Sed euismond nunc urna fermentum arcu dapibus fringilla.',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Cras lacinia tellus id mauris finibus lacus molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Curabitur a scelerisque ligula',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                    ]
                },
                {
                    title: 'Recent Topics',
                    topics: [
                        {
                            title: 'Cras lacinia tellus id mauris finibus lacus molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Proin at ligula sagittis vestibulum nisi vitae',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Sed nec metus at est tincidunt elementum',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Nulla egestas nulla eu nulla suscipit molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                    ]
                },
                {
                    title: 'Latest Replies',
                    topics: [
                        {
                            title: 'Cras lacinia tellus id mauris finibus lacus molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Cras lacinia tellus id mauris finibus lacus molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Nulla egestas nulla eu nulla suscipit molestie',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                        {
                            title: 'Mauris ac nibh quis eros sagittis lacinia a et dui',
                            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut itaque ullam quo nam doloribus vero dolore voluptatum! Voluptatibus similique saepe omnis sit incidunt expedita? Laudantium porro repudiandae illum deserunt distinctio.',
                        },
                    ]
                },
            ]
        }
    }
};
</script>

<template>
    <footer>
        <Topics :sections="this.sections" />
        <FooterLinks />
    </footer>
</template>

<style lang="scss" scoped></style>