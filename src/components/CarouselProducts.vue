<template>
    <div class="landing-categories">
        <div class="categories-tree">
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led1.jpg" alt="" width="100" height="100">
                </a>
                <p>Led</p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led2.jpg" alt="" width="100" height="100">
                </a>
                <p>Smart осветление</p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led3.jpg" alt="" width="100" height="100">
                </a>
                <p>Спотове</p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led4.jpg" alt="" width="100" height="100">
                </a>
                <p>Полилеи</p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led5.jpg" alt="" width="100" height="100">
                </a>
                <p>Лампи за вграждане </p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led6.jpg" alt="" width="100" height="100">
                </a>
                <p>Лампиони </p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led7.jpg" alt="" width="100" height="100">
                </a>
                <p>Лампи за таван</p>
            </article>
            <article>
                <a href="*">
                    <img src="../assets/images/prod/led8.jpg" alt="" width="100" height="100">
                </a>
                <p>Крушки</p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CarouselProducts'
 
}
</script>

<style scoped>
/* .title-and-controls {
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
} */
.categories-tree {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

@media only screen and (max-width: 768px) {
    /* .categories-tree {
        flex-direction: column;
    } */
}
</style>