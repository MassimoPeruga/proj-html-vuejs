<script>
export default {
    name: 'Card',
    props: ['img', 'title', 'date', 'comments', 'description',],
};
</script>

<template>
    <article>
        <img :src="img" alt="Post image" class="img-fluid">
        <h6>{{ title }}</h6>
        <div>
            <time :datetime="date">{{ date }}</time> |
            <span :class="{ 'comments': comments }">
                <span v-if="comments">{{ comments }}</span>
                Comments
                <span v-if="!comments">Off</span>
            </span>
        </div>
        <p>{{ description }}</p>
    </article>
</template>

<style lang="scss" scoped>
article {
    font-size: 15.5px;

    img {
        margin-bottom: 18px;
    }

    h6 {
        margin-bottom: 14px;
        font-size: 18px;
        font-weight: 800;
    }

    div {
        font-weight: 300;
        margin-bottom: 23px;
    }

    .comments {
        font-weight: 400;
    }

    p {
        line-height: 32px;
    }
}
</style>