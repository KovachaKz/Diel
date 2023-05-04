import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faUser as fasUser,
    faArrowRight,
    faArrowLeft,
    faMagnifyingGlass,
    faShoppingCart,
    faStore,
    faPhone,
    faEnvelope,
    faTruckFast,
    faMap,
    faPercent,
    faClock,
    faLightbulb,
    faPlug

}
from "@fortawesome/free-solid-svg-icons";

import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";

import { faYoutube, faFacebook, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(farUser, fasUser, faArrowRight, faPlug, faArrowLeft, faPercent, faEnvelope,faLightbulb, faMap, faClock, faInstagram, faPhone, faMagnifyingGlass, faTruckFast, faStore, faShoppingCart, faYoutube, faFacebook, faGoogle, faTwitter);

export default FontAwesomeIcon;