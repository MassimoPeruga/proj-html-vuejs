<script>
export default {
    name: 'Topics Section',
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
    <section>
        <div class="container">
            <ul class="row g-5">
                <li v-for="section in this.sections" class="col-3">
                    <div>
                        <h4>{{ section.title }}</h4>
                        <p v-if="section.paragraph">{{ section.paragraph }}</p>
                        <ul v-if="section.topics" class="p-0">
                            <li v-for="topic in section.topics" class="ms_accordion">
                                <div>
                                    <h5 class="m-0">{{ topic.title }}</h5>
                                    <p>{{ topic.paragraph }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

section {
    padding: 78px 0;

    h4 {
        font-weight: 800;
        margin-bottom: 40px;
    }

    .ms_accordion {
        padding-left: 16px;
        position: relative;
        border-bottom: 1px solid $silver-calice-color;
        padding-bottom: 18px;
        margin-bottom: 18px;

        &::before {
            content: url('../../assets/img/chevron-right-solid.svg');
            color: inherit;
            position: absolute;
            top: 2px;
            left: 0;
        }

        h5 {
            letter-spacing: initial !important;
            font-weight: 600 !important;
            line-height: 30px;
        }

        p {
            display: none;
        }

        &:hover p {
            display: block;
        }
    }
}
</style>