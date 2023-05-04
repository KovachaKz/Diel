<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <div class="header-top">
        <div class="container d-flex">
            <nav class="header-nav ">
        
                <a class="header-nav-link" href="*">За нас</a>
                <a class="header-nav-link" href="*">От майстора</a>
                <a class="header-nav-link" href="*">Новини</a>
                <a class="header-nav-link" href="*">Магазини</a>
                <a class="header-nav-link" href="*">Контакти</a>
                <a class="header-nav-link" href="*">Помощ</a>        
                <div class="header__sign-in d-flex align-items-center">
                    <a class="js-modal header-nav-link header__login" href="user/login">Вход</a>
                </div>
            </nav>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/images/logos/transperant.png" lt="Logo" width="100" height="100" class="d-inline-block align-text-center">
                <small>Diel.bg</small>
                        
            </router-link>
            
            <div class = "search-box " role="search">
                <input class = "search-text" type="text" placeholder = "Search Anything">
                <a class = "search-btn" type="submit">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                </a>
            </div>
            

            <div class="order-lg-last flex-grow-1 flex-lg-grow-0 text-end">
                <div class="button-wrap">

                    <ThemeButton/>

                    <div class="user-dropdown">
                        <router-link to="/login" type="button" class="user-icon dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="outside"><span class="user icon"><font-awesome-icon icon="fa-solid fa-user" size="2xl"/></span></router-link>
                                
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

                    <router-link to="/cart">
                        <span class="cart icon">
                            <font-awesome-icon icon="fa-solid fa-shopping-cart" size="2xl"/>
                        </span>
                    </router-link>
                </div>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
             <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
   
    <!-- <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
    </div> -->
    <!-- <div class=" dropdown-menu-dark"></div> -->
    <!-- <li class="nav-item dropdown"><a class="nav-link" href="#">Категории</a></li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       -->
    <nav class="navbar-nav nav-tabs flex-grow-1 pe-3">
        <li class="tab">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <a class="nav-link" href="#">Категории</a>
        </li>

        <li class="tab">
            <a class="dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ел. материали и осветление </a>
            <div class="megasubmenu dropdown-menu">

                <div class="row">

                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led1.jpg" alt="" width="50" height="50">
                        <h6 class="title">LED</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">LED спотове</a></li>
                            <li><a class="menu-item" href="*">LED Крушки</a></li>
                            <li><a class="menu-item" href="*">LED Панел</a></li>
                            <li><a class="menu-item" href="*">LED захранване</a></li>
                            <li><a class="menu-item" href="*">LED ленти RGB</a></li>
                            <li><a class="menu-item" href="*">LED аплици</a></li>
                        </ul>
                    </div>

                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led2.jpg" alt="" width="50" height="50">
                        <h6 class="title">Осветителни тела</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Плафони</a></li>
                            <li><a class="menu-item" href="*">Аплик</a></li>
                            <li><a class="menu-item" href="*">Луни</a></li>
                            <li><a class="menu-item" href="*">Настолни лампи</a></li>
                            <li><a class="menu-item" href="*">Крушки</a></li>
                            <li><a class="menu-item" href="*">Осветление за баня</a></li>
                        </ul>
                    </div>

                </div>

                <div class="row">
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led3.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>

                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led4.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>

        <li class="tab">
            <a class="dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Инструменти</a>
            <div class="megasubmenu dropdown-menu">

                <div class="row">
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                        <h6 class="title">LED</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">LED спотове</a></li>
                            <li><a class="menu-item" href="*">LED Крушки</a></li>
                            <li><a class="menu-item" href="*">LED Панел</a></li>
                            <li><a class="menu-item" href="*">LED захранване</a></li>
                            <li><a class="menu-item" href="*">LED ленти RGB</a></li>
                            <li><a class="menu-item" href="*">LED аплици</a></li>
                        </ul>
                    </div>
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led2.jpg" alt="" width="50" height="50">
                        <h6 class="title">Осветителни тела</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Плафони</a></li>
                            <li><a class="menu-item" href="*">Аплик</a></li>
                            <li><a class="menu-item" href="*">Луни</a></li>
                            <li><a class="menu-item" href="*">Настолни лампи</a></li>
                            <li><a class="menu-item" href="*">Крушки</a></li>
                            <li><a class="menu-item" href="*">Осветление за баня</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led6.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led8.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </li>

        <li class="tab">
            <a class="dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ПРОМО</a>
            <div class="megasubmenu dropdown-menu">

                <div class="row">
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led5.jpg" alt="" width="50" height="50">
                        <h6 class="title">LED</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">LED спотове</a></li>
                            <li><a class="menu-item" href="*">LED Крушки</a></li>
                            <li><a class="menu-item" href="*">LED Панел</a></li>
                            <li><a class="menu-item" href="*">LED захранване</a></li>
                            <li><a class="menu-item" href="*">LED ленти RGB</a></li>
                            <li><a class="menu-item" href="*">LED аплици</a></li>
                        </ul>
                    </div>
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led2.jpg" alt="" width="50" height="50">
                        <h6 class="title">Осветителни тела</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Плафони</a></li>
                            <li><a class="menu-item" href="*">Аплик</a></li>
                            <li><a class="menu-item" href="*">Луни</a></li>
                            <li><a class="menu-item" href="*">Настолни лампи</a></li>
                            <li><a class="menu-item" href="*">Крушки</a></li>
                            <li><a class="menu-item" href="*">Осветление за баня</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led6.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>
                    <div class="col-6-lg col-12">
                        <img src="../assets/images/prod/led8.jpg" alt="" width="50" height="50">
                        <h6 class="title">Консумативи</h6>
                        <ul class="list-unstyled">
                            <li><a class="menu-item" href="*">Батерий</a></li>
                            <li><a class="menu-item" href="*">Бушони</a></li>
                            <li><a class="menu-item" href="*">Контакти</a></li>
                            <li><a class="menu-item" href="*">Разклонители</a></li>
                            <li><a class="menu-item" href="*">Градинско осветление</a></li>
                            <li><a class="menu-item" href="*">Разклонители и удължители</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </li>
        
    </nav>
    
        
        
    <div class="offcanvas d-flex offcanvas-start  text-bg-dark"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">DIEL.bg</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div class="offcanvas-body">
            
        
        </div>
    </div>
    <!-- </div> -->
    
    
</template>

<script>
    import ThemeButton from '../components/ThemeButton.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Header",

        components: {
            ThemeButton,
        }
        
    }


</script>


<style scoped >

    .header-top {
        /* display: none; */
        font-size: 0.75rem;
        background-color: #fff;
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

    .navbar-nav {
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .nav-tabs {
        border-width: 1px;
        border-color: #dee2e6;
        border-radius: 0.375rem;
        
        /* border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border) */
    }

    /* .dropdown-menu-dark {
        display: inline;
        list-style: none;
    } */

    .dropdown-item {
        /* display: block; */
        width: 100%;
        padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
        clear: both;
        font-weight: 400;
        color: #000;
        text-align: inherit;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
    }

    .nav-link {
        /* display: block; */
        padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
        font-size: var(--bs-nav-link-font-size);
        font-weight: var(--bs-nav-link-font-weight);
        color: #000;
        text-decoration: none;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    .menu-item {
        color: var(--text-primary-color)
    }
    .offcanvas {
        position: fixed;
        top: 0;
        z-index: 1045;
        display: flex;
        flex-direction: column;
        max-width: 100%;
        color: var(--text-primary-color);
        visibility: hidden;
        background-color: var(--background-color-primary);
        background-clip: padding-box;
        outline: 0;
        transition: transform 0.3s ease-in-out;
    }

    .offcanvas.offcanvas-start {
        top: 125px;
        left: 0px;
        width: var(--bs-offcanvas-width);
        border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        transform: translateX(-100%);
    }

    .offcanvas-header {
        display: flex;
        justify-content: space-between;
        padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
        align-items: center;
        flex-wrap: wrap;
    }
    .offcanvas.show {
        visibility: visible
    }
    .offcanvas.showing,
    .offcanvas.show:not(.hiding) {
        transform: none;
    }

    /* .offcanvas-top {
        top: 100px;
        left: 0;
        width: max-content;
        transform: translateX(-100%)

    }  */

    .navbar > .container-fluid {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .button-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
    }
    /* .megasubmenu{ 
        left:0;
        top:50px;
        height: fit-content;
        width:500px;
        padding:1rem; 
        background-color: var(--background-color-secondary);

    } */

    .nav-tabs > li:hover .megasubmenu{
        
        display: flex;
        position: absolute;
        left: 250px;
        top: 194px;
        
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

    
    

    

    /* SEARCHBOX END */

    .col-12 {
        flex: 0 0 auto;
        width: 40%;
    }

    /* shipping cart */
    /* .cart-item-list {
        left: auto;
        right:0;
        box-shadow: 0 0 35px rgba(0,0,0,0.1);
        border-radius: 4px;
        border: 0;
        padding: 0;
        min-width: 250px;
        margin: 0;
    } */

    /* .cart-item-list .cart-item {
        display: flex;
        padding: 17px;
        border-bottom: 1px solid #ededed;
        position: relative;
    } */

    /* .cart-item-list .cart-item a.close {
        font-size: 16px;
        line-height: 15px;
        position: absolute;
        right: 15px;
        top: 15px;
        font-weight: 400;
    } */


    /* .cart-item-list .cart-item a.close:hover {
        color: #000; 
    } */


    /* .navbar .megamenu{
    padding: 1rem;
    } */
    /* .categories-tree {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    } */


    @media screen and (min-width: 992px) {
        /* .navbar .has-megamenu {
            position:static!important;
        } */

        /* .navbar .megamenu {
            left:0;
            right:0;
            width:100%;
            margin-top:0;
        } */

        /* .megasubmenu{ 
            left:100%;
            top:0;
            min-height: 100%;
            min-width:500px;
        } */
        
        

        .li ::marker {
            list-style: none;
        }

        .dropdown-menu[data-bs-popper] {
            top: 100%;
            left: 0;
            margin-top: 0.125rem;
        }

        /* .dropdown-menu-dark > li:hover .megasubmenu{
            display: block;
        } */
    }	


    @media screen and (max-width: 991px) {
        /* .navbar .has-megamenu {
            position:static!important;
        } */

        /* .navbar .megamenu {
            left:0;
            right:0;
            width:100%;
            margin-top:0;
        } */

        .megasubmenu{ 
            left:100%;
            top:0;
            min-height: 100%;
            min-width:500px;
        }
        
        
        /* .dropdown-menu-dark > li:hover .megasubmenu{
            display: block;
        } */

        .li ::marker {
            list-style: none;
        }
        
    }	

</style>