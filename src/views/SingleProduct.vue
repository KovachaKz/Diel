<template>
    <div class="bg-extra-dark-gray padding-25px-tb page-title-small">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-xl-8 col-lg-6">
                    <h1 class="alt-font text-white font-weight-500 no-margin-bottom text-center text-lg-start">Search
                        results for "Blog"</h1>
                </div>
                <div class="col-12 col-xl-4 col-lg-6 breadcrumb justify-content-center justify-content-lg-end text-small alt-font md-margin-10px-top">
                    <ul class="xs-text-center">
                        <li><a href="index.html" class="text-white-hover">Home</a></li>
                        <li><a href="#" class="text-white-hover">Pages</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <section class="padding-eleven-lr xl-padding-two-lr xs-no-padding-lr bg-light-gray" id="down-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 blog-content">
                    <ul class="blog-grid blog-wrapper grid grid-loading grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                        <li class="grid-item wow animate__fadeIn">
                            <div class="blog-post border-radius-5px bg-white box-shadow-medium">
                                <div class="blog-post-image bg-medium-slate-blue">
                                    <a href="blog-post-layout-01.html" title="">
                                        <img src="" alt="">
                                    </a>
                                    <a href="blog-masonry.html" class="blog-category alt-font">Creative</a>
                                </div>

                                <div class="post-details padding-3-rem-lr padding-2-half-rem-tb">
                                    <a href="blog-masonry.html" class="alt-font text-small d-inline-block margin-10px-bottom">18 February 2020</a>
                                    <a href="blog-post-layout-01.html" class="alt-font font-weight-500 text-extra-medium text-extra-dark-gray margin-15px-bottom d-block">
                                        Creativity is nothing but a mind set free
                                    </a>
                                    <p>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...</p>
                                    <div class="d-flex align-items-center">
                                        <img class="avtar-image" src="https://via.placeholder.com/125x125" alt="" />
                                        <span class="alt-font text-small me-auto">By <a href="blog-masonry.html">Torrie asai</a></span>
                                        <a href="blog-post-layout-01.html" class="blog-like alt-font text-extra-small"><i
                                                class="far fa-heart"></i><span>28</span></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                <div class="col-12 d-flex justify-content-center margin-7-half-rem-top md-margin-5-rem-top wow animate__fadeIn">
                    <ul class="pagination-list pagination-style-01 text-small ">
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="feather icon-feather-arrow-left icon-extra-small d-xs-none"></i>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">01</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">02</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">03</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">04</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="feather icon-feather-arrow-right icon-extra-small  d-xs-none"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: 'SingleProduct'

};
</script>

<style scoped>
.pagination-style-01 .page-item .page-link {
    padding: 25% 0;
}
.pagination-list {
    align-items: center;
    font-weight: 500;
}
.blog-post-image img, .portfolio-image img {
    width: 100%;
}

.grid {
    list-style: none;
}

.grid-sizer {
    padding: 0 !important;
    margin: 0 !important;
}

/* gutter size */
.grid.gutter-very-small li {
    padding: 3px 3px;
}

.grid.gutter-small li {
    padding: 5px 5px;
}

.grid.gutter-medium li {
    padding: 7px 7px;
}

.grid.gutter-large li {
    padding: 10px 10px;
}

.grid.gutter-extra-large li {
    padding: 15px;
}

.grid.gutter-double-extra-large li {
    padding: 20px;
}

.grid.gutter-triple-extra-large li {
    padding: 30px;
}

/* grid 6 column */
.grid.grid-6col li {
    width: 16.67%;
    list-style: none;
}

.grid.grid-6col li.grid-item-double {
    width: 33.33%;
}

/* grid 5 column */
.grid.grid-5col li {
    width: 20%;
    list-style: none;
}

.grid.grid-5col li.grid-item-double {
    width: 40%;
}

/* grid 4 column */
.grid.grid-4col li {
    width: 25%;
    list-style: none;
}

.grid.grid-4col li.grid-item-double {
    width: 50%;
}

/* grid 3 column */
.grid.grid-3col li {
    width: 33.33%;
    float: left;
    list-style: none;
}

.grid.grid-3col li.grid-item-double {
    width: 66.67%;
}

/* grid 2 column */
.grid.grid-2col li {
    width: 50%;
    list-style: none;
}

.grid.grid-2col li.grid-item-double {
    width: 100%;
}

/* grid 1 column */
.grid.grid-1col li {
    width: 100%;
    list-style: none;
}

/* grid filter */
.grid-filter li {
    display: inline-block;
    float: none;
    padding: 0 20px;
    border: 0;
    position: relative;
}

.grid-filter li:first-child {
    padding-left: 0;
}

.grid-filter li:last-child {
    padding-right: 0;
}

.grid-filter li a {
    border: 0;
    border-bottom: 1px solid;
    border-color: transparent;
    color: #828282;
    padding-bottom: 2px;
}

.grid-filter > li.active > a, .grid-filter > li.active > a:focus, .grid-filter > li.active > a:hover, .grid-filter > li > a:hover {
    border: 0;
    color: inherit;
    border-bottom: 1px solid;
    color: #232323
}
</style>