<template>
    <section class="wow animate__fadeIn bg-light-gray padding-25px-tb page-title-small" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-xl-8 col-lg-6">
                    <h1 class="alt-font text-extra-dark-gray font-weight-500 no-margin-bottom text-center text-lg-start">Checkout</h1>
                </div>
                <div class="col-12 col-xl-4 col-lg-6 breadcrumb justify-content-center justify-content-lg-end text-small alt-font md-margin-10px-top">
                    <ul class="xs-text-center">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop-wide.html">Shop</a></li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="wow animate__fadeIn checkout" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12" id="accordion1">
                    <!--start tab content -->
                    <div class="d-sm-flex justify-content-center align-items-center padding-10px-bottom text-center">
                        <i class="feather icon-feather-user text-fast-blue margin-10px-right"></i>
                        <span class="text-extra-dark-gray alt-font">Returning customer?&nbsp;</span><a class="accordion-toggle text-extra-dark-gray text-decoration-underline" data-bs-toggle="collapse" data-bs-parent="#accordion1" href="#collapseOne"><span class="alt-font">Click here to login</span></a>
                    </div>
                    <div id="collapseOne" class="collapse text-center" data-bs-parent="#accordion1">
                        <div class="w-40 mx-auto margin-4-half-rem-tb text-start lg-w-50 sm-w-100">
                            <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the billing section.</p>
                            <div class="row margin-10px-bottom text-start">
                                <div class="col-6">
                                    <label class="margin-15px-bottom">Username or email <span class="text-radical-red">*</span></label>
                                    <input class="small-input" type="email" name="email" placeholder="Enter your email">
                                </div>
                                <div class="col-6">
                                    <label class="margin-15px-bottom">Password <span class="text-radical-red">*</span></label>
                                    <input class="small-input" type="password" name="password" placeholder="Enter your password">
                                </div>
                            </div>
                            <span class="d-block w-100 d-flex align-items-center margin-25px-bottom">
                                <input class="d-inline w-auto mb-0 margin-10px-right" type="checkbox" name="checkbox">
                                <span>Remember me</span>    
                            </span>
                            <a href="#" class="btn btn-medium btn-dark-gray d-block margin-20px-bottom">Login</a>
                            <p class="text-end"><a href="#" class="btn btn-link  btn-medium text-extra-dark-gray margin-20px-bottom">Lost your password?</a></p>
                        </div>
                    </div>
                </div>
                <!-- end tab content -->
                <div class="col-md-12">
                    <!-- start tab content -->
                    <div class="bg-transparent">
                        <div class="d-sm-flex justify-content-center align-items-center text-center">
                            <i class="feather icon-feather-scissors text-fast-blue margin-10px-right"></i>
                            <span class="text-extra-dark-gray alt-font">Have a coupon?&nbsp;</span><a class="accordion-toggle text-extra-dark-gray text-decoration-underline" data-bs-toggle="collapse" data-bs-parent="#accordion1" href="#collapseTwo"><span class="alt-font">Click here to enter your code</span></a>
                        </div>
                        <div id="collapseTwo" class="collapse">
                            <div class="w-40 mx-auto margin-4-half-rem-tb text-start lg-w-50 sm-w-100">
                                <label class="margin-15px-bottom">If you have a coupon code, please apply it below. <span class="text-radical-red">*</span></label>
                                <input class="small-input margin-25px-bottom" type="text" placeholder="Enter coupon code">
                                <a href="#" class="btn btn-medium btn-dark-gray d-block margin-20px-bottom">Apply coupon</a>
                            </div>
                        </div>
                    </div>
                    <!-- end tab content -->
                </div>
            </div>
        </div>
    </section>

    <section class="pt-0 wow animate__fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7 col-md-6 padding-70px-right lg-padding-40px-right md-padding-15px-right">
                    <span class="alt-font text-large text-extra-dark-gray margin-40px-bottom d-inline-block font-weight-500">Billing details</span>
                    <form class="">
                        <div class="row">
                            <div class="col-md-6 margin-10px-bottom">
                                <label class="margin-15px-bottom">First name <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>
                            <div class="col-md-6 margin-10px-bottom">
                                <label class="margin-15px-bottom">Last name <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>    
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">Company name (optional)</label>
                                <input class="small-input" type="text">
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom" for="contry">Country <span class="text-radical-red">*</span></label>
                                <select name="contry" id="contry" class="small-input">
                                    <option>Select a country</option>
                                    
                                    <option value="Bulgaria">Bulgaria</option>
                                    
                                </select>
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">Street address <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" placeholder="House number and street name">
                                <input class="small-input" type="text" placeholder="Apartment,suite,unit etc. (optional)">
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">Town / City <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom" for="state">State <span class="text-radical-red">*</span></label>
                                <select name="state" id="state" class="small-input">
                                    <option>Select a state</option>
                                </select>
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">ZIP <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">Phone <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>
                            <div class="col-12 margin-10px-bottom">
                                <label class="margin-15px-bottom">Email address <span class="text-radical-red">*</span></label>
                                <input class="small-input" type="text" >
                            </div>
                            <!-- start tab content -->    
                            <div class="col-md-12 position-relative checkout-accordion">
                                <p class="title mb-2 d-flex">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto mb-0 me-2 mt-1" type="checkbox" name="account">
                                        <span class=" d-inline-block text-decoration-none">Create an account?</span> 
                                        <a class="accordion-toggle text-black" data-bs-toggle="collapse" data-bs-parent="#accordion1" href="#collapseThree"></a>
                                    </label>
                                </p>
                                <div id="collapseThree" class="collapse">
                                    <div class="padding-25px-left margin-2-half-rem-bottom md-no-padding-left">
                                        <label class="margin-15px-bottom">Account username <span class="text-radical-red">*</span></label>
                                        <input class="small-input" type="text" placeholder="Enter username" >
                                        <label class="margin-15px-bottom">Create account password <span class="text-radical-red">*</span></label>
                                        <input class="small-input" type="password" placeholder="Enter password" >      
                                    </div>
                                </div>
                            </div>
                            <!-- end tab content -->
                            <!-- start tab content -->
                            <div class="col-md-12 checkout-accordion">
                                <p class="title mb-2 d-flex">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto mb-0 me-2 mt-1" type="checkbox" name="account">
                                        <span class=" d-inline-block text-decoration-none">Ship to a different address?</span> 
                                        <a class="accordion-toggle text-black" data-bs-toggle="collapse" data-bs-parent="#accordion1" href="#collapseFour"></a>
                                    </label>
                                </p>
                                <div id="collapseFour" class="collapse">
                                    <div class="padding-25px-left margin-2-half-rem-bottom md-no-padding-left">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label class="margin-15px-bottom">First name <span class="text-radical-red">*</span></label>
                                                <input class="small-input" type="text" >
                                            </div>
                                            <div class="col-md-6">
                                                <label class="margin-15px-bottom">Last name <span class="text-radical-red">*</span></label>
                                                <input class="small-input" type="text" >
                                            </div>    
                                            <div class="col-12">
                                                <label class="margin-15px-bottom">Company name (optional)</label>
                                                <input class="small-input" type="text">
                                            </div>
                                            <div class="col-12">
                                                <label class="margin-15px-bottom" for="shipping-contry">Country <span class="text-radical-red">*</span></label>
                                                <select name="contry" id="shipping-contry" class="small-input">
                                                    <option>Select a Country</option>
                                                    
                                                    <option value="Bulgaria">Bulgaria</option>
                                                
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <label class="margin-15px-bottom">Street address <span class="text-radical-red">*</span></label>
                                                <input class="small-input" type="text" placeholder="House number and street name">
                                                <input class="small-input" type="text" placeholder="Apartment,suite,unit etc. (optional)">
                                            </div>
                                            <div class="col-12">
                                                <label class="margin-15px-bottom">Town / City <span class="text-radical-red">*</span></label>
                                                <input class="small-input" type="text">
                                            </div>
                                            <div class="col-12">
                                                <label class="margin-15px-bottom" for="shipping-state">State <span class="text-radical-red">*</span></label>
                                                <select name="state" id="shipping-state" class="small-input">
                                                    <option>Select a state</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <label class="margin-15px-bottom">ZIP <span class="text-radical-red">*</span></label>
                                                <input class="small-input" type="text" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end tab content -->
                            <div class="col-12 margin-15px-top">
                                <label class="margin-15px-bottom">Order notes (optional)</label>
                                <textarea class="medium-input" rows="5" cols="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-lg-5 col-md-6">
                    <div class="bg-light-gray padding-45px-all lg-padding-30px-all sm-padding-20px-all">
                        <span class="alt-font text-large text-extra-dark-gray margin-25px-bottom d-inline-block font-weight-500">Your order</span>
                        <table class="total-price-table checkout-total-price-table">
                            <thead class="border-bottom border-color-medium-gray text-extra-dark-gray">
                                <tr>
                                    <th class="product-name font-weight-500 w-60">Product</th>
                                    <th class="product-total pe-0 font-weight-500">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cotton Jacket - Black × 1<span class="d-block w-100">Size:XL</span></td>
                                    <td>$25.00</td>
                                </tr>
                                <tr>
                                    <td>Tennis Shorts - White × 1<span class="d-block w-100">Size:M</span></td>
                                    <td>$25.00</td>
                                </tr>
                                <tr>
                                    <td>Cashmere Sweater × 1<span class="d-block w-100">Size:S</span></td>
                                    <td>$600.00</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-500 text-extra-dark-gray">Subtotal</th>
                                    <td class="text-extra-dark-gray">$405.00</td>
                                </tr>
                                <tr class="shipping">
                                    <th class="font-weight-500 text-extra-dark-gray">Shipping</th>
                                    <td>
                                        <ul class="margin-15px-bottom">
                                            <li class="d-flex align-items-center md-margin-15px-bottom">
                                                <input id="free_shipping" type="radio" name="shipping-option" class="d-block w-auto margin-10px-right mb-0" >
                                                <label class="md-line-height-18px" for="free_shipping">Free shipping</label>
                                            </li>
                                            <li class="d-flex align-items-center md-margin-15px-bottom">
                                                <input id="flat" type="radio" name="shipping-option" class="d-block w-auto margin-10px-right mb-0">
                                                <label class="md-line-height-18px" for="flat">Flat: $12.00</label>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <input id="local_pickup" type="radio" name="shipping-option" class="d-block w-auto margin-10px-right mb-0">
                                                <label class="md-line-height-18px" for="local_pickup">Local pickup</label>
                                            </li>
                                        </ul>
                                        <p class="text-start text-small mb-0">Shipping options will be updated during checkout.</p>
                                    </td>
                                </tr>
                                <tr class="total-amount">
                                    <th class="font-weight-500 text-extra-dark-gray">Total</th>
                                    <td>
                                        <h6 class="d-block font-weight-500 mb-0 text-extra-dark-gray">$405.00</h6>
                                        <span class="text-small">(Includes $19.29 tax)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="padding-40px-all bg-white box-shadow-large margin-20px-top margin-40px-bottom checkout-accordion lg-padding-30px-all md-padding-20px-all sm-padding-15px-lr">
                            <div class="w-100" id="accordion-style-05">
                                <!-- start tab content -->
                                <div class="heading active-accordion">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto margin-10px-right mb-0" type="radio" name="payment-option" >
                                        <span class="d-inline-block">Direct bank transfer</span>
                                        <a class="accordion-toggle" data-bs-toggle="collapse" data-bs-parent="#accordion-style-05" href="#style-5-collapse-1"></a>
                                    </label>
                                </div>
                                <div id="style-5-collapse-1" class="collapse show" data-bs-parent="#accordion-style-05">
                                    <div class="padding-30px-all text-small bg-light-gray margin-20px-tb sm-padding-20px-lr sm-padding-25px-tb">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                                </div>
                                <!-- end tab content -->
                                <!-- start tab content -->
                                <div class="heading active-accordion">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto margin-10px-right mb-0" type="radio" name="payment-option">
                                        <span class="d-inline-block">Check payments</span>
                                        <a class="accordion-toggle" data-bs-toggle="collapse" data-bs-parent="#accordion-style-05" href="#style-5-collapse-2"></a>
                                    </label>
                                </div>
                                <div id="style-5-collapse-2" class="collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div class="padding-30px-all text-small bg-light-gray margin-20px-tb sm-padding-20px-lr sm-padding-25px-tb">Please send a check to store name, store street, store town, store state / county, store postcode.</div>
                                </div>
                                <!-- end tab content -->
                                <!-- start tab content -->
                                <div class="heading active-accordion">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto margin-10px-right mb-0" type="radio" name="payment-option">
                                        <span class="d-inline-block">Cash on delivery</span>
                                        <a class="accordion-toggle" data-bs-toggle="collapse" data-bs-parent="#accordion-style-05" href="#style-5-collapse-3"></a>
                                    </label>
                                </div>
                                <div id="style-5-collapse-3" class="collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div class="padding-30px-all text-small bg-light-gray margin-20px-tb sm-padding-20px-lr sm-padding-25px-tb">Pay with cash upon delivery.</div>
                                </div>
                                <!-- end tab content -->
                                <!-- start tab content -->
                                <div class="heading active-accordion">
                                    <label class="margin-5px-bottom">
                                        <input class="d-inline w-auto margin-10px-right mb-0" type="radio" name="payment-option">
                                        <span class="d-inline-block">PayPal <img src="https://via.placeholder.com/319x110" alt="" class="w-120px margin-10px-left" data-no-retina=""></span>
                                        <a class="accordion-toggle" data-bs-toggle="collapse" data-bs-parent="#accordion-style-05" href="#style-5-collapse-4"></a>
                                    </label>
                                </div>
                                <div id="style-5-collapse-4" class="collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div class="padding-30px-all text-small bg-light-gray margin-20px-tb sm-padding-20px-lr sm-padding-25px-tb">You can pay with your credit card if you don’t have a PayPal account.</div>
                                </div>
                                <!-- end tab content -->
                            </div>
                        </div>
                        <p class="text-small">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a class="text-decoration-underline" href="#">privacy policy.</a></p>
                        <p class="d-flex align-items-center">
                            <input class="d-inline w-auto mb-0 margin-10px-right" type="checkbox" name="terms-and-condition">
                            <span class="text-small">I have read and agree to the website <a class="text-decoration-underline" href="#">terms and conditions</a><span class="text-red ms-1">*</span></span>
                        </p>
                        <button type="submit" class="btn btn-fancy btn-dark-gray btn-extra-large w-100 margin-15px-top">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>