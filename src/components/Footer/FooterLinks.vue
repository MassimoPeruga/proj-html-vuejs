<script>
export default {
    name: 'Links Section',
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    },
};
</script>

<template>
    <section>
        <div class="container">
            <p><span>&#169;</span> Copyright 2012-2020 | Avada Theme by <a href="/">Theme Fusion</a> | All Rights Reserved |
                Poered by <a href="/">WordPress</a></p>
            <ul>
                <li>
                    <a href="/" class="facebook"><font-awesome-icon icon="fa-brands fa-facebook-f" class="ms_icon" /></a>
                </li>
                <li>
                    <a href="/" class="twitter"><font-awesome-icon icon="fa-brands fa-x-twitter" class="ms_icon" /></a>
                </li>
                <li>
                    <a href="/" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" class="ms_icon" /></a>
                </li>
                <li>
                    <a href="/" class="youtube"><font-awesome-icon icon="fa-brands fa-youtube" class="ms_icon" /></a>
                </li>
            </ul>
        </div>
        <button @click="scrollToTop"><font-awesome-icon icon="fa-solid fa-chevron-up" /></button>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

section {
    border-top: 1px solid $silver-calice-color;
    height: 120px;
    display: flex;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;

        p {
            font-weight: 300;
            margin: 0;

            a {
                font-weight: 400;

                &:hover {
                    text-decoration: underline !important;
                }
            }
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            gap: 8px;

            a {
                color: $white-color;
                width: 43px;
                height: 43px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                &.facebook {
                    background-color: $san-marino-color;
                }

                &.twitter {
                    background-color: $shark-color;
                }

                &.instagram {
                    background-color: #3f729b;
                }

                &.youtube {
                    background-color: $totem-pole-color;
                }

                .ms_icon {
                    font-size: 18px;
                    color: $white-color;
                }

            }
        }
    }

    button {
        position: fixed;
        right: 70px;
        bottom: 0;
        padding: 7px 14px;
        background-color: $shark-darkmuted-color;
        color: $white-color;
        border-radius: 5px 5px 0 0;
    }
}
</style>