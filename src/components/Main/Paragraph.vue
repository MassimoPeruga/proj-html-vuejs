<script>
export default {
    name: 'Paragraph Section',
};
</script>

<template>
    <section>
        <div class="container">
            <h5>Avada Forum is th place to be</h5>
            <p>
                In quis lectus sed leo elementum faucibus in dapibus dictum.
                Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus
                dolor at, bibendum purus. Donec vehicula nec tortor ac finibus.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partial/variables' as *;

section {
    padding: 120px 0;
    text-align: center;
    background-color: $bizarre-color;

    p {
        font-size: 24px;
        font-weight: 300;
        width: 56%;
        margin: 0 auto;
        line-height: 46px;
    }
}
</style>