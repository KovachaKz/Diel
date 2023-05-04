<template>
    <div class="container">
        <!-- <div class="title-and-controls">
            <h2>За всяка една стая</h2>
            <a type="button">Покажи всички</a>
        </div> -->
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/images/office.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">За Офис</h5>
                        <a href="#" class="btn btn-primary">Към категорията</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/images/home.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">За Дома</h5>
                        <a href="#" class="btn btn-primary">Към категорията</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/images/bath.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">За Баня</h5>
                        <a href="#" class="btn btn-primary">Към категорията</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cards'
 
}
</script>

<style scoped>
/* .title-and-controls {
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
} */
</style>
