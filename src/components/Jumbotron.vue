<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-7">
                <img src="../assets/images/Hero.jpg"  alt="">
            </div>
            <div class="col-md-5">
                <h1 class="font-weight-light">Добре Дошли в DIEL</h1>
                <p class="mt-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <button type="button" class="btn btn-primary">To Shop</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Jumbotron",
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    max-width: 100%;
}
</style>
