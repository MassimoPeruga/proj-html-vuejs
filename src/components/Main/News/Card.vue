<script>
export default {
    // Nome del componente
    name: 'Card',

    // Props ricevute dal componente padre
    props: ['img', 'title', 'date', 'comments', 'description'],
};
</script>

<template>
    <article>
        <!-- Immagine della card -->
        <img :src="img" alt="Post image" class="img-fluid">

        <!-- Titolo della card -->
        <h6>{{ title }}</h6>

        <div>
            <!-- Data dell'articolo -->
            <time :datetime="date">{{ date }}</time> |

            <!-- Conteggio dei commenti con gestione del testo condizionale -->
            <span :class="{ 'comments': comments }">
                <span v-if="comments">{{ comments }}</span> Comments
                <span v-if="!comments">Off</span>
            </span>
        </div>

        <!-- Contenuto dell'articolo -->
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