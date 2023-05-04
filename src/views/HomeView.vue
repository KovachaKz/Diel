<template>
    <div class="wrapper">
        <div class="container">
            <!-- <Hero/> -->
            <!-- <ImageCard/> -->
            
            <!-- <Jumbotron /> -->
            

            <!-- <div class="promo-products">
                <div class="title-and-controls">
                    <h2 class="title">Промо Продукти</h2>
                    <a type="button">Покажи всички</a>
                </div>
                <CarouselProducts/>
            </div> -->
            
            <!-- <CTA /> -->

            
            <!-- <div class="container my-5">
                <div class="row">
                    <div class="col-md-7">
                        <img src="../assets/images/map.png"  alt="">
                    </div>
                    <div class="col-md-5">
                        <h1 class="font-weight-light">Нашият магазин</h1>
                        <p class="mt-4">Голямо пролетно намаление на всички продукти</p>
                        <button type="button" class="btn btn-primary">Към Магазина</button>
                    </div>
                </div>
            </div> -->

            
            <!-- <div class="new-products">
                <div class="title-and-controls">
                    <h2 class="title"> Нови Продукти</h2>
                    <a type="button">Покажи всички</a>
                </div>
                <CarouselProducts />
            </div>

            <div class="cards">
                <div class="title-and-controls">
                    <h2 class="title">За всяка ваша стая</h2>
                    <a type="button">Покажи всички</a>
                </div>
                <Cards />
            </div> -->

            <!-- <div class="carousel-prod">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../assets/images/home.jpg" class="d-block w-100" alt="home">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../assets/images/bath.jpg" class="d-block w-100" alt="bath">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/home.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> -->
            <!-- <PartnersBoxes /> -->
            
        </div>
    </div>
</template>

<script lang="js">

// import Hero from '../components/Hero.vue';
// import Jumbotron from '../components/Jumbotron.vue';
// import CTA from '../components/CTA.vue';
// import Cards from '../components/Cards.vue';
// import ImageCard from '../components/ImageCard.vue';
// import CarouselProducts from '../components/CarouselProducts.vue'
// import PartnersBoxes from '../components/PartnersBoxes.vue'
// import { url } from 'inspector';
// import ParentModal from '../components/Parent-modal.vue';
export default {
    name: 'HomeView',
    data() {
        return {
            
        }
    },
    components: {
        // Hero,
        // Jumbotron,
        // CTA,
        // Cards,
        // ImageCard,
        // CarouselProducts,
        // PartnersBoxes
    },
}
</script>

<style scoped>
.show-categories {
    display: flex;
}

.title-and-controls {
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-wrap: wrap;
}



img {
    max-width: 100%;
}

</style>
<!-- <div class="promo-products">
    <div class="title-and-controls">
        <h1>Промо Продукти</h1>
        <span class='prev' @click="previous">
            <font-awesome-icon icon="fa-solid fa-arrow-left"/>
        </span>
        <span class='next' @click="next">
            <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </span>
    </div>
</div> -->