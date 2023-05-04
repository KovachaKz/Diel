<template>
    <div class="container">
        <div class="row">
            <div class="col 12">
                <div class="bg-secondary text-white my-5 py-4 card">
                    <div class="card-body">
                        <font-awesome-icon icon="fa-solid fa-truck-fast" class="shipping-icon" />
                        <h1>Бърза и Лесна доставка!</h1>
                        <h2><strong>Безплатна доставка</strong> над 50лв!!!</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'CTA'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.shipping-icon {
    font-size: 7em;
}
@media only screen and (max-width: 768px) {
    .card-body {
        flex-direction: column;
    }
}
</style>
