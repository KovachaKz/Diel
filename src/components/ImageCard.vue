<template>
    <div class="d-flex justify-content-center mt-3">
        <span class="text text-center">Намерете най-добрите продукти<br> Бързо и лесно</span> 
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3">
        <button class="btn btn-dark">Нашите Категорий</button> 
    </div>
    <div class="row mt-2 g-4">
        <div class="col-md-3">
            <div class="card p-1">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename">
                        <span>LED</span>
                     </div>
                    <div> <img src="../assets/images/prod/led1.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>осветление</span> </div>
                    <div> <img src="../assets/images/prod/led2.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Спотове</span> </div>
                    <div> <img src="../assets/images/prod/led3.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"><span>Полилеи</span> </div>
                    <div> <img src="../assets/images/prod/led4.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2tr5">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Лампи за</span> <span>вграждане</span> </div>
                    <div> <img src="../assets/images/prod/led5.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Лампиони</span> </div>
                    <div> <img src="../assets/images/prod/led6.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Лампи за</span> <span>таван</span> </div>
                    <div> <img src="../assets/images/prod/led7.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Крушки</span> </div>
                    <div> <img src="../assets/images/prod/led8.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ImageCard",
 
}
</script>

<style scoped>
.btn {
    height: 35px;
    width: 170px;
    border: none;
    border-radius: 20px;
    background-color: #633a9c;
    font-size: 14px;
    font-weight: 500
}

.text {
    font-size: 23px;
    font-weight: bold
}

.card {
    height: 130px;
    overflow: hidden;
    border: none;
    border-radius: 15px
}

.imagename {
    font-size: 14px;
    font-weight: bold
}
.d-flex {
    flex-direction: column;
}
@media only screen and (max-width: 768px) {
    .d-flex {
        flex-direction: row;
    }
}
</style>
