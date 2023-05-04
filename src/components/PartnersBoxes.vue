<template>
    <div class="partners">
        <h1>Нашите партньори</h1>
        <div class="partners-box">
            <div class="row">
                <div class="col col-4">
                    <div class="card">
                        <img src="../assets/images/logos/image1.png" class="card-img-top" alt="" width="130" height="130">
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <img src="../assets/images/logos/image2.jpg" class="card-img-top" alt="" width="130" height="130">
                    </div>
                </div>
                <div class="col col-4">
                    <div class="card">
                        <img src="../assets/images/logos/image3.png" class="card-img-top" alt="" width="130" height="130">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "PartnersBoxes",
   
}
</script>

<style scoped>
.partners-box .row {
    display: flex;
    margin-bottom: 100px;
}
</style>