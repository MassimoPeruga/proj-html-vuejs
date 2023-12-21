<script>
import Titles from './Titles.vue';
import Card from './Card.vue';
import Article from './Article.vue';
import List from './List.vue';
export default {
    name: 'News Section',
    components: {
        Titles,
        Card,
        Article,
        List,
    },
    data() {
        return {
            news: [
                {
                    title: 'Morbi vitae dui euismod voluptate sollicitudin',
                    date: 'October 11th, 2015',
                    comments: 2,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_25-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Vivamus pellenteque, felis quis varius',
                    date: 'October 11th, 2015',
                    comments: false,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_24-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Donec ornare pretium eget scelisque justo',
                    date: 'October 11th, 2015',
                    comments: false,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_23-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Cras malesuada et orci eget pharetra',
                    subtitle: 'Featured article',
                    description: 'In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venantis sed blandit dui dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus.',
                    image: 'featured_article_1_bg.jpg',
                    type: 'article',
                    class: 'col-12',
                    size: 'big',
                },
                {
                    title: 'Fusce sollicitudis nunc sed placerat varius',
                    date: 'October 11th, 2015',
                    comments: false,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_22-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Donec facilis soldates leo sit amet laoreet',
                    date: 'October 11th, 2015',
                    comments: false,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_21-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Proin eu purus sed aru aliquet curabir vens',
                    date: 'October 11th, 2015',
                    comments: false,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl',
                    image: 'post_feat_img_20-700x441.jpg',
                    type: 'card',
                    class: 'col-4',
                },
                {
                    title: 'Mauris viverra atisan ipsum eget felis primis efficitur varius',
                    subtitle: 'Reviewed product',
                    description: 'In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venantis, sed blandit dui, dolor at bibentum.',
                    image: 'featured_article_2_bg.jpg',
                    type: 'article',
                    class: 'col-8',
                    size: 'small',
                },
                {
                    title: 'Tutorials & Guides',
                    type: 'list',
                    class: 'col-4',
                    cards: [
                        {
                            title: 'Donec ornare pretium eget scelisque justo',
                            date: 'October 11th, 2015',
                            comments: false,
                            image: 'post_feat_img_23-177x142.jpg',
                        },
                        {
                            title: 'Fusce sollicitudin nunc sed placerat varius',
                            date: 'October 11th, 2015',
                            comments: false,
                            image: 'post_feat_img_22-177x142.jpg',
                        },
                        {
                            title: 'Proin eu purus sed aru alquet curabir vens',
                            date: 'October 11th, 2015',
                            comments: false,
                            image: 'post_feat_img_20-177x142.jpg',
                        },
                    ],
                },
            ]
        }
    },
};
</script>

<template>
    <section>
        <div class="container">
            <Titles :title="'All the latest news'" />
            <ul class="row row-cols-3 gx-4 gy-5">
                <li v-for="post in news" :class="post.class">
                    <Card v-if="post.type === 'card'" :img="`/${post.image}`" :title="post.title" :date="post.date"
                        :comments="post.comments" :description="post.description" />
                    <Article v-if="post.type === 'article'" :size="post.size" :img="`/${post.image}`" :title="post.title"
                        :subtitle="post.subtitle" :description="post.description" />
                    <List v-if="post.type === 'list'" :list="post" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>