<script>
export default {
    name: 'List',
    props: ['list',],
};
</script>

<template>
    <article>
        <h4 class="pseudo_element">{{ list.title }}</h4>
        <ul class="p-0">
            <li v-for="card in list.cards" class="row gx-3">
                <img :src="`/${card.image}`" alt="Card image" class="col-5">
                <div class="col-7">
                    <h6>{{ card.title }}</h6>
                    <div class="ms_info">
                        <time :datetime="card.date">{{ card.date }}</time> |
                        <span :class="{ 'comments': card.comments }">
                            <span v-if="card.comments">{{ card.comments }}</span> Comments
                            <span v-if="!card.comments">Off</span>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </article>
</template>

<style lang="scss" scoped>
h4 {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: 800;

    &.pseudo_element::after {
        left: 0;
        transform: translateX(0);
    }
}

ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h6 {
        font-size: 20px;
        font-weight: 800;
        line-height: 35px;
    }

    .ms_info {
        font-size: 14px;
        font-weight: 300;

        .comments {
            font-weight: 400;
        }
    }
}
</style>