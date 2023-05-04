<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <!-- TOP HEADER -->
    <div class="header-top">
        <div class="container d-flex ms-0">
            <nav class="header-nav ">
        
                <a class="header-nav-link" href="*">За нас</a>
                <a class="header-nav-link" href="*">От майстора</a>
                <a class="header-nav-link" href="*">Новини</a>
                <a class="header-nav-link" href="*">Магазини</a>
                <a class="header-nav-link" href="*">Контакти</a>
                <a class="header-nav-link" href="*">Помощ</a>        
                
            </nav>
        </div>
    </div>
    <!-- TOP HEADER END -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <!-- BRAND -->
            <router-link to="/" class="navbar-brand">
                <img src="../assets/images/logos/transperant.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-center">
                Diel.bg
                        
            </router-link>
            <!-- BRAND END -->


            <!-- SEARCHBAR -->
            <div class = "search-box " role="search">
                <input class = "search-text" type="text" placeholder = "Search Anything">
                <a class = "search-btn" type="submit">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                </a>
            </div>
            <!-- SEARCHBAR -->

            <div class="order-lg-last flex-grow-1 flex-lg-grow-0 text-end">
                <!-- BUTTONS -->
                <div class="button-wrap">
                    <div class="user-dropdown">
                        <router-link to="/login" type="button" class="user-icon dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="outside">
                            <span class="user icon">
                                <font-awesome-icon icon="fa-solid fa-user" size="2xl"/>
                            </span>
                        </router-link>
                                
                        <form class="dropdown-menu p-4">
                            <div class="mb-3">
                                <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                                    <label class="form-check-label" for="dropdownCheck2">
                                        Запомни ме
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Вход</button>
                        </form>
                    </div>

                    <div class="shop-cart">

                        <router-link to="/cart">
                            <span class="cart icon">
                                <font-awesome-icon icon="fa-solid fa-shopping-cart" size="2xl"/>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- BUTTONS END -->



            <!-- TOGGLER -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- TOGGLER END -->

            <div class="collapse navbar-collapse" id="main_nav">
                
            </div> <!-- navbar-collapse.// -->
        </div> <!-- container-fluid.// -->
    </nav>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item dropdown">  <!-- Каталог -->
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Продукти</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="*"><small>Виж всички</small></a></li>

                    <!-- Категория -->
                    <li class="has-megasubmenu">
                        <a class="dropdown-item" href="#">Oсветление » </a>
                        <div class="megasubmenu dropdown-menu">
                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led2.jpg" alt="" width="50" height="50">
                                    <h6 class="title">LED</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">LED спотове</a></li>
                                        <li><a href="#">LED Крушки</a></li>
                                        <li><a href="#">LED Панел</a></li>
                                        <li><a href="#">LED захранване</a></li>
                                        <li><a href="#">LED ленти RGB</a></li>
                                        <li><a href="#">LED аплици</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Осветителни тела</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Плафони</a></li>
                                        <li><a href="#">Аплик</a></li>
                                        <li><a href="#">Луни</a></li>
                                        <li><a href="#">Настолни лампи</a></li>
                                        <li><a href="#">Крушки</a></li>
                                        <li><a href="#">Осветление за баня</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led1.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Категория енд -->

                    <!-- Категория -->
                    <li class="has-megasubmenu">
                        <a class="dropdown-item" href="#">Електрически материали » </a>
                        <div class="megasubmenu dropdown-menu">
                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">LED</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">#</a></li>
                                        <li><a href="#">6</a></li>
                                        <li><a href="#">LED аплици</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Осветителни тела</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Плафони</a></li>
                                        <li><a href="#">Аплик</a></li>
                                        <li><a href="#">Луни</a></li>
                                        <li><a href="#">Настолни лампи</a></li>
                                        <li><a href="#">Крушки</a></li>
                                        <li><a href="#">Осветление за баня</a></li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Категория енд -->

                    <!-- Категория -->
                    <li class="has-megasubmenu">
                        <a class="dropdown-item" href="#">Инструменти » </a>
                        <div class="megasubmenu dropdown-menu">
                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">LED</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">LED спотове</a></li>
                                        <li><a href="#">LED Крушки</a></li>
                                        <li><a href="#">LED Панел</a></li>
                                        <li><a href="#">LED захранване</a></li>
                                        <li><a href="#">LED ленти RGB</a></li>
                                        <li><a href="#">LED аплици</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Осветителни тела</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Плафони</a></li>
                                        <li><a href="#">Аплик</a></li>
                                        <li><a href="#">Луни</a></li>
                                        <li><a href="#">Настолни лампи</a></li>
                                        <li><a href="#">Крушки</a></li>
                                        <li><a href="#">Осветление за баня</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Категория енд -->

                    <!-- Категория -->
                    <li class="has-megasubmenu">
                        <a class="dropdown-item" href="#">Електрически материали » </a>
                        <div class="megasubmenu dropdown-menu">
                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">LED</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">LED спотове</a></li>
                                        <li><a href="#">LED Крушки</a></li>
                                        <li><a href="#">LED Панел</a></li>
                                        <li><a href="#">LED захранване</a></li>
                                        <li><a href="#">LED ленти RGB</a></li>
                                        <li><a href="#">LED аплици</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Осветителни тела</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Плафони</a></li>
                                        <li><a href="#">Аплик</a></li>
                                        <li><a href="#">Луни</a></li>
                                        <li><a href="#">Настолни лампи</a></li>
                                        <li><a href="#">Крушки</a></li>
                                        <li><a href="#">Осветление за баня</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                                    <h6 class="title">Консумативи</h6>
                                    <ul class="list-unstyled">
                                    <li><a href="#">Батерий</a></li>
                                    <li><a href="#">Бушони</a></li>
                                    <li><a href="#">Контакти</a></li>
                                    <li><a href="#">Разклонители</a></li>
                                    <li><a href="#">Градинско осветление</a></li>
                                    <li><a href="#">Разклонители и удължители</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Категория енд -->

                </ul>
            </li>

            <!-- <li class="nav-item dropdown has-megamenu">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Mega menu </a>
                <div class="dropdown-menu megamenu" role="menu">
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
            </li> -->

            <li class="nav-item">
                <a class="nav-link">Промоции</a>
            </li>

            <li class="nav-item">
                <a class="nav-link">Нови</a>
            </li>

            <li class="nav-item">
                <a class="nav-link">Марки</a>
            </li>
        </ul>
    </div>
</template>



<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar'
}

document.addEventListener("DOMContentLoaded", function(){

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu-cat').forEach(function(element){
  element.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

    // if (window.innerWidth < 992) {
    //     document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    //         everydropdown.addEventListener('hidden.bs.dropdown', function () {
    //         this.querySelectorAll('.megasubmenu').forEach(function(everysubmenu){
    //         everysubmenu.style.display = 'none';
    //         });
    //     })
    // });

  document.querySelectorAll('.has-submenu a').forEach(function(element){
    element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if(nextEl && nextEl.classList.contains('megasubmenu')) {	
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if(nextEl.style.display == 'block'){
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }
        }
    });
  }) // end foreach
}
// end if innerWidth
); 
</script>


<style scoped>

    /* NAVBARTOP */
    .header-top {
        /* display: none; */
        background-color: cornflowerblue;
    }

    .header-nav {
        display:flex;

    }

    .header-nav-link {
        position: relative;
        /* display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox; */
        display: flex;
        /* -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center; */
        align-items: center;
        padding: 0.5rem;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        background-color: rgba(0,0,0,0);
        -webkit-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-weight:bold;
        font-size:0.5rem
    }

    /* NAVBARTOP END */

    
    /* PILLS */
    .nav-pills {
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        flex-direction: row;
        justify-content:space-evenly;
        background-color: cornflowerblue;
    }
    .nav-pills .nav-link {
        background: none;
        border: 0;
        border-radius: var(--bs-nav-pills-border-radius);
        color: #fff;
    }
    /* PILLS END */


    /* SEARCHBOX */
    .search-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #2f3640;
        height: 50px;
        border-radius: 40px;
        padding: 10px;
    
    }
    .search-text {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: #fff;
        font-size: 16px;
        font-weight: normal;
        transition: .3s;
        line-height: 30px;
        width: 0px;
        /* width: 250px; */
    }

    .search-text::placeholder {
        color: #dbc5b0;
    }

    .search-btn {
        color: #fff;
        float: right !important;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #2f3640;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
        cursor: pointer;
        text-decoration: none;
    
    }

    .search-text:focus,
    .search-text:not(:placeholder-shown) {
        width: 500px;
        padding: 0 6px;
    }

 
    .search-box:hover > .search-text{
        width: 500px;
        padding: 0 6px;
    }

    .search-box:hover > .search-btn,
    .search-text:focus + .search-btn,
    .search-text:not(:placeholder-shown) + .search-btn {
        background: #fff;
        color:#2f3640;
    
    } 
    /* SEARCHBOX END*/


    
    /* BUTTONS */
    .button-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
    }

    .fa-2xl {
        font-size: 2em;
        vertical-align: -0.1875em;
        line-height: 0.03125em;
        color: #000;
        padding:0 10px 0 10px
    }

    
    .dropdown-toggle::after {
        display: none;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }
    /* BUTTONS END */

    
    /* .navbar .megamenu{
        padding: 1rem;
    }

    .categories-tree {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    } */

    @media screen and (min-width: 992px) {
        .navbar .has-megamenu {
            position:static!important;
        }
        .navbar .megamenu {
            left:0;
            right:0;
            width:100%;
            margin-top:0;
        }
        .megasubmenu { 
            left:100%;
            top:0;
            min-height: 100%;
            min-width:500px;
        }
        

        .dropdown-menu {
            > li:hover {
                .megasubmenu {
                display: block;
            }
                transition-duration: 100ms; 
            }
        } 
            
    }	
</style>