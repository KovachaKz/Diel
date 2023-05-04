<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <footer class="text-center text-lg-center bg-dark text-muted">
        <div class="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
                <span>Намерете ни в социалните мрежи:</span>
            </div>

            <div>
                <a href="" class="me-4 text-reset">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                </a>
                <a href="" class="me-4 text-reset">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="" class="me-4 text-reset">
                    <font-awesome-icon icon="fa-brands fa-google" />
                </a>
                <a href="" class="me-4 text-reset">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
            </div>
        </div>

        <section class="">
            <div class="container text-center text-md-center mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>DIEL PALAZOV ЕОД
                        </h6>
                        <p>Lorem ipsumdolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Катагории</h6>
                        <p><a href="#!" class="text-reset">Консумативи</a></p>
                        <p><a href="#!" class="text-reset">Ел.Компоненти</a></p>
                        <p><a href="#!" class="text-reset">Захранване</a></p>
                        <p><a href="#!" class="text-reset">Инструменти</a></p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Линкове</h6>
                        <p><a href="#!" class="text-reset">Цени</a></p>
                        <p><a href="#!" class="text-reset">Настройки</a></p>
                        <p><a href="#!" class="text-reset">Поръчки</a></p>
                        <p><a href="#!" class="text-reset">Помощ</a></p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Контакти</h6>
                        <p><font-awesome-icon icon="fa-solid fa-map" /> Бул.'А.Батенберг'</p>
                        <p><font-awesome-icon icon="fa-solid fa-envelope"/>info@example.com</p>
                        <p><font-awesome-icon icon="fa-solid fa-phone"/> + 01 234 567 88</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="https://ibpt.com/">IBPT</a>
        </div>
    </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    position: relative;
}
main {
    margin-bottom: 220px;
}
.footer-bs{
 position: absolute;
 width: 100%;
 min-height: 320px;
 bottom: 40px;
 left: 0;
}
</style>
